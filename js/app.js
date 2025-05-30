const screens = [
  'home-screen', 'courses-screen', 'modules-screen', 'chapters-screen',
  'chapter-content-screen', 'quiz-setup-screen', 'quiz-screen',
  'quiz-results-screen', 'config-setup-screen', 'config-screen',
  'config-results-screen', 'favorites-screen', 'progress-screen',
  'about-screen'
];

let navigationHistory = ['home-screen'];
let currentScreen = 'home-screen';
let currentCourseId = null;
let currentChapter = null;

// Fonction utilitaire pour mélanger un tableau (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function showModal(message, title = 'Notification', type = 'success') {
  const modal = document.getElementById('modal');
  const iconSvg = type === 'success' 
    ? `<svg class="w-6 h-6 text-green-500 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    : `<svg class="w-6 h-6 text-red-500 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').innerHTML = `${iconSvg}${message}`;
  modal.classList.remove('hidden');
  modal.removeAttribute('inert');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('modal-close').focus();
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.setAttribute('inert', '');
  modal.setAttribute('aria-hidden', 'true');
}

document.getElementById('modal-close').addEventListener('click', closeModal);

function showScreen(screenId) {
  if (!screens.includes(screenId)) {
    console.error(`Écran invalide : ${screenId}`);
    return;
  }
  currentScreen = screenId;
  screens.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
  updateFABs(screenId);
  updateBackButton(screenId);
  const audio = document.getElementById('bg-music');
  if (screenId !== 'quiz-screen' && screenId !== 'config-screen') {
    audio.pause();
  }
  if (screenId !== navigationHistory[navigationHistory.length - 1]) {
    navigationHistory.push(screenId);
  }
  if (['modules-screen', 'chapters-screen', 'chapter-content-screen'].includes(screenId)) {
    bindSearchInput();
  }
}

function updateBackButton(screenId) {
  const backButton = document.getElementById('back-button');
  const isHidden = screenId === 'home-screen' || screenId === 'quiz-results-screen' || screenId === 'config-results-screen';
  backButton.classList.toggle('hidden', isHidden);
  if (isHidden) {
    backButton.setAttribute('inert', '');
    backButton.setAttribute('tabindex', '-1');
    backButton.setAttribute('aria-hidden', 'true');
  } else {
    backButton.removeAttribute('inert');
    backButton.removeAttribute('tabindex');
    backButton.setAttribute('aria-hidden', 'false');
  }
}

function goBack() {
  if (navigationHistory.length > 1) {
    const currentScreen = navigationHistory[navigationHistory.length - 1];
    if (currentScreen === 'quiz-setup-screen' || currentScreen === 'config-setup-screen') {
      navigationHistory = ['home-screen'];
      showScreen('home-screen');
    } else {
      navigationHistory.pop();
      const previousScreen = navigationHistory[navigationHistory.length - 1];
      showScreen(previousScreen);
    }
  }
}

document.getElementById('back-button').addEventListener('click', goBack);

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

function bindSearchInput() {
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.removeEventListener('input', handleSearch);
    input.addEventListener('input', handleSearch);
    input.setAttribute('aria-label', 'Rechercher modules ou chapitres');
  });
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const results = [];
  if (currentCourseId) {
    const course = data.courses.find(c => c.id === currentCourseId);
    if (course) {
      course.modules.forEach(module => {
        if (module.name.toLowerCase().includes(query)) {
          results.push({ course: course.name, module: module.name, chapter: null });
        }
        module.chapters.forEach(chapter => {
          if (chapter.name.toLowerCase().includes(query)) {
            results.push({ course: course.name, module: module.name, chapter: chapter.name });
          }
        });
      });
    }
  }
  const resultsDiv = e.target.closest('.mb-6').querySelector('.search-results');
  resultsDiv.innerHTML = results.map(r => `
    <div class="p-2 bg-white dark:bg-gray-800 rounded-lg shadow">
      ${r.course} > ${r.module}${r.chapter ? ' > ' + r.chapter : ''}
    </div>
  `).join('');
}

function showCourses() {
  if (!data.courses) {
    showModal('Erreur : Données des cours non disponibles.', 'Erreur', 'danger');
    return;
  }
  const coursesDiv = document.getElementById('courses-screen');
  coursesDiv.innerHTML = data.courses.map(course => `
    <div class="card" onclick="showModules(${course.id})">${course.name}</div>
  `).join('');
  showScreen('courses-screen');
}

function showModules(courseId) {
  currentCourseId = courseId;
  const course = data.courses.find(c => c.id === courseId);
  if (!course) {
    showModal('Cours non trouvé.', 'Erreur', 'danger');
    return;
  }
  const modulesDiv = document.getElementById('modules-screen');
  modulesDiv.innerHTML = `
    <div class="mb-6">
      <input class="search-input w-full p-3 rounded-lg bg-white dark:bg-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Rechercher modules ou chapitres...">
      <div class="search-results mt-2"></div>
    </div>
    ${course.modules.map(module => `
      <div class="card" onclick="showChapters(${courseId}, ${module.id})">${module.name}</div>
    `).join('')}
  `;
  showScreen('modules-screen');
}

function showChapters(courseId, moduleId) {
  currentCourseId = courseId;
  const course = data.courses.find(c => c.id === courseId);
  if (!course) {
    showModal('Cours non trouvé.', 'Erreur', 'danger');
    return;
  }
  const module = course.modules.find(m => m.id === moduleId);
  if (!module) {
    showModal('Module non trouvé.', 'Erreur', 'danger');
    return;
  }
  const chaptersDiv = document.getElementById('chapters-screen');
  chaptersDiv.innerHTML = `
    <div class="mb-6">
      <input class="search-input w-full p-3 rounded-lg bg-white dark:bg-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Rechercher modules ou chapitres...">
      <div class="search-results mt-2"></div>
    </div>
    ${module.chapters.map(chapter => `
      <div class="card" onclick="showChapterContent(${courseId}, ${module.id}, ${chapter.id})">${chapter.name}</div>
    `).join('')}
  `;
  showScreen('chapters-screen');
}

function showChapterContent(courseId, moduleId, chapterId) {
  currentCourseId = courseId;
  const course = data.courses.find(c => c.id === courseId);
  if (!course) {
    showModal('Cours non trouvé.', 'Erreur', 'danger');
    return;
  }
  const module = course.modules.find(m => m.id === moduleId);
  if (!module) {
    showModal('Module non trouvé.', 'Erreur', 'danger');
    return;
  }
  const chapter = module.chapters.find(c => c.id === chapterId);
  if (!chapter) {
    showModal('Chapitre non trouvé.', 'Erreur', 'danger');
    return;
  }
  currentChapter = { courseId, moduleId, chapterId, name: chapter.name };
  const chapterContentScreenDiv = document.getElementById('chapter-content-screen');
  chapterContentScreenDiv.innerHTML = `
    <div class="mb-6">
      <input class="search-input w-full p-3 rounded-lg bg-white dark:bg-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Rechercher modules ou chapitres...">
      <div class="search-results mt-2"></div>
    </div>
    ${chapter.content}
  `;
  showScreen('chapter-content-screen');
}

function showQuizSetup() {
  if (!data.courses) {
    showModal('Erreur : Données des cours non disponibles.', 'Erreur', 'danger');
    return;
  }
  const quizCourseSelect = document.getElementById('quiz-course');
  quizCourseSelect.innerHTML = '<option value="">Sélectionner un cours</option>' + 
    data.courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  document.getElementById('quiz-num-questions').value = '';
  document.getElementById('quiz-num-questions').setAttribute('min', '1');
  navigationHistory = ['home-screen', 'quiz-setup-screen'];
  showScreen('quiz-setup-screen');
}

const startQuiz = function () {
  const courseId = parseInt(document.getElementById('quiz-course').value);
  const numQuestions = parseInt(document.getElementById('quiz-num-questions').value);
  if (!courseId || !numQuestions || numQuestions < 1) {
    return showModal('Veuillez sélectionner un cours et un nombre de questions valide.', 'Erreur', 'danger');
  }
  if (!data.quizzes) {
    return showModal('Erreur : Données des quiz non disponibles.', 'Erreur', 'danger');
  }
  const quiz = data.quizzes.find(q => q.courseId === courseId);
  if (!quiz || quiz.questions.length < numQuestions) {
    return showModal('Pas assez de questions disponibles.', 'Erreur', 'danger');
  }
  const questions = shuffleArray(quiz.questions).slice(0, numQuestions);
  let currentQuestion = 0;
  let score = 0;
  let quizResults = [];

  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('quiz-question').textContent = q.question;
    document.getElementById('quiz-options').innerHTML = q.options.map((opt, index) => `
      <div class="flex items-center">
        <input type="radio" name="quiz-option" id="option-${index}" value="${index}" class="hidden peer" aria-label="Option ${index + 1}">
        <label for="option-${index}" class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 transition-all duration-200 quiz-option-label" data-index="${index}">${opt}</label>
      </div>
    `).join('');
    document.getElementById('quiz-feedback').innerHTML = '';

    const labels = document.querySelectorAll('.quiz-option-label');
    labels.forEach(label => {
      label.addEventListener('click', () => {
        labels.forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
      });
    });
  }

  document.getElementById('quiz-submit').onclick = () => {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if (!selectedOption) return showModal('Veuillez sélectionner une option.', 'Erreur', 'danger');
    const selectedIndex = parseInt(selectedOption.value);
    const isCorrect = selectedIndex === questions[currentQuestion].answer;
    if (isCorrect) score++;
    quizResults.push({
      question: questions[currentQuestion].question,
      selectedOption: questions[currentQuestion].options[selectedIndex],
      correctOption: questions[currentQuestion].options[questions[currentQuestion].answer],
      isCorrect: isCorrect
    });
    document.getElementById('quiz-feedback').innerHTML = isCorrect 
      ? '<p class="text-green-500">Correct !</p>'
      : `<p class="text-red-500">Incorrect. Bonne réponse : ${questions[currentQuestion].options[questions[currentQuestion].answer]}</p>`;
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        saveQuizProgress(courseId, score, questions.length);
        document.getElementById('quiz-results-screen').innerHTML = `
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-center">Résultats</h2>
            <p class="text-center">Score: ${score}/${questions.length}</p>
            <div class="space-y-2">
              ${quizResults.map((result, index) => `
                <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
                  <p><strong>Question ${index + 1}:</strong> ${result.question}</p>
                  <p><strong>Votre réponse:</strong> ${result.selectedOption} ${result.isCorrect ? '<span class="text-green-500">✔</span>' : '<span class="text-red-500">✘</span>'}</p>
                  ${!result.isCorrect ? `<p><strong>Bonne réponse:</strong> ${result.correctOption}</p>` : ''}
                </div>
              `).join('')}
            </div>
            <div class="text-center">
              <button class="btn mt-4" onclick="showQuizSetup()">Rejouer</button>
            </div>
          </div>
        `;
        navigationHistory = ['home-screen'];
        showScreen('quiz-results-screen');
      }
    }, 1500);
  };

  const restartButton = document.getElementById('quiz-restart');
  if (restartButton) {
    restartButton.onclick = () => {
      showQuizSetup();
    };
  }

  showQuestion();
  showScreen('quiz-screen');
};

function showConfigSetup() {
  if (!data.courses) {
    showModal('Erreur : Données des cours non disponibles.', 'Erreur', 'danger');
    return;
  }
  const configCourseSelect = document.getElementById('config-course');
  const configTypeSelect = document.getElementById('config-type');
  configCourseSelect.innerHTML = '<option value="">Sélectionner un cours</option>' + 
    data.courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  configTypeSelect.innerHTML = '<option value="">Choisir une configuration</option>';
  
  configCourseSelect.addEventListener('change', () => {
    const courseId = parseInt(configCourseSelect.value);
    configTypeSelect.innerHTML = '<option value="">Choisir une configuration</option>';
    if (courseId) {
      if (!data.configs) {
        showModal('Erreur : Données des configurations non disponibles.', 'Erreur', 'danger');
        return;
      }
      const config = data.configs.find(c => c.courseId === courseId);
      if (config && config.configurations) {
        configTypeSelect.innerHTML += config.configurations.map(c => `
          <option value="${c.id}">${c.name}</option>
        `).join('');
      }
    }
  });

  navigationHistory = ['home-screen', 'config-setup-screen'];
  showScreen('config-setup-screen');
}

function showConfigIntro(courseId, configId) {
  if (!data.configs) {
    showModal('Erreur : Données des configurations non disponibles.', 'Erreur', 'danger');
    return;
  }
  const config = data.configs.find(c => c.courseId === courseId);
  const selectedConfig = config?.configurations.find(c => c.id === configId);
  if (!selectedConfig) {
    showModal('Configuration non trouvée.', 'Erreur', 'danger');
    return;
  }
  const intro = selectedConfig.intro || { text: '<p>Pas d’introduction disponible.</p>', svg: '' };
  
  const popup = document.createElement('div');
  popup.id = 'config-intro-popup';
  popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 mt-16 overflow-y-auto';
  popup.setAttribute('aria-hidden', 'false');
  popup.innerHTML = `
    <div class="popup-content bg-white dark:bg-gray-800 rounded-lg shadow-lg pt-16 p-6 max-w-lg w-full">
      <div class="prose dark:prose-invert">${intro.text}</div>
      <div class="mt-4">${intro.svg}</div>
      <button id="intro-understood" class="btn mt-4" aria-label="Démarrer la configuration">Compris</button>
    </div>
  `;
  document.body.appendChild(popup);
  
  document.getElementById('intro-understood').onclick = () => {
    popup.remove();
    startConfig(courseId, configId);
  };
}

function startConfig(courseId, configId) {
  const courseIdNum = parseInt(courseId);
  const configIdNum = parseInt(configId);
  if (!courseIdNum || !configIdNum) {
    return showModal('Veuillez sélectionner un cours et une configuration.', 'Erreur', 'danger');
  }
  
  if (!data.configs) {
    return showModal('Erreur : Données des configurations non disponibles.', 'Erreur', 'danger');
  }
  const config = data.configs.find(c => c.courseId === courseIdNum);
  if (!config || !config.configurations) {
    return showModal('Aucune configuration disponible.', 'Erreur', 'danger');
  }
  
  const selectedConfig = config.configurations.find(c => c.id === configIdNum);
  if (!selectedConfig) {
    return showModal('Configuration non trouvée.', 'Erreur', 'danger');
  }
  
  const tasks = selectedConfig.tasks;
  if (!tasks || tasks.length === 0) {
    return showModal('Aucune tâche disponible.', 'Erreur', 'danger');
  }
  
  let currentTask = 0;

  function showTask() {
    const task = tasks[currentTask];
    document.getElementById('config-question').innerHTML = task.description;
    document.getElementById('config-input').value = '';
    document.getElementById('config-feedback').innerHTML = '';
    document.getElementById('config-label').textContent = task.label;
    const visualizationDiv = document.getElementById('ping-visualization');
    if (visualizationDiv) visualizationDiv.innerHTML = '';
  }

  document.getElementById('config-submit').onclick = () => {
    const input = document.getElementById('config-input').value.trim();
    const task = tasks[currentTask];
    if (input === task.command) {
      saveConfigProgress(courseIdNum, task.id);
      let feedback = '<p class="text-green-500">Correct !</p>';
      if (task.pingSimulation) {
        feedback += `
          <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <p>Résultats du ping de ${task.pingSimulation.pingSource} vers ${task.pingSimulation.pingTarget} :</p>
            <p>Packets: Sent = ${task.pingSimulation.packetsSent}, Received = ${task.pingSimulation.packetsReceived}, Lost = ${task.pingSimulation.packetsLost}</p>
            <p>Round-trip time: Min = ${task.pingSimulation.roundTripTime.min}ms, Avg = ${task.pingSimulation.roundTripTime.avg}ms, Max = ${task.pingSimulation.roundTripTime.max}</p>
          </div>
          <button id="config-continue" class="btn mt-4" aria-label="Passer à la tâche suivante">Continuer</button>
        `;
        const visualizationDiv = document.getElementById('ping-visualization');
        visualizationDiv.innerHTML = `
          <svg width="100%" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-100 dark:stroke-gray-600"/>
            <text x="40" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-100 text-sm">PC1</text>
            <rect x="240" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-100 dark:stroke-gray-600"/>
            <text x="260" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-100 text-sm">PC2</text>
            <line x1="60" y1="50" x2="240" y2="50" stroke="#3b82f6" stroke-width="8" stroke-dasharray="10,10" class="ping-line dark:stroke-blue-400">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
            </line>
          </svg>
        `;
      } else {
        feedback += `<button id="config-continue" class="btn mt-2" aria-label="Passer à la tâche suivante">Continuer</button>`;
      }
      document.getElementById('config-feedback').innerHTML = feedback;

      document.getElementById('config-continue').onclick = () => {
        currentTask++;
        if (currentTask < tasks.length) {
          showTask();
        } else {
          document.getElementById('config-results-screen').innerHTML = `
            <div class="space-y-4 text-center p-4">
              <h2 class="text-2xl font-bold">Configuration terminée !</h2>
              <p>Vous avez terminé la configuration : ${selectedConfig.name}.</p>
              <div class="prose dark:prose-invert mx-auto">
                ${selectedConfig.summary || '<p>Pas de résumé disponible.</p>'}
              </div>
              <button class="btn mt-4" onclick="showConfigSetup()">Recommencer</button>
            </div>
          `;
          navigationHistory = ['home-screen'];
          showScreen('config-results-screen');
        }
      };
    } else {
      document.getElementById('config-feedback').innerHTML = '<p class="text-red-500">Incorrect. Essayez encore.</p>';
    }
  };

  document.getElementById('config-hint').onclick = () => {
    showModal(tasks[currentTask].hint, 'Indice', 'success');
  };

  showTask();
  showScreen('config-screen');
}

function updateFABs(screenId) {
  const fabFinish = document.getElementById('fab-finish');
  const fabFavorite = document.getElementById('fab-favorite');
  const fabMute = document.getElementById('fab-mute');
  
  fabFinish.classList.toggle('hidden', screenId !== 'chapter-content-screen');
  fabFavorite.classList.toggle('hidden', !['chapter-content-screen', 'quiz-screen', 'config-screen'].includes(screenId));
  fabMute.classList.toggle('hidden', !['quiz-screen', 'config-screen'].includes(screenId));

  fabFinish.setAttribute('aria-hidden', fabFinish.classList.contains('hidden'));
  fabFavorite.setAttribute('aria-hidden', fabFavorite.classList.contains('hidden'));
  fabMute.setAttribute('aria-hidden', fabMute.classList.contains('hidden'));
}

function markChapterFinished() {
  if (currentChapter) {
    markChapterComplete(currentChapter.courseId, currentChapter.moduleId, currentChapter.chapterId);
    showModal('Chapitre marqué comme terminé !', 'Succès', 'success');
  } else {
    showModal('Erreur : aucun chapitre sélectionné.', 'Erreur', 'danger');
  }
}

function toggleFavorite() {
  if (currentScreen === 'chapter-content-screen' && currentChapter) {
    const favorites = getFavorites();
    const exists = favorites.find(f => f.type === 'chapter' && f.id === currentChapter.chapterId);
    if (exists) {
      removeFavorite('chapter', currentChapter.chapterId);
      showModal('Retiré des favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    } else {
      addFavorite('chapter', currentChapter.chapterId, currentChapter.name);
      showModal('Ajouté aux favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    }
  } else if (currentScreen === 'quiz-screen') {
    const courseId = parseInt(document.getElementById('quiz-course').value);
    const course = data.courses.find(c => c.id === courseId);
    const name = `Quiz ${course ? course.name : 'Inconnu'}`;
    const favorites = getFavorites();
    const exists = favorites.find(f => f.type === 'quiz' && f.id === courseId);
    if (exists) {
      removeFavorite('quiz', courseId);
      showModal('Retiré des favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    } else {
      addFavorite('quiz', courseId, name);
      showModal('Ajouté aux favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    }
  } else if (currentScreen === 'config-screen') {
    const courseId = parseInt(document.getElementById('config-course').value);
    const configId = parseInt(document.getElementById('config-type').value);
    const course = data.courses.find(c => c.id === courseId);
    const config = data.configs.find(c => c.courseId === courseId)?.configurations.find(c => c.id === configId);
    const name = `Config ${config ? config.name : 'Inconnu'}`;
    const favorites = getFavorites();
    const exists = favorites.find(f => f.type === 'config' && f.id === `${courseId}-${configId}`);
    if (exists) {
      removeFavorite('config', `${courseId}-${configId}`);
      showModal('Retiré des favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    } else {
      addFavorite('config', `${courseId}-${configId}`, name);
      showModal('Ajouté aux favoris !', 'Succès', 'success');
      if (document.getElementById('favorites-screen') === currentScreen) {
        renderFavorites();
      }
    }
  }
}

function shareApp() {
  if (navigator.share) {
    navigator.share({
      title: 'Quiz Cisco Game',
      text: 'Découvrez Quiz Cisco Game, l\'application idéale pour apprendre les réseaux Cisco CCNA !',
      url: window.location.href
    }).then(() => {
      showModal('Application partagée avec succès !', 'Succès', 'success');
    }).catch(() => {
      showModal('Erreur lors du partage.', 'Erreur', 'danger');
    });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showModal('Lien copié dans le presse-papiers !', 'Succès', 'success');
    }).catch(() => {
      showModal('Erreur lors de la copie du lien.', 'Erreur', 'danger');
    });
  }
}

// Gestion du son
const audio = document.getElementById('bg-music');
audio.src = 'assets/music/track1.mp3';
let isMuted = false; // Variable pour suivre l'état du son

// Fonction pour basculer le son (mute/unmute)
function toggleMute() {
  if (isMuted) {
    audio.muted = false; // Réactive le son
    isMuted = false;
    document.getElementById('fab-mute').textContent = 'Muet'; // Met à jour le texte du bouton
  } else {
    audio.muted = true; // Coupe le son
    isMuted = true;
    document.getElementById('fab-mute').textContent = 'Son'; // Met à jour le texte du bouton
  }
}

// Écouteurs pour jouer l’audio sur certains écrans
document.getElementById('quiz-screen').addEventListener('transitionend', () => {
  if (!document.getElementById('quiz-screen').classList.contains('hidden')) audio.play();
});
document.getElementById('config-screen').addEventListener('transitionend', () => {
  if (!document.getElementById('config-screen').classList.contains('hidden')) audio.play();
});

function showFavorites() {
  renderFavorites();
  showScreen('favorites-screen');
}

function showProgress() {
  renderProgress();
  showScreen('progress-screen');
}

// Écouteur pour le bouton de configuration
document.getElementById('config-submit-btn').addEventListener('click', () => {
  const courseId = parseInt(document.getElementById('config-course').value);
  const configId = parseInt(document.getElementById('config-type').value);
  showConfigIntro(courseId, configId);
});

// Initialisation
showScreen('home-screen');
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

function addFavorite(type, id, name) {
  const favorites = getFavorites();
  if (!favorites.find(f => f.type === type && f.id === id)) {
    favorites.push({ type, id, name });
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

function removeFavorite(type, id) {
  let favorites = getFavorites();
  favorites = favorites.filter(f => !(f.type === type && f.id === id));
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function renderFavorites() {
  const favoritesDiv = document.getElementById('favorites-screen');
  const favorites = getFavorites();
  if (favorites.length === 0) {
    favoritesDiv.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">Aucun favori ajouté.</p>';
    return;
  }
  favoritesDiv.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-center">Favoris</h2>
    <div class="space-y-4">
      ${favorites.map(favorite => `
        <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800 flex justify-between items-center">
          <span>${favorite.name}</span>
          <button class="btn btn-danger" onclick="removeFavorite('${favorite.type}', '${favorite.id}'); renderFavorites();">Supprimer</button>
        </div>
      `).join('')}
    </div>
  `;
}

function saveQuizProgress(courseId, score, totalQuestions) {
  const quizProgress = JSON.parse(localStorage.getItem('quizProgress')) || [];
  quizProgress.push({
    courseId,
    score,
    totalQuestions,
    date: new Date().toISOString(),
  });
  localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
}

function saveConfigProgress(courseId, taskId) {
  const configProgress = JSON.parse(localStorage.getItem('configProgress')) || [];
  configProgress.push({
    courseId,
    taskId,
    date: new Date().toISOString(),
  });
  localStorage.setItem('configProgress', JSON.stringify(configProgress));
}

function markChapterComplete(courseId, moduleId, chapterId) {
  const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || [];
  if (!completedChapters.find(c => c.courseId === courseId && c.moduleId === moduleId && c.chapterId === chapterId)) {
    completedChapters.push({ courseId, moduleId, chapterId, date: new Date().toISOString() });
    localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
  }
}

function renderProgress() {
  const progressDiv = document.getElementById('progress-screen');
  const quizProgress = JSON.parse(localStorage.getItem('quizProgress')) || [];
  const configProgress = JSON.parse(localStorage.getItem('configProgress')) || [];
  const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || [];

  const quizHtml = quizProgress.length > 0 ? `
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">Progression des Quiz</h3>
      ${quizProgress.map(p => `
        <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
          <p>Cours ID: ${p.courseId}</p>
          <p>Score: ${p.score}/${p.totalQuestions}</p>
          <p>Date: ${new Date(p.date).toLocaleString()}</p>
        </div>
      `).join('')}
    </div>
  ` : '<p class="text-gray-500 dark:text-gray-400">Aucun quiz terminé.</p>';

  const configHtml = configProgress.length > 0 ? `
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">Progression des Configurations</h3>
      ${configProgress.map(p => `
        <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
          <p>Cours ID: ${p.courseId}</p>
          <p>Tâche ID: ${p.taskId}</p>
          <p>Date: ${new Date(p.date).toLocaleString()}</p>
        </div>
      `).join('')}
    </div>
  ` : '<p class="text-gray-500 dark:text-gray-400">Aucune configuration terminée.</p>';

  const chaptersHtml = completedChapters.length > 0 ? `
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">Chapitres Terminés</h3>
      ${completedChapters.map(c => `
        <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
          <p>Cours ID: ${c.courseId}</p>
          <p>Module ID: ${c.moduleId}</p>
          <p>Chapitre ID: ${c.chapterId}</p>
          <p>Date: ${new Date(c.date).toLocaleString()}</p>
        </div>
      `).join('')}
    </div>
  ` : '<p class="text-gray-500 dark:text-gray-400">Aucun chapitre terminé.</p>';

  progressDiv.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-center">Progression</h2>
    ${quizHtml}
    ${configHtml}
    ${chaptersHtml}
  `;
}
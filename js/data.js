const data = {
  courses: [
    {
      id: 1,
      name: "CCNA 1: Introduction aux réseaux",
      modules: [
        {
          id: 1,
          name: "MD1: Les bases des réseaux",
          chapters: [
            {
              id: 1,
              name: "CH1: Les réseaux dans notre quotidien",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Les réseaux dans notre quotidien</h2>
                  <p>Les réseaux connectent les individus et les appareils. Ils permettent email, streaming, et IoT. Les types incluent :</p>
                  <ul>
                    <li><strong>LAN</strong> : Réseau local (ex. : bureau).</li>
                    <li><strong>WAN</strong> : Réseau étendu (ex. : Internet).</li>
                    <li><strong>Internet</strong> : Réseau mondial.</li>
                  </ul>
                  <p>Les ISP fournissent l'accès, et les protocoles standardisent la communication. Les réseaux doivent être sécurisés et évolutifs.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="50" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                    <text x="40" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                    <rect x="80" y="50" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                    <text x="100" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC2</text>
                    <rect x="50" y="100" width="60" height="30" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="80" y="95" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <line x1="40" y1="90" x2="60" y2="100" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="100" y1="90" x2="100" y2="100" stroke="#3b82f6" stroke-width="2"/>
                    <rect x="200" y="60" width="40" height="40" fill="#10b981" stroke="#1f2937" stroke-width="2" class="dark:fill-green-400"/>
                    <text x="220" y="55" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Routeur</text>
                    <line x1="110" y1="115" x2="200" y2="80" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="250" cy="80" r="20" fill="#f59e0b" stroke="#1f2937" stroke-width="2" class="dark:fill-yellow-400"/>
                    <text x="250" y="85" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">WAN</text>
                  </svg>
                </div>
              `
            },
            {
              id: 2,
              name: "CH2: Types de réseaux et topologies",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Types de réseaux et topologies</h2>
                  <p>Les réseaux varient par taille et topologie :</p>
                  <ul>
                    <li><strong>LAN</strong> : Petite zone, rapide.</li>
                    <li><strong>WAN</strong> : Grandes distances.</li>
                    <li><strong>Topologie étoile</strong> : Switch central.</li>
                    <li><strong>Topologie bus</strong> : Câble unique.</li>
                  </ul>
                  <p>Les topologies influencent fiabilité et maintenance.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="135" y="65" width="30" height="30" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="150" y="60" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <rect x="50" y="20" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="65" y="15" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                    <rect x="220" y="20" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="235" y="15" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC2</text>
                    <rect x="50" y="110" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="65" y="105" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC3</text>
                    <rect x="220" y="110" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="235" y="105" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC4</text>
                    <line x1="65" y1="50" x2="135" y2="80" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="235" y1="50" x2="165" y2="80" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="65" y1 "140" x2="135" y2="80" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="235" y1="140" x2="165" y2="80" stroke="#3b82f6" stroke-width="2"/>
                  </svg>
                </div>
              `
            }
          ]
        },
        {
          id: 2,
          name: "MD2: Modèles de communication réseau",
          chapters: [
            {
              id: 1,
              name: "CH1: Le modèle OSI",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Le modèle OSI</h2>
                  <p>Le modèle OSI divise la communication en 7 couches :</p>
                  <ol>
                    <li><strong>Physique</strong> : Transmission des bits via câbles et signaux.</li>
                    <li><strong>Liaison</strong> : Gestion des trames et adresses MAC.</li>
                    <li><strong>Réseau</strong> : Routage avec IP.</li>
                    <li><strong>Transport</strong> : Contrôle avec TCP/UDP.</li>
                    <li><strong>Session</strong> : Gestion des sessions de connexion.</li>
                    <li><strong>Présentation</strong> : Formatage des données (ex. : chiffrement).</li>
                    <li><strong>Application</strong> : Interfaces utilisateur (ex. : HTTP, FTP).</li>
                  </ol>
                  <p>Ce modèle aide à diagnostiquer les problèmes réseau.</p>
                  <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="100" y="10" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Application</text>
                    <rect x="100" y="40" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="50" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Présentation</text>
                    <rect x="100" y="70" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="80" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Session</text>
                    <rect x="100" y="100" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="110" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Transport</text>
                    <rect x="100" y="130" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="140" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Réseau</text>
                    <rect x="100" y="160" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="170" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Liaison</text>
                    <rect x="100" y="190" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="200" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Physique</text>
                  </svg>
                </div>
              `
            },
            {
              id: 2,
              name: "CH2: Le modèle TCP/IP",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Le modèle TCP/IP</h2>
                  <p>Le modèle TCP/IP, base d'Internet, utilise 4 couches :</p>
                  <ol>
                    <li><strong>Accès réseau</strong> : Gestion physique et Ethernet.</li>
                    <li><strong>Internet</strong> : Routage avec IP.</li>
                    <li><strong>Transport</strong> : Fiabilité avec TCP/UDP.</li>
                    <li><strong>Application</strong> : Protocoles comme HTTP, DNS.</li>
                  </ol>
                  <p>Il est plus simple que OSI mais très efficace.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="100" y="20" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="30" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Application</text>
                    <rect x="100" y="50" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="60" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Transport</text>
                    <rect x="100" y="80" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="90" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Internet</text>
                    <rect x="100" y="110" width="100" height="20" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="150" y="120" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Accès réseau</text>
                  </svg>
                </div>
              `
            }
          ]
        },
        {
          id: 3,
          name: "MD3: Introduction aux protocoles et à l’adressage",
          chapters: [
            {
              id: 1,
              name: "CH1: Protocoles Ethernet",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Protocoles Ethernet</h2>
                  <p>Ethernet (couches 1–2) utilise :</p>
                  <ul>
                    <li><strong>Trames</strong> : Contiennent adresses MAC source et destination.</li>
                    <li><strong>CSMA/CD</strong> : Gère les collisions dans les réseaux partagés.</li>
                    <li><strong>Switches</strong> : Segmentent le trafic pour améliorer les performances.</li>
                  </ul>
                  <p>Essentiel pour les réseaux locaux.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="50" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                    <text x="40" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                    <rect x="80" y="50" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                    <text x="100" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC2</text>
                    <rect x="50" y="100" width="60" height="30" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="80" y="95" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <line x1="40" y1="90" x2="60" y2="100" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="100" y1="90" x2="100" y2="100" stroke="#3b82f6" stroke-width="2"/>
                    <rect x="200" y="60" width="40" height="40" fill="#10b981" stroke="#1f2937" stroke-width="2" class="dark:fill-green-400"/>
                    <text x="220" y="55" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Routeur</text>
                    <line x1="110" y1="115" x2="200" y2="80" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="250" cy="80" r="20" fill="#f59e0b" stroke="#1f2937" stroke-width="2" class="dark:fill-yellow-400"/>
                    <text x="250" y="85" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">WAN</text>
                  </svg>
                </div>
              `
            },
            {
              id: 2,
              name: "CH2: Adressage IPv4",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Adressage IPv4</h2>
                  <p>IPv4 (32 bits, ex. : 192.168.1.1) inclut :</p>
                  <ul>
                    <li><strong>Masque de sous-réseau</strong> : Sépare réseau et hôte (ex. : 255.255.255.0).</li>
                    <li><strong>Classes</strong> : A (1-126), B (128-191), C (192-223).</li>
                    <li><strong>DHCP</strong> : Attribue des IP dynamiquement.</li>
                  </ul>
                  <p>Essentiel pour connecter les appareils.</p>
                  <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="20" width="200" height="60" fill="#e5e7eb" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-700"/>
                    <text x="150" y="40" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">192.168.1.1/24</text>
                    <text x="150" y="60" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Masque: 255.255.255.0</text>
                  </svg>
                </div>
              `
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "CCNA 2: Switching, Routing, and Wireless Essentials",
      modules: [
        {
          id: 1,
          name: "MD1: Configuration des VLANs",
          chapters: [
            {
              id: 1,
              name: "CH1: Introduction aux VLANs",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Introduction aux VLANs</h2>
                  <p>Les VLANs (Virtual Local Area Networks) segmentent un réseau pour améliorer la sécurité et la performance. Ils permettent :</p>
                  <ul>
                    <li><strong>Séparation logique</strong> : Différents départements (ex. : COMPTA, VENTE).</li>
                    <li><strong>Isolation</strong> : Réduit les collisions.</li>
                    <li><strong>Commande</strong> : 'vlan 10' pour créer un VLAN.</li>
                  </ul>
                  <p>Utilisé avec des switches comme Cisco 2960.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="50" height="50" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="75" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <rect x="20" y="120" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="35" y="115" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">VLAN10</text>
                    <rect x="80" y="120" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="95" y="115" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">VLAN20</text>
                    <line x1="75" y1="100" x2="35" y2="120" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="75" y1="100" x2="95" y2="120" stroke="#3b82f6" stroke-width="2"/>
                  </svg>
                </div>
              `
            },
            {
              id: 2,
              name: "CH2: Configuration des ports d'accès",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Configuration des ports d'accès</h2>
                  <p>Les ports d'accès assignent des VLANs à des appareils spécifiques :</p>
                  <ul>
                    <li><strong>Commande</strong> : 'switchport mode access'.</li>
                    <li><strong>Attribution</strong> : 'switchport access vlan 10'.</li>
                    <li><strong>Exemple</strong> : Fa0/1 pour VLAN 10.</li>
                  </ul>
                  <p>Essentiel pour isoler le trafic.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="50" height="50" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="75" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <rect x="20" y="120" width="30" height="30" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300"/>
                    <text x="35" y="115" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                    <line x1="50" y1="100" x2="20" y2="120" stroke="#3b82f6" stroke-width="2"/>
                    <text x="35" y="100" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">VLAN10</text>
                  </svg>
                </div>
              `
            }
          ]
        },
        {
          id: 2,
          name: "MD2: Configuration des trunks et inter-VLAN routing",
          chapters: [
            {
              id: 1,
              name: "CH1: Configuration des trunks",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Configuration des trunks</h2>
                  <p>Les trunks transportent plusieurs VLANs entre switches :</p>
                  <ul>
                    <li><strong>Commande</strong> : 'switchport mode trunk'.</li>
                    <li><strong>VLAN natif</strong> : 'switchport trunk native vlan 40'.</li>
                    <li><strong>Autorisation</strong> : 'switchport trunk allowed vlan 10,20'.</li>
                  </ul>
                  <p>Utilisé pour relier Switch1 et Switch2.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="50" height="50" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="75" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch1</text>
                    <rect x="200" y="50" width="50" height="50" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="225" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch2</text>
                    <line x1="100" y1="75" x2="200" y2="75" stroke="#3b82f6" stroke-width="4" class="dark:stroke-blue-400"/>
                    <text x="150" y="80" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Trunk</text>
                  </svg>
                </div>
              `
            },
            {
              id: 2,
              name: "CH2: Routage inter-VLAN",
              content: `
                <div class="prose dark:prose-invert">
                  <h2>Routage inter-VLAN</h2>
                  <p>Le routage inter-VLAN connecte les VLANs via un routeur :</p>
                  <ul>
                    <li><strong>Router-on-a-stick</strong> : Une interface avec sous-interfaces.</li>
                    <li><strong>Commande</strong> : 'interface vlan 10' avec IP.</li>
                    <li><strong>Exemple</strong> : 192.168.10.1 pour VLAN 10.</li>
                  </ul>
                  <p>Permet la communication entre VLANs.</p>
                  <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="50" height="50" fill="#3b82f6" stroke="#1f2937" stroke-width="2" class="dark:fill-blue-400"/>
                    <text x="75" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Switch</text>
                    <rect x="200" y="50" width="50" height="50" fill="#10b981" stroke="#1f2937" stroke-width="2" class="dark:fill-green-400"/>
                    <text x="225" y="45" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Routeur</text>
                    <line x1="100" y1="75" x2="200" y2="75" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="80" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Inter-VLAN</text>
                  </svg>
                </div>
              `
            }
          ]
        }
      ]
    }
  ],
  quizzes: [
    {
      courseId: 1,
      questions: [
  {
    id: 1,
    question: "Quelle couche du modèle OSI est responsable de la commutation de trames ?",
    options: [
      "a) Couche 1",
      "b) Couche 2",
      "c) Couche 3",
      "d) Couche 4"
    ],
    answer: 1 // b)
  },
  {
    id: 2,
    question: "Quel protocole est utilisé pour attribuer automatiquement des adresses IP aux appareils ?",
    options: [
      "a) DNS",
      "b) DHCP",
      "c) FTP",
      "d) HTTP"
    ],
    answer: 1 // b)
  },
  {
    id: 3,
    question: "Quel type de câble est recommandé pour une connexion entre un switch et un routeur sur une distance de 50 mètres ?",
    options: [
      "a) Câble coaxial",
      "b) Câble à paires torsadées (UTP) Cat 6",
      "c) Fibre optique multimode",
      "d) Câble USB"
    ],
    answer: 1 // b)
  },
  {
    id: 4,
    question: "Quelle est la plage d'adresses IP pour le réseau 192.168.1.0/24 ?",
    options: [
      "a) 192.168.1.0 à 192.168.1.255",
      "b) 192.168.1.1 à 192.168.1.254",
      "c) 192.168.0.0 à 192.168.1.255",
      "d) 192.168.1.0 à 192.168.2.0"
    ],
    answer: 1 // b)
  },
  {
    id: 5,
    question: "Quel dispositif opère à la couche 3 du modèle OSI ?",
    options: [
      "a) Switch",
      "b) Hub",
      "c) Routeur",
      "d) Répéteur"
    ],
    answer: 2 // c)
  },
  {
    id: 6,
    question: "Quel port est utilisé par défaut pour le protocole HTTPS ?",
    options: [
      "a) 21",
      "b) 80",
      "c) 443",
      "d) 23"
    ],
    answer: 2 // c)
  },
  {
    id: 7,
    question: "Quel est le rôle principal d'un masque de sous-réseau ?",
    options: [
      "a) Identifier l'adresse MAC",
      "b) Déterminer la partie réseau d'une adresse IP",
      "c) Activer le routage",
      "d) Configurer un VLAN"
    ],
    answer: 1 // b)
  },
  {
    id: 8,
    question: "Quelle commande est utilisée pour tester la connectivité entre deux appareils sur un réseau ?",
    options: [
      "a) ipconfig",
      "b) ping",
      "c) tracert",
      "d) netstat"
    ],
    answer: 1 // b)
  },
  {
    id: 9,
    question: "Quel type de topologie utilise un seul câble central avec des nœuds connectés ?",
    options: [
      "a) Topologie en bus",
      "b) Topologie en étoile",
      "c) Topologie en anneau",
      "d) Topologie en maillage"
    ],
    answer: 0 // a)
  },
  {
    id: 10,
    question: "Quel protocole est utilisé pour résoudre une adresse IP à partir d'un nom de domaine ?",
    options: [
      "a) DHCP",
      "b) DNS",
      "c) ARP",
      "d) ICMP"
    ],
    answer: 1 // b)
  }
]
    },
    {
      courseId: 2,
questions : [
  {
    id: 1,
    question: "Qu’est-ce qu’un VLAN ?",
    options: [
      "a) Un domaine physique",
      "b) Un protocole réseau",
      "c) Un domaine de diffusion logique",
      "d) Un type de câble"
    ],
    answer: 2 // c)
  },
  {
    id: 2,
    question: "Quel protocole est utilisé pour marquer les trames avec des informations de VLAN sur un trunk ?",
    options: [
      "a) IS-IS",
      "b) 802.1Q",
      "c) OSPF",
      "d) RIP"
    ],
    answer: 1 // b)
  },
  {
    id: 3,
    question: "Quelle commande permet de créer un VLAN 10 nommé “Sales” ?",
    options: [
      "a) vlan create 10 name Sales",
      "b) vlan 10 puis name Sales",
      "c) switch vlan 10 Sales",
      "d) interface vlan 10"
    ],
    answer: 1 // b)
  },
  {
    id: 4,
    question: "Quel est le VLAN par défaut sur les switches Cisco ?",
    options: [
      "a) VLAN 1",
      "b) VLAN 10",
      "c) VLAN 100",
      "d) VLAN 20"
    ],
    answer: 0 // a)
  },
  {
    id: 5,
    question: "Quelle commande attribue le VLAN 20 à une interface FastEthernet 0/1 ?",
    options: [
      "a) switchport access vlan 10",
      "b) vlan 20 interface fa0/1",
      "c) switchport mode access puis switchport access vlan 20",
      "d) interface vlan 20"
    ],
    answer: 2 // c)
  },
  {
    id: 6,
    question: "Quel type de VLAN est utilisé pour la gestion des switches ?",
    options: [
      "a) VLAN natif",
      "b) VLAN de management",
      "c) VLAN voix",
      "d) VLAN par défaut"
    ],
    answer: 1 // b)
  },
  {
    id: 7,
    question: "Quel protocole permet de synchroniser les VLANs entre plusieurs switches ?",
    options: [
      "a) VTP (VLAN Trunking Protocol)",
      "b) STP (Spanning Tree Protocol)",
      "c) DTP (Dynamic Trunking Protocol)",
      "d) 802.1Q"
    ],
    answer: 0 // a)
  },
  {
    id: 8,
    question: "Quel est le mode VTP par défaut sur un switch Cisco ?",
    options: [
      "a) Client",
      "b) Server",
      "c) Transparent",
      "d) Off"
    ],
    answer: 1 // b)
  },
  {
    id: 9,
    question: "Quelle commande permet de configurer un trunk entre deux switches ?",
    options: [
      "a) switchport mode access",
      "b) switchport mode trunk",
      "c) switchport trunk enable",
      "d) trunk on"
    ],
    answer: 1 // b)
  },
  {
    id: 10,
    question: "Quel VLAN est utilisé pour le trafic non marqué dans un trunk 802.1Q ?",
    options: [
      "a) VLAN par défaut",
      "b) VLAN natif (Native VLAN)",
      "c) VLAN voix",
      "d) VLAN de management"
    ],
    answer: 1 // b)
  },
  {
    id: 11,
    question: "Quelle commande affiche la liste des VLANs configurés ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show vtp status",
      "d) show running-config"
    ],
    answer: 0 // a)
  },
  {
    id: 12,
    question: "Quel est l’avantage principal des VLANs ?",
    options: [
      "a) Augmenter la bande passante",
      "b) Segmenter les domaines de broadcast",
      "c) Simplifier le câblage",
      "d) Réduire la latence"
    ],
    answer: 1 // b)
  },
  {
    id: 13,
    question: "Quelle commande permet de vérifier le statut des trunks ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show interfaces switchport",
      "d) show vtp status"
    ],
    answer: 1 // b)
  },
  {
    id: 14,
    question: "Quel protocole permet de négocier automatiquement un trunk entre switches Cisco ?",
    options: [
      "a) VTP",
      "b) DTP (Dynamic Trunking Protocol)",
      "c) STP",
      "d) 802.1Q"
    ],
    answer: 1 // b)
  },
  {
    id: 15,
    question: "Quel est le nombre maximal de VLANs possibles avec 802.1Q ?",
    options: [
      "a) 256",
      "b) 1000",
      "c) 4096",
      "d) 1024"
    ],
    answer: 2 // c)
  },
  {
    id: 16,
    question: "Quelle commande désactive DTP sur une interface ?",
    options: [
      "a) switchport mode access",
      "b) switchport nonegotiate",
      "c) no switchport trunk",
      "d) switchport trunk off"
    ],
    answer: 1 // b)
  },
  {
    id: 17,
    question: "Quel type de VLAN est souvent utilisé pour le trafic VoIP ?",
    options: [
      "a) VLAN natif",
      "b) VLAN voix",
      "c) VLAN de management",
      "d) VLAN par défaut"
    ],
    answer: 1 // b)
  },
  {
    id: 18,
    question: "Quelle commande configure un VLAN natif sur un trunk ?",
    options: [
      "a) switchport native vlan 100",
      "b) switchport trunk native vlan 100",
      "c) vlan native 100",
      "d) trunk vlan 100"
    ],
    answer: 1 // b)
  },
  {
    id: 19,
    question: "Quelle est la différence entre un trunk et un port d’accès ?",
    options: [
      "a) Un trunk est plus rapide",
      "b) Un trunk transporte plusieurs VLANs, un port d’accès un seul",
      "c) Un port d’accès utilise 802.1Q",
      "d) Un trunk est utilisé pour les routeurs"
    ],
    answer: 1 // b)
  },
  {
    id: 20,
    question: "Quelle commande supprime un VLAN ?",
    options: [
      "a) delete vlan 10",
      "b) no vlan 10",
      "c) vlan 10 delete",
      "d) remove vlan 10"
    ],
    answer: 1 // b)
  },
  {
    id: 21,
    question: "Quel problème survient si le VLAN natif est mal configuré entre deux switches ?",
    options: [
      "a) Perte de bande passante",
      "b) Problèmes de communication et perte de trames",
      "c) Boucles réseau",
      "d) Erreurs de routage"
    ],
    answer: 1 // b)
  },
  {
    id: 22,
    question: "Quelle commande vérifie le mode VTP d’un switch ?",
    options: [
      "a) show vtp status",
      "b) show vlan brief",
      "c) show interfaces trunk",
      "d) show vtp config"
    ],
    answer: 0 // a)
  },
  {
    id: 23,
    question: "Quel est le rôle du VLAN 1 dans un switch Cisco ?",
    options: [
      "a) VLAN voix",
      "b) VLAN par défaut pour les ports non configurés",
      "c) VLAN natif uniquement",
      "d) VLAN de management uniquement"
    ],
    answer: 1 // b)
  },
  {
    id: 24,
    question: "Quelle commande attribue le VLAN 20 à une interface FastEthernet 0/1 ?",
    options: [
      "a) switchport access vlan 10",
      "b) vlan 20 interface fa0/1",
      "c) switchport mode access puis switchport access vlan 20",
      "d) interface vlan 20"
    ],
    answer: 2 // c)
  },
  {
    id: 25,
    question: "Quel protocole empêche les boucles de switching avec les VLANs ?",
    options: [
      "a) VTP",
      "b) STP (Spanning Tree Protocol)",
      "c) DTP",
      "d) 802.1Q"
    ],
    answer: 1 // b)
  },
  {
    id: 26,
    question: "Quelle commande vérifie l’appartenance d’un port à un VLAN ?",
    options: [
      "a) show interfaces switchport",
      "b) show vlan brief",
      "c) show interfaces trunk",
      "d) show vtp status"
    ],
    answer: 0 // a)
  },
  {
    id: 27,
    question: "Quelle est la plage normale des VLANs sur Cisco ?",
    options: [
      "a) 1-100",
      "b) 1-1005",
      "c) 1-4096",
      "d) 1006-4094"
    ],
    answer: 1 // b)
  },
  {
    id: 28,
    question: "Quelle commande configure un switch en mode VTP “Transparent” ?",
    options: [
      "a) vtp transparent",
      "b) vtp mode transparent",
      "c) vtp mode off",
      "d) no vtp"
    ],
    answer: 1 // b)
  },
  {
    id: 29,
    question: "Quel est le risque si deux switches ont des VLANs natifs différents sur un trunk ?",
    options: [
      "a) Problèmes de communication et perte de trames",
      "b) Boucles réseau",
      "c) Erreurs de routage",
      "d) Perte de bande passante"
    ],
    answer: 0 // a)
  },
  {
    id: 30,
    question: "Quelle commande sauvegarde la configuration des VLANs ?",
    options: [
      "a) save config",
      "b) write memory",
      "c) copy vlan startup",
      "d) backup config"
    ],
    answer: 1 // b)
  },
  {
    id: 31,
    question: "Quel VLAN ne peut pas être modifié ou supprimé ?",
    options: [
      "a) VLAN 1",
      "b) VLAN 10",
      "c) VLANs 1002-1005",
      "d) VLAN 100"
    ],
    answer: 2 // c) (Corrigé)
  },
  {
    id: 32,
    question: "Quelle commande permet de voir les détails VTP d’un switch ?",
    options: [
      "a) show vtp status",
      "b) show vtp brief",
      "c) show vlan brief",
      "d) show interfaces trunk"
    ],
    answer: 0 // a)
  },
  {
    id: 33,
    question: "Quelle est la différence entre “switchport mode trunk” et “switchport mode dynamic desirable” ?",
    options: [
      "a) Aucun, ils sont identiques",
      "b) “dynamic desirable” négocie le trunk, “trunk” le force",
      "c) “trunk” est plus sécurisé",
      "d) “dynamic desirable” est pour les routeurs"
    ],
    answer: 1 // b)
  },
  {
    id: 34,
    question: "Quel est le rôle de VTP pruning ?",
    options: [
      "a) Supprimer les VLANs inutiles",
      "b) Éviter le flooding des broadcasts sur les trunks inutiles",
      "c) Synchroniser les VLANs",
      "d) Configurer des trunks"
    ],
    answer: 1 // b)
  },
  {
    id: 35,
    question: "Quelle commande active VTP pruning ?",
    options: [
      "a) vtp prune enable",
      "b) vtp pruning",
      "c) pruning on",
      "d) enable vtp pruning"
    ],
    answer: 1 // b)
  },
  {
    id: 36,
    question: "Quelle est la plage étendue des VLANs ?",
    options: [
      "a) 1-1005",
      "b) 1006-4094",
      "c) 1-4096",
      "d) 100-1000"
    ],
    answer: 1 // b)
  },
  {
    id: 37,
    question: "Quelle commande configure un port en mode trunk sans négociation DTP ?",
    options: [
      "a) switchport mode trunk",
      "b) switchport mode trunk puis switchport nonegotiate",
      "c) switchport nonegotiate",
      "d) trunk no dtp"
    ],
    answer: 1 // b)
  },
  {
    id: 38,
    question: "Quel VLAN est utilisé par défaut pour CDP et STP ?",
    options: [
      "a) VLAN 1",
      "b) VLAN natif",
      "c) VLAN voix",
      "d) VLAN 100"
    ],
    answer: 0 // a)
  },
  {
    id: 39,
    question: "Quelle commande vérifie la configuration d’un trunk ?",
    options: [
      "a) show interfaces trunk",
      "b) show vlan brief",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 0 // a)
  },
  {
    id: 40,
    question: "Quelle est la version de VTP la plus récente supportée par Cisco ?",
    options: [
      "a) Version 1",
      "b) Version 2",
      "c) Version 3",
      "d) Version 4"
    ],
    answer: 2 // c)
  },
  {
    id: 41,
    question: "Quel est l’inconvénient d’utiliser VTP en mode “Server” partout ?",
    options: [
      "a) Trop de bande passante",
      "b) Risque de supprimer accidentellement des VLANs",
      "c) Problèmes de sécurité",
      "d) Complexité de configuration"
    ],
    answer: 1 // b)
  },
  {
    id: 42,
    question: "Quelle commande assigne un VLAN voix (VLAN 150) et un VLAN data (VLAN 20) sur un port ?",
    options: [
      "a) switchport vlan 150 voice",
      "b) switchport voice vlan 150 et switchport access vlan 20",
      "c) vlan 150 voice vlan 20",
      "d) voice vlan 150 data 20"
    ],
    answer: 1 // b)
  },
  {
    id: 43,
    question: "Quelle commande permet de voir le VLAN natif d’un trunk ?",
    options: [
      "a) show interfaces trunk",
      "b) show vlan brief",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 0 // a)
  },
  {
    id: 44,
    question: "Quelle commande configure un switch en mode VTP Client ?",
    options: [
      "a) vtp client",
      "b) vtp mode client",
      "c) vtp mode server",
      "d) vtp off"
    ],
    answer: 1 // b)
  },
  {
    id: 45,
    question: "Quel est l’avantage de VTP version 3 ?",
    options: [
      "a) Moins de bande passante",
      "b) Support des VLANs étendus et sécurité",
      "c) Simplification des trunks",
      "d) Compatibilité avec 802.1Q"
    ],
    answer: 1 // b)
  },
  {
    id: 46,
    question: "Quelle commande vérifie les statistiques DTP sur une interface ?",
    options: [
      "a) show interfaces trunk",
      "b) show dtp interface",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 47,
    question: "Quelle est la commande pour désactiver VTP ?",
    options: [
      "a) no vtp",
      "b) vtp mode transparent",
      "c) vtp off",
      "d) disable vtp"
    ],
    answer: 1 // b)
  },
  {
    id: 48,
    question: "Quel type de port est utilisé pour connecter un switch à un routeur ?",
    options: [
      "a) Port voix",
      "b) Port d’accès ou trunk",
      "c) Port natif",
      "d) Port de management"
    ],
    answer: 1 // b)
  },
  {
    id: 49,
    question: "Quelle commande configure un VLAN voix avec une priorité QoS ?",
    options: [
      "a) switchport voice vlan 150",
      "b) mls qos trust cos et switchport voice vlan 150",
      "c) voice vlan qos",
      "d) qos voice vlan 150"
    ],
    answer: 1 // b)
  },
  {
    id: 50,
    question: "Quelle commande permet de voir la base de données VTP ?",
    options: [
      "a) show vtp brief",
      "b) show vtp database",
      "c) show vlan brief",
      "d) show vtp status"
    ],
    answer: 1 // b)
  },
  {
    id: 51,
    question: "Quelle commande permet de vérifier les VLANs actifs sur un trunk ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 52,
    question: "Quel est le VLAN natif par défaut sur un trunk 802.1Q ?",
    options: [
      "a) VLAN 1",
      "b) VLAN 10",
      "c) VLAN 100",
      "d) VLAN 999"
    ],
    answer: 0 // a)
  },
  {
    id: 53,
    question: "Quelle commande permet de restreindre les VLANs autorisés sur un trunk ?",
    options: [
      "a) switchport vlan allowed",
      "b) switchport trunk allowed vlan",
      "c) trunk vlan restrict",
      "d) vlan trunk limit"
    ],
    answer: 1 // b)
  },
  {
    id: 54,
    question: "Quel est le rôle du VLAN 1002-1005 sur un switch Cisco ?",
    options: [
      "a) VLANs voix",
      "b) VLANs réservés pour anciens protocoles",
      "c) VLANs natifs",
      "d) VLANs de management"
    ],
    answer: 1 // b)
  },
  {
    id: 55,
    question: "Quelle commande permet de voir le mode DTP d’une interface ?",
    options: [
      "a) show interfaces trunk",
      "b) show dtp interface",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 56,
    question: "Quelle commande permet de configurer un VLAN voix avec une priorité CoS ?",
    options: [
      "a) mls qos trust cos",
      "b) switchport voice vlan 150",
      "c) voice cos 5",
      "d) qos cos 5"
    ],
    answer: 0 // a) (Corrigé)
  },
  {
    id: 57,
    question: "Quelle commande permet de vérifier la version VTP configurée ?",
    options: [
      "a) show vtp brief",
      "b) show vtp status",
      "c) show vlan brief",
      "d) show interfaces trunk"
    ],
    answer: 1 // b)
  },
  {
    id: 58,
    question: "Quel problème peut survenir si le VLAN natif n’est pas le même des deux côtés d’un trunk ?",
    options: [
      "a) Perte de bande passante",
      "b) Problèmes de communication et perte de trames",
      "c) Boucles réseau",
      "d) Erreurs de routage"
    ],
    answer: 1 // b)
  },
  {
    id: 59,
    question: "Quelle commande permet de configurer un VLAN de gestion (VLAN 99) avec une adresse IP ?",
    options: [
      "a) vlan 99 ip address",
      "b) interface vlan 99 puis ip address",
      "c) ip address vlan 99",
      "d) management vlan 99"
    ],
    answer: 1 // b)
  },
  {
    id: 60,
    question: "Quelle commande permet de vérifier les VLANs actifs sur un switch ?",
    options: [
      "a) show interfaces trunk",
      "b) show vlan brief",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 61,
    question: "Qu’est-ce qu’un VLAN ?",
    options: [
      "a) Un protocole réseau",
      "b) Un domaine de diffusion logique",
      "c) Un type de câble",
      "d) Un routeur virtuel"
    ],
    answer: 1 // b)
  },
  {
    id: 62,
    question: "Quel équipement est nécessaire pour communiquer entre VLANs ?",
    options: [
      "a) Switch Layer 2",
      "b) Routeur ou switch Layer 3",
      "c) Point d’accès",
      "d) Câble trunk"
    ],
    answer: 1 // b)
  },
  {
    id: 63,
    question: "Quel protocole est utilisé pour le routage Inter-VLAN ?",
    options: [
      "a) STP",
      "b) VTP",
      "c) 802.1Q",
      "d) OSPF"
    ],
    answer: 2 // c) (Corrigé)
  },
  {
    id: 64,
    question: "Quelle interface est utilisée sur un routeur pour le routage Inter-VLAN avec “Router-on-a-Stick” ?",
    options: [
      "a) Sous-interfaces",
      "b) Interfaces VLAN",
      "c) Ports d’accès",
      "d) Interfaces natifs"
    ],
    answer: 0 // a)
  },
  {
    id: 65,
    question: "Quel est le rôle d’une sous-interface sur un routeur dans une configuration Inter-VLAN ?",
    options: [
      "a) Associer un VLAN à une interface physique",
      "b) Configurer un trunk",
      "c) Activer QoS",
      "d) Synchroniser les VLANs"
    ],
    answer: 0 // a)
  },
  {
    id: 66,
    question: "Quelle commande Cisco permet de créer une sous-interface ?",
    options: [
      "a) interface vlan 10",
      "b) interface gigabitethernet 0/0.10",
      "c) subinterface 10",
      "d) vlan subinterface 10"
    ],
    answer: 1 // b)
  },
  {
    id: 67,
    question: "Quelle commande attribue un VLAN à une sous-interface ?",
    options: [
      "a) vlan 10",
      "b) encapsulation dot1q 10",
      "c) switchport vlan 10",
      "d) trunk vlan 10"
    ],
    answer: 1 // b)
  },
  {
    id: 68,
    question: "Quel type de lien est nécessaire entre un switch et un routeur pour le routage Inter-VLAN ?",
    options: [
      "a) Port d’accès",
      "b) Trunk",
      "c) Port voix",
      "d) Port natif"
    ],
    answer: 1 // b)
  },
  {
    id: 69,
    question: "Quelle commande configure un port switch en mode trunk ?",
    options: [
      "a) switchport mode trunk",
      "b) switchport mode access",
      "c) trunk enable",
      "d) switchport trunk on"
    ],
    answer: 0 // a)
  },
  {
    id: 70,
    question: "Quel protocole d’encapsulation est utilisé pour marquer les trames VLAN sur un trunk ?",
    options: [
      "a) ISL",
      "b) VTP",
      "c) Dot1Q",
      "d) STP"
    ],
    answer: 2 // c)
  },
  {
    id: 71,
    question: "Quelle commande active le routage Inter-VLAN sur un switch Layer 3 ?",
    options: [
      "a) ip routing",
      "b) vlan routing",
      "c) inter-vlan routing",
      "d) route enable"
    ],
    answer: 0 // a)
  },
  {
    id: 72,
    question: "Quelle est l’adresse IP par défaut d’une interface VLAN sur un switch Layer 3 ?",
    options: [
      "a) 192.168.1.1",
      "b) 10.0.0.1",
      "c) Aucune",
      "d) 172.16.0.1"
    ],
    answer: 2 // c)
  },
  {
    id: 73,
    question: "Comment vérifier les VLANs configurés sur un switch Cisco ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show running-config",
      "d) Toutes ces réponses"
    ],
    answer: 3 // d)
  },
  {
    id: 74,
    question: "Quelle commande affiche les sous-interfaces configurées sur un routeur ?",
    options: [
      "a) show interfaces",
      "b) show ip interface brief",
      "c) show running-config",
      "d) Toutes ces réponses"
    ],
    answer: 3 // d)
  },
  {
    id: 75,
    question: "Quel problème peut survenir si le VLAN n’est pas autorisé sur un lien trunk ?",
    options: [
      "a) Boucles réseau",
      "b) Les paquets du VLAN sont ignorés",
      "c) Perte de bande passante",
      "d) Erreurs de routage"
    ],
    answer: 1 // b)
  },
  {
    id: 76,
    question: "Quelle commande permet de vérifier le routage Inter-VLAN sur un switch Layer 3 ?",
    options: [
      "a) show ip route",
      "b) show vlan brief",
      "c) show interfaces trunk",
      "d) show vtp status"
    ],
    answer: 0 // a)
  },
  {
    id: 77,
    question: "Quelle est la différence entre un SVI et une sous-interface ?",
    options: [
      "a) SVI sur switch Layer 3, sous-interface sur routeur",
      "b) SVI pour trunks, sous-interface pour accès",
      "c) SVI pour QoS, sous-interface pour routage",
      "d) Aucune différence"
    ],
    answer: 0 // a)
  },
  {
    id: 78,
    question: "Quelle commande assigne une adresse IP à une interface VLAN (SVI) ?",
    options: [
      "a) ip address vlan 10",
      "b) vlan 10 ip address",
      "c) switchport ip address",
      "d) interface vlan 10 puis ip address"
    ],
    answer: 3 // d)
  },
  {
    id: 79,
    question: "Quel protocole peut remplacer le routage Inter-VLAN traditionnel ?",
    options: [
      "a) VTP",
      "b) STP",
      "c) Multi-Layer Switching",
      "d) DTP"
    ],
    answer: 2 // c)
  },
  {
    id: 80,
    question: "Quelle commande permet de dépanner un problème de routage Inter-VLAN ?",
    options: [
      "a) show ip route",
      "b) show interfaces trunk",
      "c) show vlan brief",
      "d) Toutes ces réponses"
    ],
    answer: 3 // d)
  },
  {
    id: 81,
    question: "Quel est le rôle de la commande no shutdown sur une interface VLAN ?",
    options: [
      "a) Activer le routage",
      "b) Activer l’interface SVI",
      "c) Configurer un trunk",
      "d) Supprimer un VLAN"
    ],
    answer: 1 // b)
  },
  {
    id: 82,
    question: "Quelle est la norme IEEE pour le tagging VLAN ?",
    options: [
      "a) 802.1D",
      "b) 802.1Q",
      "c) 802.3",
      "d) 802.11"
    ],
    answer: 1 // b)
  },
  {
    id: 83,
    question: "Quel équipement ne peut pas router entre VLANs ?",
    options: [
      "a) Switch Layer 2",
      "b) Routeur",
      "c) Switch Layer 3",
      "d) Firewall"
    ],
    answer: 0 // a)
  },
  {
    id: 84,
    question: "Quelle commande permet de voir les VLANs sur un trunk ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 85,
    question: "Quelle est la première étape pour configurer le routage Inter-VLAN ?",
    options: [
      "a) Créer des VLANs",
      "b) Configurer un trunk",
      "c) Assigner des adresses IP",
      "d) Toutes ces réponses"
    ],
    answer: 3 // d)
  },
  {
    id: 86,
    question: "Quel est l’objectif principal de la QoS (Quality of Service) ?",
    options: [
      "a) Augmenter la bande passante",
      "b) Prioriser certains types de trafic",
      "c) Réduire la latence globale",
      "d) Simplifier la configuration"
    ],
    answer: 1 // b)
  },
  {
    id: 87,
    question: "Quel champ de l’en-tête Ethernet ou IP est utilisé pour la QoS ?",
    options: [
      "a) VLAN ID",
      "b) DSCP / CoS",
      "c) TTL",
      "d) MAC Address"
    ],
    answer: 1 // b)
  },
  {
    id: 88,
    question: "Quelle couche du modèle OSI gère principalement la QoS ?",
    options: [
      "a) Couche 2",
      "b) Couche 4",
      "c) Couche 3",
      "d) Couche 7"
    ],
    answer: 2 // c)
  },
  {
    id: 89,
    question: "Quelle est la différence entre CoS et DSCP ?",
    options: [
      "a) CoS (Layer 2), DSCP (Layer 3)",
      "b) CoS (Layer 3), DSCP (Layer 2)",
      "c) CoS est plus précis",
      "d) Aucune différence"
    ],
    answer: 0 // a)
  },
  {
    id: 90,
    question: "À quoi sert la commande mls qos trust sur un switch Cisco ?",
    options: [
      "a) Activer QoS globalement",
      "b) Faire confiance aux marquages QoS",
      "c) Configurer un VLAN voix",
      "d) Supprimer les marquages"
    ],
    answer: 1 // b)
  },
  {
    id: 91,
    question: "Sur quel type de port doit-on configurer mls qos trust ?",
    options: [
      "a) Port d’accès",
      "b) Trunk",
      "c) Port connecté à un téléphone IP",
      "d) b et c"
    ],
    answer: 3 // d)
  },
  {
    id: 92,
    question: "Que se passe-t-il si mls qos trust n’est pas activé sur un port ?",
    options: [
      "a) Les marquages CoS/DSCP sont ignorés",
      "b) Le trafic est bloqué",
      "c) Le port passe en mode best-effort",
      "d) a et c"
    ],
    answer: 3 // d)
  },
  {
    id: 93,
    question: "Quelle commande permet de configurer la confiance QoS sur un port pour le CoS (Layer 2) ?",
    options: [
      "a) mls qos trust cos",
      "b) mls qos trust dscp",
      "c) switchport qos cos",
      "d) qos trust cos"
    ],
    answer: 0 // a)
  },
  {
    id: 94,
    question: "Quelle commande permet de faire confiance au marquage DSCP (Layer 3) ?",
    options: [
      "a) mls qos trust dscp",
      "b) mls qos trust cos",
      "c) switchport qos dscp",
      "d) qos trust dscp"
    ],
    answer: 0 // a)
  },
  {
    id: 95,
    question: "Que fait la commande mls qos trust device cisco-phone ?",
    options: [
      "a) Active QoS globalement",
      "b) Fait confiance au CoS si téléphone Cisco détecté",
      "c) Configure un VLAN voix",
      "d) Désactive DTP"
    ],
    answer: 1 // b)
  },
  {
    id: 96,
    question: "Quelle commande active globalement la QoS sur un switch Cisco ?",
    options: [
      "a) qos enable",
      "b) mls qos",
      "c) qos global",
      "d) enable qos"
    ],
    answer: 1 // b)
  },
  {
    id: 97,
    question: "Quelle commande affiche la configuration QoS d’un port ?",
    options: [
      "a) show mls qos interface",
      "b) show qos status",
      "c) show interfaces qos",
      "d) show vlan qos"
    ],
    answer: 0 // a)
  },
  {
    id: 98,
    question: "Quelle commande permet de définir un CoS par défaut si le trafic n’est pas marqué ?",
    options: [
      "a) mls qos cos 3",
      "b) mls qos default cos 3",
      "c) switchport cos 3",
      "d) qos cos default 3"
    ],
    answer: 1 // b)
  },
  {
    id: 99,
    question: "Que fait la commande switchport priority extend cos 0 ?",
    options: [
      "a) Force CoS 0 pour le PC derrière un téléphone IP",
      "b) Active QoS globalement",
      "c) Configure un VLAN voix",
      "d) Désactive les marquages CoS"
    ],
    answer: 0 // a)
  },
  {
    id: 100,
    question: "Quelle commande permet de vérifier si la QoS est activée globalement ?",
    options: [
      "a) show mls qos",
      "b) show qos status",
      "c) show running-config",
      "d) a et c"
    ],
    answer: 3 // d)
  },
  {
    id: 101,
    question: "Un téléphone IP Cisco envoie du trafic VoIP avec CoS 5, mais le switch le traite comme best-effort (CoS 0). Quelle est la cause probable ?",
    options: [
      "a) mls qos trust cos non configuré",
      "b) QoS désactivé globalement",
      "c) VLAN voix mal configuré",
      "d) Toutes ces réponses"
    ],
    answer: 3 // d)
  },
  {
    id: 102,
    question: "Quel problème peut survenir si mls qos trust cos est configuré sur un port connecté à un PC ?",
    options: [
      "a) Le PC peut abuser des priorités QoS",
      "b) Le port est bloqué",
      "c) Perte de bande passante",
      "d) Erreurs de routage"
    ],
    answer: 0 // a)
  },
  {
    id: 103,
    question: "Quelle commande permet de désactiver la confiance QoS sur un port ?",
    options: [
      "a) no mls qos trust",
      "b) mls qos disable",
      "c) no qos trust",
      "d) qos off"
    ],
    answer: 0 // a)
  },
  {
    id: 104,
    question: "Pourquoi utiliser mls qos trust device cisco-phone au lieu de mls qos trust cos ?",
    options: [
      "a) Plus sécurisé",
      "b) Détecte les téléphones Cisco via CDP",
      "c) Active QoS globalement",
      "d) a et b"
    ],
    answer: 3 // d)
  },
  {
    id: 105,
    question: "Quelle commande permet de mapper un CoS à une file d’attente ?",
    options: [
      "a) mls qos map cos 5 to queue 4",
      "b) qos cos queue 5",
      "c) switchport cos queue",
      "d) map cos 5 queue 4"
    ],
    answer: 0 // a)
  },
  {
    id: 106,
    question: "Quelle commande permet de passer du mode utilisateur au mode privilégié sur un switch ?",
    options: [
      "a) configure terminal",
      "b) enable",
      "c) login",
      "d) exec"
    ],
    answer: 1 // b)
  },
  {
    id: 107,
    question: "Quelle commande permet d’entrer en mode de configuration globale ?",
    options: [
      "a) configure terminal",
      "b) enable",
      "c) config",
      "d) global config"
    ],
    answer: 0 // a)
  },
  {
    id: 108,
    question: "Quelle commande est utilisée pour changer le nom du switch en “S1” ?",
    options: [
      "a) name S1",
      "b) hostname S1",
      "c) switchname S1",
      "d) set name S1"
    ],
    answer: 1 // b)
  },
  {
    id: 109,
    question: "Quelle commande permet de définir un mot de passe pour le mode privilégié ?",
    options: [
      "a) password Cisco",
      "b) enable password Cisco",
      "c) set password Cisco",
      "d) privilege password Cisco"
    ],
    answer: 1 // b)
  },
  {
    id: 110,
    question: "Quelle commande permet d’afficher un message d’avertissement avant la connexion ?",
    options: [
      "a) message “ACCES INTERDIT”",
      "b) login banner “ACCES INTERDIT”",
      "c) banner motd “ACCES INTERDIT”",
      "d) warning “ACCES INTERDIT”"
    ],
    answer: 2 // c)
  },
  {
    id: 111,
    question: "Pourquoi utilise-t-on la commande no ip domain-lookup ?",
    options: [
      "a) Empêcher la résolution DNS",
      "b) Désactiver l’interface",
      "c) Supprimer le routage",
      "d) Activer Telnet"
    ],
    answer: 0 // a)
  },
  {
    id: 112,
    question: "Quelle commande permet de configurer un mot de passe pour l’accès en mode console ?",
    options: [
      "a) line console 0 puis password Cisco",
      "b) console password Cisco",
      "c) set console password",
      "d) password console Cisco"
    ],
    answer: 0 // a)
  },
  {
    id: 113,
    question: "Quelle commande permet de configurer l’adresse IP du switch sur l’interface VLAN 1 ?",
    options: [
      "a) ip address vlan 1",
      "b) interface vlan 1 puis ip address",
      "c) vlan 1 ip address",
      "d) set ip vlan 1"
    ],
    answer: 1 // b)
  },
  {
    id: 114,
    question: "Quelle commande est utilisée pour activer une interface VLAN ?",
    options: [
      "a) enable vlan",
      "b) up",
      "c) no shutdown",
      "d) activate"
    ],
    answer: 2 // c)
  },
  {
    id: 115,
    question: "Quelle commande permet de configurer les lignes VTY pour Telnet ?",
    options: [
      "a) line vty 0 15 puis password class puis login",
      "b) telnet password class",
      "c) vty password class",
      "d) set vty password"
    ],
    answer: 0 // a)
  },
  {
    id: 116,
    question: "Pourquoi utilise-t-on la commande service password-encryption ?",
    options: [
      "a) Crypter les mots de passe",
      "b) Activer Telnet",
      "c) Désactiver SSH",
      "d) Configurer QoS"
    ],
    answer: 0 // a)
  },
  {
    id: 117,
    question: "Quelle commande permet de régler l’heure et la date du switch ?",
    options: [
      "a) clock set 11:24:23 27 March 2025",
      "b) set time 11:24:23",
      "c) time 11:24:23",
      "d) date 27 March 2025"
    ],
    answer: 0 // a)
  },
  {
    id: 118,
    question: "Ce mode permet d’accéder à toutes les commandes et fonctionnalités.",
    options: [
      "a) Mode utilisateur",
      "b) Mode configuration",
      "c) Mode privilégié",
      "d) Mode global"
    ],
    answer: 2 // c)
  },
  {
    id: 119,
    question: "Dans quel mode IOS êtes-vous si l’invite Switch(config)# s’affiche ?",
    options: [
      "a) Mode configuration globale",
      "b) Mode privilégié",
      "c) Mode utilisateur",
      "d) Mode interface"
    ],
    answer: 0 // a)
  },
  {
    id: 120,
    question: "Dans quel mode IOS êtes-vous si l’invite Switch> s’affiche ?",
    options: [
      "a) Mode configuration",
      "b) Mode privilégié",
      "c) Mode global",
      "d) Mode utilisateur"
    ],
    answer: 3 // d)
  },
  {
    id: 121,
    question: "Quelles sont les deux commandes qui vous ramèneraient à l’invite d’exécution privilégiée quel que soit le mode ?",
    options: [
      "a) exit et quit",
      "b) Ctrl+Z et end",
      "c) disable et exit",
      "d) logout et end"
    ],
    answer: 1 // b)
  },
  {
    id: 122,
    question: "Que fait la commande suivante ? login block-for 120 attempt 3 within 180",
    options: [
      "a) Bloque l’accès après 3 échecs en 120s",
      "b) Bloque l’accès après 3 échecs en 180s",
      "c) Active Telnet",
      "d) Désactive SSH"
    ],
    answer: 0 // a)
  },
  {
    id: 123,
    question: "Dans login block-for 120 attempt 3 within 180, que signifie le nombre 120 ?",
    options: [
      "a) Nombre de tentatives",
      "b) Durée du blocage",
      "c) Intervalle des tentatives",
      "d) Temps de connexion"
    ],
    answer: 1 // b)
  },
  {
    id: 124,
    question: "À quoi sert la commande security passwords min-length 9 ?",
    options: [
      "a) Activer SSH",
      "b) Forcer mot de passe ≥ 9 caractères",
      "c) Désactiver Telnet",
      "d) Configurer QoS"
    ],
    answer: 1 // b)
  },
  {
    id: 125,
    question: "Quelle est la conséquence d’une mauvaise configuration de login block-for sur un routeur Cisco ?",
    options: [
      "a) Blocage des utilisateurs légitimes",
      "b) Perte de bande passante",
      "c) Boucles réseau",
      "d) Erreurs de routage"
    ],
    answer: 0 // a)
  },
  {
    id: 126,
    question: "Pourquoi imposer un mot de passe de minimum 9 caractères ?",
    options: [
      "a) Simplifier la configuration",
      "b) Résistance aux attaques par force brute",
      "c) Activer SSH",
      "d) Désactiver Telnet"
    ],
    answer: 1 // b)
  },
  {
    id: 127,
    question: "Que contrôle le paramètre attempt 3 dans la commande login block-for ?",
    options: [
      "a) Durée du blocage",
      "b) Nombre de tentatives",
      "c) Intervalle des tentatives",
      "d) Temps de connexion"
    ],
    answer: 1 // b)
  },
  {
    id: 128,
    question: "Que contrôle le paramètre within 180 dans la commande login block-for ?",
    options: [
      "a) Durée du blocage",
      "b) Intervalle des tentatives",
      "c) Nombre de tentatives",
      "d) Temps de connexion"
    ],
    answer: 1 // b)
  },
  {
    id: 129,
    question: "Que se passe-t-il si un utilisateur échoue 3 fois en 190 secondes (et non 180) ?",
    options: [
      "a) Rien, délai dépassé",
      "b) Blocage pendant 120s",
      "c) Connexion autorisée",
      "d) Erreur système"
    ],
    answer: 0 // a)
  },
  {
    id: 130,
    question: "Quel est l’effet de login block-for sur les attaques par force brute ?",
    options: [
      "a) Les ralentit",
      "b) Les accélère",
      "c) Les ignore",
      "d) Les bloque complètement"
    ],
    answer: 0 // a)
  },
  {
    id: 131,
    question: "Pourquoi est-il important de spécifier min-length pour les mots de passe ?",
    options: [
      "a) Simplifier la configuration",
      "b) Éviter les mots de passe faibles",
      "c) Activer SSH",
      "d) Désactiver Telnet"
    ],
    answer: 1 // b)
  },
  {
    id: 132,
    question: "Quel type d’attaque est directement limité par login block-for ?",
    options: [
      "a) Spoofing",
      "b) Brute-force",
      "c) DDoS",
      "d) Man-in-the-middle"
    ],
    answer: 1 // b)
  },
  {
    id: 133,
    question: "Que fait la commande security passwords min-length 9 si un mot de passe de 8 caractères est entré ?",
    options: [
      "a) Accepté",
      "b) Rejeté avec erreur",
      "c) Converti à 9",
      "d) Ignoré"
    ],
    answer: 1 // b)
  },
  {
    id: 134,
    question: "Où s’applique principalement login block-for ?",
    options: [
      "a) Console, Telnet, SSH",
      "b) Interfaces VLAN",
      "c) Ports trunk",
      "d) VLAN voix"
    ],
    answer: 0 // a)
  },
  {
    id: 135,
    question: "Après l’expiration de block-for, que se passe-t-il ?",
    options: [
      "a) Tentatives réinitialisées",
      "b) Connexion bloquée",
      "c) Erreur système",
      "d) Redémarrage"
    ],
    answer: 0 // a)
  },
  {
    id: 136,
    question: "Le paramètre min-length améliore la résistance contre quel type d’attaque ?",
    options: [
      "a) Spoofing",
      "b) Deviner un mot de passe",
      "c) DDoS",
      "d) Man-in-the-middle"
    ],
    answer: 1 // b)
  },
  {
    id: 137,
    question: "Si vous configurez security passwords min-length 9, quelle serait une mauvaise pratique ?",
    options: [
      "a) Utiliser un mot de passe de 10 caractères",
      "b) Utiliser un mot de passe de 4 caractères",
      "c) Activer SSH",
      "d) Désactiver Telnet"
    ],
    answer: 1 // b)
  },
  {
    id: 138,
    question: "Quel est l’avantage de bloquer la connexion après des tentatives échouées ?",
    options: [
      "a) Plus de bande passante",
      "b) Moins de risques d’accès non autorisé",
      "c) Simplifie la configuration",
      "d) Active QoS"
    ],
    answer: 1 // b)
  },
  {
    id: 139,
    question: "Combien de secondes durera le blocage avec login block-for 120 attempt 3 within 180 ?",
    options: [
      "a) 180 secondes",
      "b) 3 secondes",
      "c) 120 secondes",
      "d) 60 secondes"
    ],
    answer: 2 // c)
  },
  {
    id: 140,
    question: "security passwords min-length concerne :",
    options: [
      "a) Durée du mot de passe",
      "b) Longueur minimale du mot de passe",
      "c) Type de caractères",
      "d) Cryptage"
    ],
    answer: 1 // b)
  },
  {
    id: 141,
    question: "Un administrateur veut renforcer la sécurité après plusieurs tentatives de mot de passe incorrect. Quelle commande utiliser ?",
    options: [
      "a) enable password",
      "b) login block-for",
      "c) no ip domain-lookup",
      "d) service password-encryption"
    ],
    answer: 1 // b)
  },
  {
    id: 142,
    question: "Qu’est-ce que l’Inter-VLAN Routing ?",
    options: [
      "a) Configuration de trunks",
      "b) Communication entre VLANs",
      "c) Synchronisation de VLANs",
      "d) QoS pour VLANs"
    ],
    answer: 1 // b)
  },
  {
    id: 143,
    question: "Quelle est la fonction principale du routage Inter-VLAN ?",
    options: [
      "a) Segmenter les VLANs",
      "b) Permettre la communication entre VLANs",
      "c) Configurer des trunks",
      "d) Activer QoS"
    ],
    answer: 1 // b)
  },
  {
    id: 144,
    question: "Quel est le principal problème si un réseau utilise plusieurs VLANs sans routage ?",
    options: [
      "a) Boucles réseau",
      "b) VLANs ne communiquent pas",
      "c) Perte de bande passante",
      "d) Erreurs de configuration"
    ],
    answer: 1 // b)
  },
  {
    id: 145,
    question: "Quelle couche du modèle OSI est impliquée dans l’Inter-VLAN Routing ?",
    options: [
      "a) Couche 2",
      "b) Couche 3",
      "c) Couche 4",
      "d) Couche 7"
    ],
    answer: 1 // b)
  },
  {
    id: 146,
    question: "Quel est le protocole utilisé pour transporter plusieurs VLANs sur un lien trunk ?",
    options: [
      "a) VTP",
      "b) 802.1Q",
      "c) STP",
      "d) DTP"
    ],
    answer: 1 // b)
  },
  {
    id: 147,
    question: "Quelle méthode permet à un routeur de gérer le routage Inter-VLAN ?",
    options: [
      "a) Switch Layer 2",
      "b) Router-on-a-Stick",
      "c) VLAN natif",
      "d) QoS"
    ],
    answer: 1 // b)
  },
  {
    id: 148,
    question: "Dans Router-on-a-Stick, chaque VLAN est associé à une :",
    options: [
      "a) Interface physique",
      "b) Interface VLAN",
      "c) Sous-interface",
      "d) Port d’accès"
    ],
    answer: 2 // c)
  },
  {
    id: 149,
    question: "Quelle commande est utilisée pour associer une sous-interface au VLAN 10 ?",
    options: [
      "a) encapsulation dot1q 10",
      "b) vlan 10",
      "c) switchport vlan 10",
      "d) trunk vlan 10"
    ],
    answer: 0 // a)
  },
  {
    id: 150,
    question: "Quel type de port est requis sur le switch connecté au routeur ?",
    options: [
      "a) Port d’accès",
      "b) Trunk",
      "c) Port voix",
      "d) Port natif"
    ],
    answer: 1 // b)
  },
  {
    id: 151,
    question: "Quel est le rôle de la “VLAN native” dans Router-on-a-Stick ?",
    options: [
      "a) VLAN voix",
      "b) VLAN sans balise 802.1Q",
      "c) VLAN de management",
      "d) VLAN par défaut"
    ],
    answer: 1 // b)
  },
  {
    id: 152,
    question: "Que se passe-t-il si l’encapsulation 802.1Q n’est pas configurée sur la sous-interface ?",
    options: [
      "a) Le routage fonctionne",
      "b) Les paquets sont bloqués",
      "c) Le routage Inter-VLAN échoue",
      "d) Les VLANs sont supprimés"
    ],
    answer: 2 // c)
  },
  {
    id: 153,
    question: "Quel masque IP est correct pour une sous-interface en /24 ?",
    options: [
      "a) 255.255.0.0",
      "b) 255.0.0.0",
      "c) 255.255.255.0",
      "d) 255.255.255.255"
    ],
    answer: 2 // c)
  },
  {
    id: 154,
    question: "Combien de sous-interfaces faut-il pour 4 VLANs ?",
    options: [
      "a) 1",
      "b) 2",
      "c) 4",
      "d) 8"
    ],
    answer: 2 // c)
  },
  {
    id: 155,
    question: "Quelle interface est correcte pour la sous-interface du VLAN 30 ?",
    options: [
      "a) Gig0/1.30",
      "b) Gig0/1.10",
      "c) VLAN 30",
      "d) Subinterface 30"
    ],
    answer: 0 // a)
  },
  {
    id: 156,
    question: "Quelle commande permet d’activer une interface de routeur ?",
    options: [
      "a) enable",
      "b) up",
      "c) no shutdown",
      "d) activate"
    ],
    answer: 2 // c)
  },
  {
    id: 157,
    question: "Quelle ligne de configuration est obligatoire sur chaque sous-interface ?",
    options: [
      "a) ip address",
      "b) vlan id",
      "c) switchport",
      "d) trunk"
    ],
    answer: 0 // a)
  },
  {
    id: 158,
    question: "Quelle commande active le routage sur un switch L3 ?",
    options: [
      "a) ip routing",
      "b) vlan routing",
      "c) inter-vlan routing",
      "d) route enable"
    ],
    answer: 0 // a)
  },
  {
    id: 159,
    question: "Quelle interface logique est utilisée pour représenter un VLAN ?",
    options: [
      "a) Sous-interface",
      "b) Interface VLAN",
      "c) Port trunk",
      "d) Port d’accès"
    ],
    answer: 1 // b)
  },
  {
    id: 160,
    question: "Quelle est la fonction d’une interface VLAN ?",
    options: [
      "a) Configurer un trunk",
      "b) Activer QoS",
      "c) Donner une IP de passerelle",
      "d) Synchroniser les VLANs"
    ],
    answer: 2 // c)
  },
  {
    id: 161,
    question: "Sur un switch L3, que faut-il désactiver pour transformer un port en interface Layer 3 ?",
    options: [
      "a) ip routing",
      "b) switchport",
      "c) vlan",
      "d) trunk"
    ],
    answer: 1 // b)
  },
  {
    id: 162,
    question: "Que permet un port en mode router ?",
    options: [
      "a) Configurer QoS",
      "b) Routage entre VLANs",
      "c) Synchroniser VLANs",
      "d) Activer trunks"
    ],
    answer: 1 // b)
  },
  {
    id: 163,
    question: "Quelle condition est nécessaire pour que les hôtes d’un VLAN accèdent à d’autres VLANs ?",
    options: [
      "a) Trunk configuré",
      "b) Passerelle par défaut correcte",
      "c) VLAN natif",
      "d) QoS activé"
    ],
    answer: 1 // b)
  },
  {
    id: 164,
    question: "Sur un switch L3, quel type de port permet l’interconnexion L3 entre switches ?",
    options: [
      "a) Trunk",
      "b) Access",
      "c) Routed",
      "d) Voix"
    ],
    answer: 2 // c)
  },
  {
    id: 165,
    question: "Que signifie la commande no switchport sur un port ?",
    options: [
      "a) Désactive le port",
      "b) Transforme en interface L3",
      "c) Configure un trunk",
      "d) Supprime un VLAN"
    ],
    answer: 1 // b)
  },
  {
    id: 166,
    question: "Que faut-il configurer en plus de l’adresse IP sur une interface routed ?",
    options: [
      "a) VLAN ID",
      "b) Trunk",
      "c) no shutdown",
      "d) QoS"
    ],
    answer: 2 // c)
  },
  {
    id: 167,
    question: "Un PC dans le VLAN 10 ne pingue pas le VLAN 20. Quelle cause est probable ?",
    options: [
      "a) Routage Inter-VLAN absent",
      "b) Passerelle incorrecte",
      "c) Trunk mal configuré",
      "d) Tout ci-dessus"
    ],
    answer: 3 // d)
  },
  {
    id: 168,
    question: "Un ping entre deux VLANs échoue, mais chaque VLAN a accès à Internet. Quelle est la cause ?",
    options: [
      "a) Routage Inter-VLAN absent",
      "b) NAT incorrect",
      "c) Firewall",
      "d) VLAN natif"
    ],
    answer: 0 // a)
  },
  {
    id: 169,
    question: "L’absence de encapsulation dot1q entraîne :",
    options: [
      "a) Échec du routage",
      "b) Perte de bande passante",
      "c) Boucles réseau",
      "d) Erreurs de configuration"
    ],
    answer: 0 // a)
  },
  {
    id: 170,
    question: "Un port trunk doit avoir :",
    options: [
      "a) switchport mode access",
      "b) switchport trunk encapsulation dot1q",
      "c) no switchport",
      "d) vlan natif"
    ],
    answer: 1 // b)
  },
  {
    id: 171,
    question: "Un routeur Cisco ne reconnaît pas encapsulation dot1q. Que faire ?",
    options: [
      "a) Mettre à jour IOS",
      "b) Changer le port",
      "c) Désactiver trunk",
      "d) Configurer VLAN natif"
    ],
    answer: 0 // a)
  },
  {
    id: 172,
    question: "Quelle commande affiche les sous-interfaces d’un routeur ?",
    options: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show vtp status",
      "d) show interfaces"
    ],
    answer: 3 // d)
  },
  {
    id: 173,
    question: "Quel outil pingue une passerelle VLAN depuis un switch ?",
    options: [
      "a) ping",
      "b) traceroute",
      "c) telnet",
      "d) ssh"
    ],
    answer: 0 // a)
  },
  {
    id: 174,
    question: "Quel protocole facilite la configuration automatique des VLANs ?",
    options: [
      "a) VTP",
      "b) STP",
      "c) DTP",
      "d) 802.1Q"
    ],
    answer: 0 // a)
  },
  {
    id: 175,
    question: "Quelle commande affiche les VLANs créés ?",
    options: [
      "a) show interfaces trunk",
      "b) show vlan brief",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 1 // b)
  },
  {
    id: 176,
    question: "Quelle commande affiche les VLANs actifs sur un trunk ?",
    options: [
      "a) show interfaces trunk",
      "b) show vlan brief",
      "c) show vtp status",
      "d) show interfaces switchport"
    ],
    answer: 0 // a)
  },
  {
    id: 177,
    question: "Que se passe-t-il si deux VLANs ont des adresses IP sur le même sous-réseau ?",
    options: [
      "a) Routage échoue",
      "b) Conflit d’adressage",
      "c) Boucles réseau",
      "d) Perte de bande passante"
    ],
    answer: 1 // b)
  },
  {
    id: 178,
    question: "Une ACL est appliquée sur une interface VLAN. Résultat ?",
    options: [
      "a) Routage échoue",
      "b) Bloque la communication entre VLANs",
      "c) Active QoS",
      "d) Synchronise les VLANs"
    ],
    answer: 1 // b)
  },
  {
    id: 179,
    question: "Quel est l’effet d’une IP mal configurée sur une interface VLAN ?",
    options: [
      "a) VLAN inaccessible",
      "b) Routage échoue",
      "c) Boucles réseau",
      "d) Perte de bande passante"
    ],
    answer: 0 // a)
  },
  {
    id: 180,
    question: "Dans une topologie avec plusieurs switches et un routeur, que faut-il pour assurer la communication Inter-VLAN ?",
    options: [
      "a) Trunks configurés",
      "b) Routage activé",
      "c) VLANs configurés",
      "d) Tous les éléments ci-dessus"
    ],
    answer: 3 // d)
  },
  {
    id: 181,
    question: "Pourquoi préférer un switch de niveau 3 à un routeur pour l’Inter-VLAN Routing ?",
    options: [
      "a) Plus simple à configurer",
      "b) Plus rapide (routage matériel)",
      "c) Moins cher",
      "d) Plus sécurisé"
    ],
    answer: 1 // b)
  }
]
    }
  ],
configs: [
{
  courseId: 1,
  configurations: [
    {
      id: 1,
      name: "Configuration de base d'un PC avec adressage IP",
      intro: {
        text: "<p>Configurer un PC avec une adresse IP statique et vérifier les paramètres réseau.</p>",
        svg: ""
      },
      summary: `
        <p><strong>Résumé :</strong></p>
        <p>Vous avez configuré une adresse IP statique sur un PC et vérifié les paramètres réseau.</p>
        <ul>
          <li>Adresse IP : 192.168.1.10/24</li>
          <li>Passerelle par défaut : 192.168.1.1</li>
          <li>Serveur DNS : 8.8.8.8</li>
        </ul>
      `,
      tasks: [
        {
          id: 1,
          description: "Configurer une adresse IP statique sur un PC dans le réseau 192.168.1.0/24.",
          label: "PC> ",
          command: "ipconfig 192.168.1.10 255.255.255.0",
          hint: "Utilisez ipconfig avec l'adresse IP et le masque de sous-réseau."
        },
        {
          id: 2,
          description: "Configurer la passerelle par défaut sur le PC.",
          label: "PC> ",
          command: "ipconfig /gateway 192.168.1.1",
          hint: "La passerelle est l'adresse du routeur."
        },
        {
          id: 3,
          description: "Configurer un serveur DNS sur le PC.",
          label: "PC> ",
          command: "ipconfig /dns 8.8.8.8",
          hint: "Utilisez un serveur DNS public comme 8.8.8.8 (Google DNS)."
        },
        {
          id: 4,
          description: "Vérifier la configuration réseau du PC.",
          label: "PC> ",
          command: "ipconfig /all",
          hint: "Utilisez ipconfig /all pour voir tous les détails de la configuration."
        }
      ]
    },
    {
      id: 2,
      name: "Test de connectivité réseau et dépannage",
      intro: {
        text: "<p>Vérifier la connectivité réseau entre deux appareils et dépanner les problèmes.</p>",
        svg: ""
      },
      summary: `
        <p><strong>Résumé :</strong></p>
        <p>Vous avez testé la connectivité réseau et dépanné une connexion.</p>
        <ul>
          <li>Ping depuis PC1 vers PC2 (192.168.1.20).</li>
          <li>4 paquets envoyés, 4 reçus.</li>
          <li>Vérification de la table ARP.</li>
        </ul>
      `,
      tasks: [
        {
          id: 1,
          description: "Effectuer un ping vers un autre PC (192.168.1.20) pour vérifier la connectivité.",
          label: "PC1> ",
          command: "ping 192.168.1.20",
          hint: "Utilisez la commande ping suivi de l'adresse IP cible.",
          pingSimulation: {
            packetsSent: 4,
            packetsReceived: 4,
            packetsLost: 0,
            roundTripTime: { min: 1, avg: 2, max: 4 },
            pingSource: "PC1",
            pingTarget: "PC2",
            pingSvg: `
              <svg width="100%" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                <text x="40" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                <rect x="240" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                <text x="260" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC2</text>
                <line x1="60" y1="50" x2="240" y2="50" stroke="#3b82f6" stroke-width="4" stroke-dasharray="10,10" class="ping-line dark:stroke-blue-400"/>
              </svg>
            `
          }
        },
        {
          id: 2,
          description: "Vérifier la table ARP pour confirmer la résolution d'adresse.",
          label: "PC1> ",
          command: "arp -a",
          hint: "Utilisez arp -a pour voir les correspondances IP-MAC."
        },
        {
          id: 3,
          description: "Effectuer un test de résolution DNS en pinguant un nom de domaine (google.com).",
          label: "PC1> ",
          command: "ping google.com",
          hint: "Utilisez ping avec un nom de domaine pour tester le DNS.",
          pingSimulation: {
            packetsSent: 4,
            packetsReceived: 4,
            packetsLost: 0,
            roundTripTime: { min: 15, avg: 20, max: 25 },
            pingSource: "PC1",
            pingTarget: "google.com",
            pingSvg: `
              <svg width="100%" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                <text x="40" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">PC1</text>
                <rect x="240" y="30" width="40" height="40" fill="#4b5563" stroke="#1f2937" stroke-width="2" class="dark:fill-gray-300 dark:stroke-gray-600"/>
                <text x="260" y="20" text-anchor="middle" fill="#1f2937" class="dark:fill-gray-300 text-sm">Google</text>
                <line x1="60" y1="50" x2="240" y2="50" stroke="#3b82f6" stroke-width="4" stroke-dasharray="10,10" class="ping-line dark:stroke-blue-400"/>
              </svg>
            `
          }
        }
      ]
    },
    {
      id: 3,
      name: "Configuration de base d'un switch Cisco",
      intro: {
        text: "<p>Configurer un switch Cisco avec des paramètres de base.</p>",
        svg: ""
      },
      summary: `
        <p><strong>Résumé :</strong></p>
        <p>Vous avez configuré un switch Cisco avec des paramètres de base.</p>
        <ul>
          <li>Nom du switch : S1</li>
          <li>Mot de passe privilégié : cisco</li>
          <li>Interface VLAN 1 : 192.168.1.2/24</li>
          <li>Passerelle par défaut : 192.168.1.1</li>
        </ul>
      `,
      tasks: [
        {
          id: 1,
          description: "Entrer en mode privilégié sur le switch.",
          label: "Switch> ",
          command: "enable",
          hint: "Utilisez enable pour accéder au mode privilégié."
        },
        {
          id: 2,
          description: "Entrer en mode de configuration globale.",
          label: "Switch# ",
          command: "configure terminal",
          hint: "Utilisez configure terminal pour accéder au mode de configuration."
        },
        {
          id: 3,
          description: "Configurer le nom du switch en S1.",
          label: "Switch(config)# ",
          command: "hostname S1",
          hint: "Utilisez hostname pour définir le nom du switch."
        },
        {
          id: 4,
          description: "Configurer un mot de passe pour le mode privilégié.",
          label: "S1(config)# ",
          command: "enable password cisco",
          hint: "Utilisez enable password pour définir un mot de passe."
        },
        {
          id: 5,
          description: "Configurer l'adresse IP sur l'interface VLAN 1.",
          label: "S1(config)# ",
          command: "interface vlan 1",
          hint: "Entrez en mode de configuration de l'interface VLAN 1."
        },
        {
          id: 6,
          description: "Assigner l'adresse IP 192.168.1.2/24 à l'interface VLAN 1.",
          label: "S1(config-if)# ",
          command: "ip address 192.168.1.2 255.255.255.0",
          hint: "Utilisez ip address avec l'IP et le masque."
        },
        {
          id: 7,
          description: "Activer l'interface VLAN 1.",
          label: "S1(config-if)# ",
          command: "no shutdown",
          hint: "Utilisez no shutdown pour activer l'interface."
        },
        {
          id: 8,
          description: "Configurer la passerelle par défaut du switch.",
          label: "S1(config)# ",
          command: "ip default-gateway 192.168.1.1",
          hint: "Utilisez ip default-gateway pour définir la passerelle."
        },
        {
          id: 9,
          description: "Sauvegarder la configuration.",
          label: "S1# ",
          command: "write memory",
          hint: "Utilisez write memory pour sauvegarder la configuration."
        }
      ]
    },
    {
      id: 4,
      name: "Vérification de câblage réseau",
      intro: {
        text: "<p>Vérifier les connexions physiques entre les appareils.</p>",
        svg: ""
      },
      summary: `
        <p><strong>Résumé :</strong></p>
        <p>Vous avez vérifié le câblage réseau entre un PC et un switch.</p>
        <ul>
          <li>Câble : UTP Cat 5e (croisé pour PC-PC, droit pour PC-Switch)</li>
          <li>Port du switch : FastEthernet0/1</li>
          <li>Connexion : Active</li>
        </ul>
      `,
      tasks: [
        {
          id: 1,
          description: "Vérifier le type de câble utilisé entre le PC et le switch.",
          label: "Technician> ",
          command: "check cable type",
          hint: "Assurez-vous d'utiliser un câble droit (straight-through) pour connecter un PC à un switch."
        },
        {
          id: 2,
          description: "Connecter le PC au port FastEthernet0/1 du switch.",
          label: "Technician> ",
          command: "connect PC to Switch FastEthernet0/1",
          hint: "Utilisez le port FastEthernet0/1 pour la connexion."
        },
        {
          id: 3,
          description: "Vérifier l'état du port sur le switch.",
          label: "S1# ",
          command: "show interfaces FastEthernet0/1 status",
          hint: "Utilisez show interfaces status pour vérifier l'état du port."
        }
      ]
    },
    {
      id: 5,
      name: "Introduction à la sécurité de base sur le switch",
      intro: {
        text: "<p>Configurer des paramètres de sécurité de base sur un switch Cisco.</p>",
        svg: ""
      },
      summary: `
        <p><strong>Résumé :</strong></p>
        <p>Vous avez configuré des paramètres de sécurité de base sur le switch.</p>
        <ul>
          <li>Mot de passe console : class</li>
          <li>Mot de passe VTY : class</li>
          <li>Cryptage des mots de passe activé</li>
          <li>Bannière MOTD configurée</li>
        </ul>
      `,
      tasks: [
        {
          id: 1,
          description: "Entrer en mode de configuration globale sur le switch.",
          label: "S1# ",
          command: "configure terminal",
          hint: "Utilisez configure terminal pour accéder au mode de configuration."
        },
        {
          id: 2,
          description: "Configurer un mot de passe pour la console.",
          label: "S1(config)# ",
          command: "line console 0",
          hint: "Entrez en mode de configuration de la console."
        },
        {
          id: 3,
          description: "Définir le mot de passe console à 'class'.",
          label: "S1(config-line)# ",
          command: "password class",
          hint: "Utilisez password pour définir le mot de passe."
        },
        {
          id: 4,
          description: "Exiger un mot de passe à la connexion via console.",
          label: "S1(config-line)# ",
          command: "login",
          hint: "Utilisez login pour activer l'authentification par mot de passe."
        },
        {
          id: 5,
          description: "Configurer un mot de passe pour les lignes VTY (Telnet).",
          label: "S1(config)# ",
          command: "line vty 0 15",
          hint: "Entrez en mode de configuration des lignes VTY."
        },
        {
          id: 6,
          description: "Définir le mot de passe VTY à 'class'.",
          label: "S1(config-line)# ",
          command: "password class",
          hint: "Utilisez password pour définir le mot de passe."
        },
        {
          id: 7,
          description: "Exiger un mot de passe à la connexion via Telnet.",
          label: "S1(config-line)# ",
          command: "login",
          hint: "Utilisez login pour activer l'authentification par mot de passe."
        },
        {
          id: 8,
          description: "Activer le cryptage des mots de passe.",
          label: "S1(config)# ",
          command: "service password-encryption",
          hint: "Utilisez service password-encryption pour crypter les mots de passe."
        },
        {
          id: 9,
          description: "Configurer une bannière MOTD pour avertir les utilisateurs.",
          label: "S1(config)# ",
          command: "banner motd #ACCES AUTORISE UNIQUEMENT AUX ADMINISTRATEURS#",
          hint: "Utilisez banner motd suivi d'un délimiteur (#) et du message."
        }
      ]
    }
  ]
},
  {
    courseId: 2,
configurations: [
      {
        id: 1,
        name: "Configuration Switch VLAN",
        intro: {
          text: "<p>Bienvenue dans la configuration des switches pour CCNA 2 ! Cette topologie inclut quatre switches (Switch1, Switch2, Switch3, Switch4) interconnectés via des liens trunk. Switch1 est connecté à Switch2 et Switch3, tandis que Switch2 est connecté à Switch4. Les VLANs configurés sont : VLAN 10 (COMPTA) avec la plage 192.168.10.0/24 (passerelle 192.168.10.1), VLAN 20 (VENTE) avec 192.168.20.0/24 (passerelle 192.168.20.1), VLAN 30 (RH) avec 192.168.30.0/24 (passerelle 192.168.30.1), VLAN 40 (NATIVE) comme VLAN natif pour les trunks, et VLAN 50 (MANAGEMENT) avec 192.168.50.0/24 (passerelle 192.168.50.1). Vous allez configurer les noms, créer et attribuer les VLANs, configurer les ports d'accès et trunks, activer la QoS, sécuriser avec SSH, et vérifier la connectivité pour tous les switches. Suivez les étapes dans l'ordre comme dans un émulateur Cisco.</p>",
          svg: "<img src=\"assets/images/config-ccna-2-complet.png\" />" // Remplacé par l'image, donc vide
        },
        tasks: [
          // Switch1 - Début de la configuration
          {
            id: 1,
            description: "<p>Accéder au mode privilégié sur Switch1.</p>",
            label: "Switch1>",
            command: "enable",
            hint: "Tapez 'enable' pour passer en mode privilégié."
          },
          {
            id: 2,
            description: "<p>Entrer en mode de configuration globale sur Switch1.</p>",
            label: "Switch1#",
            command: "configure terminal",
            hint: "Utilisez 'configure terminal' (ou 'conf t')."
          },
          {
            id: 3,
            description: "<p>Définir le nom du switch comme Switch1.</p>",
            label: "Switch1(config)#",
            command: "hostname Switch1",
            hint: "Utilisez 'hostname Switch1'."
          },
          {
            id: 4,
            description: "<p>Créer le VLAN 10.</p>",
            label: "Switch1(config)#",
            command: "vlan 10",
            hint: "Utilisez 'vlan 10'."
          },
          {
            id: 5,
            description: "<p>Nommer le VLAN 10 comme COMPTA.</p>",
            label: "Switch1(config-vlan)#",
            command: "name COMPTA",
            hint: "Utilisez 'name COMPTA'."
          },
          {
            id: 6,
            description: "<p>Créer le VLAN 20.</p>",
            label: "Switch1(config)#",
            command: "vlan 20",
            hint: "Utilisez 'vlan 20'."
          },
          {
            id: 7,
            description: "<p>Nommer le VLAN 20 comme VENTE.</p>",
            label: "Switch1(config-vlan)#",
            command: "name VENTE",
            hint: "Utilisez 'name VENTE'."
          },
          {
            id: 8,
            description: "<p>Créer le VLAN 30.</p>",
            label: "Switch1(config)#",
            command: "vlan 30",
            hint: "Utilisez 'vlan 30'."
          },
          {
            id: 9,
            description: "<p>Nommer le VLAN 30 comme RH.</p>",
            label: "Switch1(config-vlan)#",
            command: "name RH",
            hint: "Utilisez 'name RH'."
          },
          {
            id: 10,
            description: "<p>Créer le VLAN 40.</p>",
            label: "Switch1(config)#",
            command: "vlan 40",
            hint: "Utilisez 'vlan 40'."
          },
          {
            id: 11,
            description: "<p>Nommer le VLAN 40 comme NATIVE.</p>",
            label: "Switch1(config-vlan)#",
            command: "name NATIVE",
            hint: "Utilisez 'name NATIVE'."
          },
          {
            id: 12,
            description: "<p>Créer le VLAN 50.</p>",
            label: "Switch1(config)#",
            command: "vlan 50",
            hint: "Utilisez 'vlan 50'."
          },
          {
            id: 13,
            description: "<p>Nommer le VLAN 50 comme MANAGEMENT.</p>",
            label: "Switch1(config-vlan)#",
            command: "name MANAGEMENT",
            hint: "Utilisez 'name MANAGEMENT'."
          },
          {
            id: 14,
            description: "<p>Configurer les ports GigabitEthernet0/1 et 0/2 en mode trunk sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "interface range GigabitEthernet0/1-2",
            hint: "Utilisez 'interface range GigabitEthernet0/1-2'."
          },
          {
            id: 15,
            description: "<p>Définir le mode trunk sur les ports.</p>",
            label: "Switch1(config-if-range)#",
            command: "switchport mode trunk",
            hint: "Utilisez 'switchport mode trunk'."
          },
          {
            id: 16,
            description: "<p>Activer le VLAN natif 40 sur les ports trunk.</p>",
            label: "Switch1(config-if-range)#",
            command: "switchport trunk native vlan 40",
            hint: "Utilisez 'switchport trunk native vlan 40'."
          },
          {
            id: 17,
            description: "<p>Autoriser les VLANs 10, 20, 30, et 50 sur les ports trunk.</p>",
            label: "Switch1(config-if-range)#",
            command: "switchport trunk allowed vlan 10,20,30,50",
            hint: "Utilisez 'switchport trunk allowed vlan 10,20,30,50'."
          },
          {
            id: 18,
            description: "<p>Désactiver le protocole DTP sur les ports trunk.</p>",
            label: "Switch1(config-if-range)#",
            command: "switchport nonegotiate",
            hint: "Utilisez 'switchport nonegotiate'."
          },
          {
            id: 19,
            description: "<p>Activer la qualité de service (QoS) sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "mls qos",
            hint: "Utilisez 'mls qos'."
          },
          {
            id: 20,
            description: "<p>Configurer le nom de domaine 'cisco.com' sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "ip domain-name cisco.com",
            hint: "Utilisez 'ip domain-name cisco.com'."
          },
          {
            id: 21,
            description: "<p>Créer un utilisateur 'admin' avec le mot de passe 'Cisco' sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "username admin privilege 15 secret Cisco",
            hint: "Utilisez 'username admin privilege 15 secret Cisco'."
          },
          {
            id: 22,
            description: "<p>Générer une clé RSA de 1024 bits sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "crypto key generate rsa",
            hint: "Utilisez 'crypto key generate rsa' et entrez 1024 quand demandé."
          },
          {
            id: 23,
            description: "<p>Configurer le mot de passe secret 'Cisco' sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "enable secret Cisco",
            hint: "Utilisez 'enable secret Cisco'."
          },
          {
            id: 24,
            description: "<p>Entrer en configuration de la ligne console sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "line console 0",
            hint: "Utilisez 'line console 0'."
          },
          {
            id: 25,
            description: "<p>Définir le mot de passe de la console comme 'class'.</p>",
            label: "Switch1(config-line)#",
            command: "password class",
            hint: "Utilisez 'password class'."
          },
          {
            id: 26,
            description: "<p>Activer le login sur la console.</p>",
            label: "Switch1(config-line)#",
            command: "login",
            hint: "Utilisez 'login'."
          },
          {
            id: 27,
            description: "<p>Entrer en configuration des lignes VTY 0 à 15 sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "line vty 0 15",
            hint: "Utilisez 'line vty 0 15'."
          },
          {
            id: 28,
            description: "<p>Définir le mot de passe des lignes VTY comme 'Cisco'.</p>",
            label: "Switch1(config-line)#",
            command: "password Cisco",
            hint: "Utilisez 'password Cisco'."
          },
          {
            id: 29,
            description: "<p>Activer le login local sur les lignes VTY.</p>",
            label: "Switch1(config-line)#",
            command: "login local",
            hint: "Utilisez 'login local'."
          },
          {
            id: 30,
            description: "<p>Activer SSH sur les lignes VTY.</p>",
            label: "Switch1(config-line)#",
            command: "transport input ssh",
            hint: "Utilisez 'transport input ssh'."
          },
          {
            id: 31,
            description: "<p>Activer SSH version 2 sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "ip ssh version 2",
            hint: "Utilisez 'ip ssh version 2'."
          },
          {
            id: 32,
            description: "<p>Chiffrer tous les mots de passe sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "service password-encryption",
            hint: "Utilisez 'service password-encryption'."
          },
          {
            id: 33,
            description: "<p>Configurer l'adresse IP 192.168.50.2/24 sur VLAN 50 de Switch1.</p>",
            label: "Switch1(config)#",
            command: "interface vlan 50",
            hint: "Utilisez 'interface vlan 50'."
          },
          {
            id: 34,
            description: "<p>Attribuer l'adresse IP à VLAN 50 sur Switch1.</p>",
            label: "Switch1(config-if)#",
            command: "ip address 192.168.50.2 255.255.255.0",
            hint: "Utilisez 'ip address 192.168.50.2 255.255.255.0'."
          },
          {
            id: 35,
            description: "<p>Sortir du mode de configuration d'interface sur Switch1.</p>",
            label: "Switch1(config-if)#",
            command: "exit",
            hint: "Utilisez 'exit' pour revenir au mode de configuration globale."
          },
          {
            id: 36,
            description: "<p>Sauvegarder la configuration sur Switch1.</p>",
            label: "Switch1(config)#",
            command: "write memory",
            hint: "Utilisez 'write memory' (ou 'wr') pour sauvegarder."
          },

          // Switch2 - Début de la configuration
          {
            id: 37,
            description: "<p>Accéder au mode privilégié sur Switch2.</p>",
            label: "Switch2>",
            command: "enable",
            hint: "Tapez 'enable' pour passer en mode privilégié."
          },
          {
            id: 38,
            description: "<p>Entrer en mode de configuration globale sur Switch2.</p>",
            label: "Switch2#",
            command: "configure terminal",
            hint: "Utilisez 'configure terminal' (ou 'conf t')."
          },
          {
            id: 39,
            description: "<p>Définir le nom du switch comme Switch2.</p>",
            label: "Switch2(config)#",
            command: "hostname Switch2",
            hint: "Utilisez 'hostname Switch2'."
          },
          {
            id: 40,
            description: "<p>Créer le VLAN 10.</p>",
            label: "Switch2(config)#",
            command: "vlan 10",
            hint: "Utilisez 'vlan 10'."
          },
          {
            id: 41,
            description: "<p>Nommer le VLAN 10 comme COMPTA.</p>",
            label: "Switch2(config-vlan)#",
            command: "name COMPTA",
            hint: "Utilisez 'name COMPTA'."
          },
          {
            id: 42,
            description: "<p>Créer le VLAN 20.</p>",
            label: "Switch2(config)#",
            command: "vlan 20",
            hint: "Utilisez 'vlan 20'."
          },
          {
            id: 43,
            description: "<p>Nommer le VLAN 20 comme VENTE.</p>",
            label: "Switch2(config-vlan)#",
            command: "name VENTE",
            hint: "Utilisez 'name VENTE'."
          },
          {
            id: 44,
            description: "<p>Créer le VLAN 30.</p>",
            label: "Switch2(config)#",
            command: "vlan 30",
            hint: "Utilisez 'vlan 30'."
          },
          {
            id: 45,
            description: "<p>Nommer le VLAN 30 comme RH.</p>",
            label: "Switch2(config-vlan)#",
            command: "name RH",
            hint: "Utilisez 'name RH'."
          },
          {
            id: 46,
            description: "<p>Créer le VLAN 40.</p>",
            label: "Switch2(config)#",
            command: "vlan 40",
            hint: "Utilisez 'vlan 40'."
          },
          {
            id: 47,
            description: "<p>Nommer le VLAN 40 comme NATIVE.</p>",
            label: "Switch2(config-vlan)#",
            command: "name NATIVE",
            hint: "Utilisez 'name NATIVE'."
          },
          {
            id: 48,
            description: "<p>Créer le VLAN 50.</p>",
            label: "Switch2(config)#",
            command: "vlan 50",
            hint: "Utilisez 'vlan 50'."
          },
          {
            id: 49,
            description: "<p>Nommer le VLAN 50 comme MANAGEMENT.</p>",
            label: "Switch2(config-vlan)#",
            command: "name MANAGEMENT",
            hint: "Utilisez 'name MANAGEMENT'."
          },
          {
            id: 50,
            description: "<p>Configurer les ports GigabitEthernet0/1 et 0/2 en mode trunk sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "interface range GigabitEthernet0/1-2",
            hint: "Utilisez 'interface range GigabitEthernet0/1-2'."
          },
          {
            id: 51,
            description: "<p>Définir le mode trunk sur les ports.</p>",
            label: "Switch2(config-if-range)#",
            command: "switchport mode trunk",
            hint: "Utilisez 'switchport mode trunk'."
          },
          {
            id: 52,
            description: "<p>Activer le VLAN natif 40 sur les ports trunk.</p>",
            label: "Switch2(config-if-range)#",
            command: "switchport trunk native vlan 40",
            hint: "Utilisez 'switchport trunk native vlan 40'."
          },
          {
            id: 53,
            description: "<p>Autoriser les VLANs 10, 20, 30, et 50 sur les ports trunk.</p>",
            label: "Switch2(config-if-range)#",
            command: "switchport trunk allowed vlan 10,20,30,50",
            hint: "Utilisez 'switchport trunk allowed vlan 10,20,30,50'."
          },
          {
            id: 54,
            description: "<p>Désactiver le protocole DTP sur les ports trunk.</p>",
            label: "Switch2(config-if-range)#",
            command: "switchport nonegotiate",
            hint: "Utilisez 'switchport nonegotiate'."
          },
          {
            id: 55,
            description: "<p>Activer la qualité de service (QoS) sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "mls qos",
            hint: "Utilisez 'mls qos'."
          },
          {
            id: 56,
            description: "<p>Configurer le nom de domaine 'cisco.com' sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "ip domain-name cisco.com",
            hint: "Utilisez 'ip domain-name cisco.com'."
          },
          {
            id: 57,
            description: "<p>Créer un utilisateur 'admin' avec le mot de passe 'Cisco' sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "username admin privilege 15 secret Cisco",
            hint: "Utilisez 'username admin privilege 15 secret Cisco'."
          },
          {
            id: 58,
            description: "<p>Générer une clé RSA de 1024 bits sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "crypto key generate rsa",
            hint: "Utilisez 'crypto key generate rsa' et entrez 1024 quand demandé."
          },
          {
            id: 59,
            description: "<p>Configurer le mot de passe secret 'Cisco' sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "enable secret Cisco",
            hint: "Utilisez 'enable secret Cisco'."
          },
          {
            id: 60,
            description: "<p>Entrer en configuration de la ligne console sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "line console 0",
            hint: "Utilisez 'line console 0'."
          },
          {
            id: 61,
            description: "<p>Définir le mot de passe de la console comme 'class'.</p>",
            label: "Switch2(config-line)#",
            command: "password class",
            hint: "Utilisez 'password class'."
          },
          {
            id: 62,
            description: "<p>Activer le login sur la console.</p>",
            label: "Switch2(config-line)#",
            command: "login",
            hint: "Utilisez 'login'."
          },
          {
            id: 63,
            description: "<p>Entrer en configuration des lignes VTY 0 à 15 sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "line vty 0 15",
            hint: "Utilisez 'line vty 0 15'."
          },
          {
            id: 64,
            description: "<p>Définir le mot de passe des lignes VTY comme 'Cisco'.</p>",
            label: "Switch2(config-line)#",
            command: "password Cisco",
            hint: "Utilisez 'password Cisco'."
          },
          {
            id: 65,
            description: "<p>Activer le login local sur les lignes VTY.</p>",
            label: "Switch2(config-line)#",
            command: "login local",
            hint: "Utilisez 'login local'."
          },
          {
            id: 66,
            description: "<p>Activer SSH sur les lignes VTY.</p>",
            label: "Switch2(config-line)#",
            command: "transport input ssh",
            hint: "Utilisez 'transport input ssh'."
          },
          {
            id: 67,
            description: "<p>Activer SSH version 2 sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "ip ssh version 2",
            hint: "Utilisez 'ip ssh version 2'."
          },
          {
            id: 68,
            description: "<p>Chiffrer tous les mots de passe sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "service password-encryption",
            hint: "Utilisez 'service password-encryption'."
          },
          {
            id: 69,
            description: "<p>Configurer l'adresse IP 192.168.50.3/24 sur VLAN 50 de Switch2.</p>",
            label: "Switch2(config)#",
            command: "interface vlan 50",
            hint: "Utilisez 'interface vlan 50'."
          },
          {
            id: 70,
            description: "<p>Attribuer l'adresse IP à VLAN 50 sur Switch2.</p>",
            label: "Switch2(config-if)#",
            command: "ip address 192.168.50.3 255.255.255.0",
            hint: "Utilisez 'ip address 192.168.50.3 255.255.255.0'."
          },
          {
            id: 71,
            description: "<p>Sortir du mode de configuration d'interface sur Switch2.</p>",
            label: "Switch2(config-if)#",
            command: "exit",
            hint: "Utilisez 'exit' pour revenir au mode de configuration globale."
          },
          {
            id: 72,
            description: "<p>Sauvegarder la configuration sur Switch2.</p>",
            label: "Switch2(config)#",
            command: "write memory",
            hint: "Utilisez 'write memory' (ou 'wr') pour sauvegarder."
          },

          // Switch3 - Début de la configuration
          {
            id: 73,
            description: "<p>Accéder au mode privilégié sur Switch3.</p>",
            label: "Switch3>",
            command: "enable",
            hint: "Tapez 'enable' pour passer en mode privilégié."
          },
          {
            id: 74,
            description: "<p>Entrer en mode de configuration globale sur Switch3.</p>",
            label: "Switch3#",
            command: "configure terminal",
            hint: "Utilisez 'configure terminal' (ou 'conf t')."
          },
          {
            id: 75,
            description: "<p>Définir le nom du switch comme Switch3.</p>",
            label: "Switch3(config)#",
            command: "hostname Switch3",
            hint: "Utilisez 'hostname Switch3'."
          },
          {
            id: 76,
            description: "<p>Créer le VLAN 10.</p>",
            label: "Switch3(config)#",
            command: "vlan 10",
            hint: "Utilisez 'vlan 10'."
          },
          {
            id: 77,
            description: "<p>Nommer le VLAN 10 comme COMPTA.</p>",
            label: "Switch3(config-vlan)#",
            command: "name COMPTA",
            hint: "Utilisez 'name COMPTA'."
          },
          {
            id: 78,
            description: "<p>Créer le VLAN 20.</p>",
            label: "Switch3(config)#",
            command: "vlan 20",
            hint: "Utilisez 'vlan 20'."
          },
          {
            id: 79,
            description: "<p>Nommer le VLAN 20 comme VENTE.</p>",
            label: "Switch3(config-vlan)#",
            command: "name VENTE",
            hint: "Utilisez 'name VENTE'."
          },
          {
            id: 80,
            description: "<p>Créer le VLAN 30.</p>",
            label: "Switch3(config)#",
            command: "vlan 30",
            hint: "Utilisez 'vlan 30'."
          },
          {
            id: 81,
            description: "<p>Nommer le VLAN 30 comme RH.</p>",
            label: "Switch3(config-vlan)#",
            command: "name RH",
            hint: "Utilisez 'name RH'."
          },
          {
            id: 82,
            description: "<p>Créer le VLAN 40.</p>",
            label: "Switch3(config)#",
            command: "vlan 40",
            hint: "Utilisez 'vlan 40'."
          },
          {
            id: 83,
            description: "<p>Nommer le VLAN 40 comme NATIVE.</p>",
            label: "Switch3(config-vlan)#",
            command: "name NATIVE",
            hint: "Utilisez 'name NATIVE'."
          },
          {
            id: 84,
            description: "<p>Créer le VLAN 50.</p>",
            label: "Switch3(config)#",
            command: "vlan 50",
            hint: "Utilisez 'vlan 50'."
          },
          {
            id: 85,
            description: "<p>Nommer le VLAN 50 comme MANAGEMENT.</p>",
            label: "Switch3(config-vlan)#",
            command: "name MANAGEMENT",
            hint: "Utilisez 'name MANAGEMENT'."
          },
          {
            id: 86,
            description: "<p>Configurer les ports GigabitEthernet0/1 et 0/2 en mode trunk sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "interface range GigabitEthernet0/1-2",
            hint: "Utilisez 'interface range GigabitEthernet0/1-2'."
          },
          {
            id: 87,
            description: "<p>Définir le mode trunk sur les ports.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport mode trunk",
            hint: "Utilisez 'switchport mode trunk'."
          },
          {
            id: 88,
            description: "<p>Activer le VLAN natif 40 sur les ports trunk.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport trunk native vlan 40",
            hint: "Utilisez 'switchport trunk native vlan 40'."
          },
          {
            id: 89,
            description: "<p>Autoriser les VLANs 10, 20, 30, et 50 sur les ports trunk.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport trunk allowed vlan 10,20,30,50",
            hint: "Utilisez 'switchport trunk allowed vlan 10,20,30,50'."
          },
          {
            id: 90,
            description: "<p>Désactiver le protocole DTP sur les ports trunk.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport nonegotiate",
            hint: "Utilisez 'switchport nonegotiate'."
          },
          {
            id: 91,
            description: "<p>Activer la qualité de service (QoS) sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "mls qos",
            hint: "Utilisez 'mls qos'."
          },
          {
            id: 92,
            description: "<p>Configurer les ports FastEthernet0/1 à 8 en mode accès pour VLAN 10 sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "interface range FastEthernet0/1-8",
            hint: "Utilisez 'interface range FastEthernet0/1-8'."
          },
          {
            id: 93,
            description: "<p>Définir le mode accès sur les ports.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport mode access",
            hint: "Utilisez 'switchport mode access'."
          },
          {
            id: 94,
            description: "<p>Attribuer VLAN 10 aux ports.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport access vlan 10",
            hint: "Utilisez 'switchport access vlan 10'."
          },
          {
            id: 95,
            description: "<p>Configurer les ports FastEthernet0/9 à 16 en mode accès pour VLAN 20 sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "interface range FastEthernet0/9-16",
            hint: "Utilisez 'interface range FastEthernet0/9-16'."
          },
          {
            id: 96,
            description: "<p>Définir le mode accès sur les ports.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport mode access",
            hint: "Utilisez 'switchport mode access'."
          },
          {
            id: 97,
            description: "<p>Attribuer VLAN 20 aux ports.</p>",
            label: "Switch3(config-if-range)#",
            command: "switchport access vlan 20",
            hint: "Utilisez 'switchport access vlan 20'."
          },
          {
            id: 98,
            description: "<p>Configurer le nom de domaine 'cisco.com' sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "ip domain-name cisco.com",
            hint: "Utilisez 'ip domain-name cisco.com'."
          },
          {
            id: 99,
            description: "<p>Créer un utilisateur 'admin' avec le mot de passe 'Cisco' sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "username admin privilege 15 secret Cisco",
            hint: "Utilisez 'username admin privilege 15 secret Cisco'."
          },
          {
            id: 100,
            description: "<p>Générer une clé RSA de 1024 bits sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "crypto key generate rsa",
            hint: "Utilisez 'crypto key generate rsa' et entrez 1024 quand demandé."
          },
          {
            id: 101,
            description: "<p>Configurer le mot de passe secret 'Cisco' sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "enable secret Cisco",
            hint: "Utilisez 'enable secret Cisco'."
          },
          {
            id: 102,
            description: "<p>Entrer en configuration de la ligne console sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "line console 0",
            hint: "Utilisez 'line console 0'."
          },
          {
            id: 103,
            description: "<p>Définir le mot de passe de la console comme 'class'.</p>",
            label: "Switch3(config-line)#",
            command: "password class",
            hint: "Utilisez 'password class'."
          },
          {
            id: 104,
            description: "<p>Activer le login sur la console.</p>",
            label: "Switch3(config-line)#",
            command: "login",
            hint: "Utilisez 'login'."
          },
          {
            id: 105,
            description: "<p>Entrer en configuration des lignes VTY 0 à 15 sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "line vty 0 15",
            hint: "Utilisez 'line vty 0 15'."
          },
          {
            id: 106,
            description: "<p>Définir le mot de passe des lignes VTY comme 'Cisco'.</p>",
            label: "Switch3(config-line)#",
            command: "password Cisco",
            hint: "Utilisez 'password Cisco'."
          },
          {
            id: 107,
            description: "<p>Activer le login local sur les lignes VTY.</p>",
            label: "Switch3(config-line)#",
            command: "login local",
            hint: "Utilisez 'login local'."
          },
          {
            id: 108,
            description: "<p>Activer SSH sur les lignes VTY.</p>",
            label: "Switch3(config-line)#",
            command: "transport input ssh",
            hint: "Utilisez 'transport input ssh'."
          },
          {
            id: 109,
            description: "<p>Activer SSH version 2 sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "ip ssh version 2",
            hint: "Utilisez 'ip ssh version 2'."
          },
          {
            id: 110,
            description: "<p>Chiffrer tous les mots de passe sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "service password-encryption",
            hint: "Utilisez 'service password-encryption'."
          },
          {
            id: 111,
            description: "<p>Configurer l'adresse IP 192.168.50.4/24 sur VLAN 50 de Switch3.</p>",
            label: "Switch3(config)#",
            command: "interface vlan 50",
            hint: "Utilisez 'interface vlan 50'."
          },
          {
            id: 112,
            description: "<p>Attribuer l'adresse IP à VLAN 50 sur Switch3.</p>",
            label: "Switch3(config-if)#",
            command: "ip address 192.168.50.4 255.255.255.0",
            hint: "Utilisez 'ip address 192.168.50.4 255.255.255.0'."
          },
          {
            id: 113,
            description: "<p>Sortir du mode de configuration d'interface sur Switch3.</p>",
            label: "Switch3(config-if)#",
            command: "exit",
            hint: "Utilisez 'exit' pour revenir au mode de configuration globale."
          },
          {
            id: 114,
            description: "<p>Sauvegarder la configuration sur Switch3.</p>",
            label: "Switch3(config)#",
            command: "write memory",
            hint: "Utilisez 'write memory' (ou 'wr') pour sauvegarder."
          },

          // Switch4 - Début de la configuration
          {
            id: 115,
            description: "<p>Accéder au mode privilégié sur Switch4.</p>",
            label: "Switch4>",
            command: "enable",
            hint: "Tapez 'enable' pour passer en mode privilégié."
          },
          {
            id: 116,
            description: "<p>Entrer en mode de configuration globale sur Switch4.</p>",
            label: "Switch4#",
            command: "configure terminal",
            hint: "Utilisez 'configure terminal' (ou 'conf t')."
          },
          {
            id: 117,
            description: "<p>Définir le nom du switch comme Switch4.</p>",
            label: "Switch4(config)#",
            command: "hostname Switch4",
            hint: "Utilisez 'hostname Switch4'."
          },
          {
            id: 118,
            description: "<p>Créer le VLAN 10.</p>",
            label: "Switch4(config)#",
            command: "vlan 10",
            hint: "Utilisez 'vlan 10'."
          },
          {
            id: 119,
            description: "<p>Nommer le VLAN 10 comme COMPTA.</p>",
            label: "Switch4(config-vlan)#",
            command: "name COMPTA",
            hint: "Utilisez 'name COMPTA'."
          },
          {
            id: 120,
            description: "<p>Créer le VLAN 20.</p>",
            label: "Switch4(config)#",
            command: "vlan 20",
            hint: "Utilisez 'vlan 20'."
          },
          {
            id: 121,
            description: "<p>Nommer le VLAN 20 comme VENTE.</p>",
            label: "Switch4(config-vlan)#",
            command: "name VENTE",
            hint: "Utilisez 'name VENTE'."
          },
          {
            id: 122,
            description: "<p>Créer le VLAN 30.</p>",
            label: "Switch4(config)#",
            command: "vlan 30",
            hint: "Utilisez 'vlan 30'."
          },
          {
            id: 123,
            description: "<p>Nommer le VLAN 30 comme RH.</p>",
            label: "Switch4(config-vlan)#",
            command: "name RH",
            hint: "Utilisez 'name RH'."
          },
          {
            id: 124,
            description: "<p>Créer le VLAN 40.</p>",
            label: "Switch4(config)#",
            command: "vlan 40",
            hint: "Utilisez 'vlan 40'."
          },
          {
            id: 125,
            description: "<p>Nommer le VLAN 40 comme NATIVE.</p>",
            label: "Switch4(config-vlan)#",
            command: "name NATIVE",
            hint: "Utilisez 'name NATIVE'."
          },
          {
            id: 126,
            description: "<p>Créer le VLAN 50.</p>",
            label: "Switch4(config)#",
            command: "vlan 50",
            hint: "Utilisez 'vlan 50'."
          },
          {
            id: 127,
            description: "<p>Nommer le VLAN 50 comme MANAGEMENT.</p>",
            label: "Switch4(config-vlan)#",
            command: "name MANAGEMENT",
            hint: "Utilisez 'name MANAGEMENT'."
          },
          {
            id: 128,
            description: "<p>Configurer les ports GigabitEthernet0/1 et 0/2 en mode trunk sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "interface range GigabitEthernet0/1-2",
            hint: "Utilisez 'interface range GigabitEthernet0/1-2'."
          },
          {
            id: 129,
            description: "<p>Définir le mode trunk sur les ports.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport mode trunk",
            hint: "Utilisez 'switchport mode trunk'."
          },
          {
            id: 130,
            description: "<p>Activer le VLAN natif 40 sur les ports trunk.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport trunk native vlan 40",
            hint: "Utilisez 'switchport trunk native vlan 40'."
          },
          {
            id: 131,
            description: "<p>Autoriser les VLANs 10, 20, 30, et 50 sur les ports trunk.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport trunk allowed vlan 10,20,30,50",
            hint: "Utilisez 'switchport trunk allowed vlan 10,20,30,50'."
          },
          {
            id: 132,
            description: "<p>Désactiver le protocole DTP sur les ports trunk.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport nonegotiate",
            hint: "Utilisez 'switchport nonegotiate'."
          },
          {
            id: 133,
            description: "<p>Activer la qualité de service (QoS) sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "mls qos",
            hint: "Utilisez 'mls qos'."
          },
          {
            id: 134,
            description: "<p>Configurer les ports FastEthernet0/17 à 24 en mode accès pour VLAN 30 sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "interface range FastEthernet0/17-24",
            hint: "Utilisez 'interface range FastEthernet0/17-24'."
          },
          {
            id: 135,
            description: "<p>Définir le mode accès sur les ports.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport mode access",
            hint: "Utilisez 'switchport mode access'."
          },
          {
            id: 136,
            description: "<p>Attribuer VLAN 30 aux ports.</p>",
            label: "Switch4(config-if-range)#",
            command: "switchport access vlan 30",
            hint: "Utilisez 'switchport access vlan 30'."
          },
          {
            id: 137,
            description: "<p>Configurer le nom de domaine 'cisco.com' sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "ip domain-name cisco.com",
            hint: "Utilisez 'ip domain-name cisco.com'."
          },
          {
            id: 138,
            description: "<p>Créer un utilisateur 'admin' avec le mot de passe 'Cisco' sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "username admin privilege 15 secret Cisco",
            hint: "Utilisez 'username admin privilege 15 secret Cisco'."
          },
          {
            id: 139,
            description: "<p>Générer une clé RSA de 1024 bits sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "crypto key generate rsa",
            hint: "Utilisez 'crypto key generate rsa' et entrez 1024 quand demandé."
          },
          {
            id: 140,
            description: "<p>Configurer le mot de passe secret 'Cisco' sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "enable secret Cisco",
            hint: "Utilisez 'enable secret Cisco'."
          },
          {
            id: 141,
            description: "<p>Entrer en configuration de la ligne console sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "line console 0",
            hint: "Utilisez 'line console 0'."
          },
          {
            id: 142,
            description: "<p>Définir le mot de passe de la console comme 'class'.</p>",
            label: "Switch4(config-line)#",
            command: "password class",
            hint: "Utilisez 'password class'."
          },
          {
            id: 143,
            description: "<p>Activer le login sur la console.</p>",
            label: "Switch4(config-line)#",
            command: "login",
            hint: "Utilisez 'login'."
          },
          {
            id: 144,
            description: "<p>Entrer en configuration des lignes VTY 0 à 15 sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "line vty 0 15",
            hint: "Utilisez 'line vty 0 15'."
          },
          {
            id: 145,
            description: "<p>Définir le mot de passe des lignes VTY comme 'Cisco'.</p>",
            label: "Switch4(config-line)#",
            command: "password Cisco",
            hint: "Utilisez 'password Cisco'."
          },
          {
            id: 146,
            description: "<p>Activer le login local sur les lignes VTY.</p>",
            label: "Switch4(config-line)#",
            command: "login local",
            hint: "Utilisez 'login local'."
          },
          {
            id: 147,
            description: "<p>Activer SSH sur les lignes VTY.</p>",
            label: "Switch4(config-line)#",
            command: "transport input ssh",
            hint: "Utilisez 'transport input ssh'."
          },
          {
            id: 148,
            description: "<p>Activer SSH version 2 sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "ip ssh version 2",
            hint: "Utilisez 'ip ssh version 2'."
          },
          {
            id: 149,
            description: "<p>Chiffrer tous les mots de passe sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "service password-encryption",
            hint: "Utilisez 'service password-encryption'."
          },
          {
            id: 150,
            description: "<p>Configurer l'adresse IP 192.168.50.5/24 sur VLAN 50 de Switch4.</p>",
            label: "Switch4(config)#",
            command: "interface vlan 50",
            hint: "Utilisez 'interface vlan 50'."
          },
          {
            id: 151,
            description: "<p>Attribuer l'adresse IP à VLAN 50 sur Switch4.</p>",
            label: "Switch4(config-if)#",
            command: "ip address 192.168.50.5 255.255.255.0",
            hint: "Utilisez 'ip address 192.168.50.5 255.255.255.0'."
          },
          {
            id: 152,
            description: "<p>Sortir du mode de configuration d'interface sur Switch4.</p>",
            label: "Switch4(config-if)#",
            command: "exit",
            hint: "Utilisez 'exit' pour revenir au mode de configuration globale."
          },
          {
            id: 153,
            description: "<p>Sauvegarder la configuration sur Switch4.</p>",
            label: "Switch4(config)#",
            command: "write memory",
            hint: "Utilisez 'write memory' (ou 'wr') pour sauvegarder."
          },

          // Vérification de la connectivité
          {
            id: 154,
            description: "<p>Sur un PC dans VLAN 10, vérifier la connectivité vers la passerelle 192.168.10.1.</p>",
            label: "PC(VLAN10)>",
            command: "ping 192.168.10.1",
            hint: "Utilisez 'ping 192.168.10.1' pour tester la connectivité.",
            pingSimulation: {
              pingSource: "PC (VLAN 10)",
              pingTarget: "Passerelle (192.168.10.1)",
              packetsSent: 4,
              packetsReceived: 4,
              packetsLost: 0,
              roundTripTime: { min: 1, avg: 2, max: 4 }
            }
          },
          {
            id: 155,
            description: "<p>Sur un PC dans VLAN 20, vérifier la connectivité vers la passerelle 192.168.20.1.</p>",
            label: "PC(VLAN20)>",
            command: "ping 192.168.20.1",
            hint: "Utilisez 'ping 192.168.20.1' pour tester la connectivité.",
            pingSimulation: {
              pingSource: "PC (VLAN 20)",
              pingTarget: "Passerelle (192.168.20.1)",
              packetsSent: 4,
              packetsReceived: 4,
              packetsLost: 0,
              roundTripTime: { min: 1, avg: 2, max: 4 }
            }
          },
          {
            id: 156,
            description: "<p>Sur un PC dans VLAN 30, vérifier la connectivité vers la passerelle 192.168.30.1.</p>",
            label: "PC(VLAN30)>",
            command: "ping 192.168.30.1",
            hint: "Utilisez 'ping 192.168.30.1' pour tester la connectivité.",
            pingSimulation: {
              pingSource: "PC (VLAN 30)",
              pingTarget: "Passerelle (192.168.30.1)",
              packetsSent: 4,
              packetsReceived: 4,
              packetsLost: 0,
              roundTripTime: { min: 1, avg: 2, max: 4 }
            }
          }
        ],
        summary: "<p>Configuration terminée avec succès ! Vous avez configuré Switch1, Switch2, Switch3, et Switch4 avec les VLANs appropriés, les trunks, la QoS, et la sécurité SSH. La connectivité entre les VLANs a été vérifiée avec des pings réussis.</p>"
      }
    ]
  }
]
};
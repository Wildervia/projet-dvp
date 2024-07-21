# projet-dvp

Bienvenue dans le PROJET-DVP ! Ce projet fournit une application web simple permettant d'effectuer des opérations arithmétiques de base. L'application est construite avec HTML, CSS, et JavaScript, et utilise Docker pour le déploiement. Le pipeline CI/CD est configuré avec GitHub Actions pour tester, construire, et déployer l'application.

## Contenu du Projet

- **index.html** : La page HTML principale de l'application.
- **styles.css** : Le fichier CSS pour le style de l'application.
- **script.js** : Le fichier JavaScript qui contient la logique de la calculatrice.
- **Dockerfile** : Le fichier pour construire l'image Docker avec Nginx pour servir les fichiers statiques.
- **github/workflows/ci-cd.yml** : Le fichier de configuration GitHub Actions pour le pipeline CI/CD.

# Initialisez un dépôt Git
git init

# Ajoutez tous les fichiers au dépôt
git add calculatrice : Le dossier calculatrice ajoute les fichier **'index.html', 'styles.css', script.js'**
git add Dockerfile
git add github worflows : Le dossier ci ajoute **'ci-cd.yaml'**

# Validez les fichiers ajoutés
git commit -m "Initial commit"

# Poussez les fichiers vers le dépôt GitHub
git push -u origin main

## Installation et Exécution

### Localement

1. **Cloner le Dépôt** :
    
    git clone https://github.com/Wildervia/projet-dvp.git
    

2. **Ouvrir le Fichier HTML** :
    Ouvrez `index.html` dans un navigateur pour voir l'application en action.

3. **Exécuter les Tests** :

- **`spec/calculatorSpec.js`** : Contient les tests pour vérifier le bon fonctionnement des opérations arithmétiques.

    Pour tester le JavaScript de notre application de calculatrice, nous avons utilisé une bibliothèque de tests comme Jasmine en suivant les commandes suivantes:

    npm install -g jasmine
    npx jasmine init
    npm install --save-dev jasmine-spec-reporter
    npx jasmine or jasmine
    "PS C:\Users\HP\projetdvp\projet-dvp> npx jasmine
Started
Jasmine started
.
  Calculator
    √ should add two numbers correctly (0.006 sec)
.    √ should subtract two numbers correctly (0.004 sec)
.    √ should multiply two numbers correctly (0.002 sec)
.    √ should divide two numbers correctly (0.001 sec)
.    √ should handle division by zero correctly (0.001 sec)
.    √ should return the second operand if no valid operation is provided (0.002 sec)




6 specs, 0 failures
Finished in 0.042 seconds
Executed 6 of 6 specs SUCCESS in 0.042 sec."
    
### Avec Docker

1. **Construire l'Image Docker** :
    docker build -t calculator .
    

2. **Exécuter le Conteneur Docker :
    docker run -d -p 8081:80 calculator

3. **Verification de l'image**
    docker ps "50b2335aa4e1   calculator   "/docker-entrypoint.…"   6 seconds ago   Up 5 seconds   0.0.0.0:8081->80/tcp   keen_williamson"
    

3. **Accéder à l'Application** :
    Ouvrez votre navigateur et accédez à http://localhost:8081

4. **Expliaction du fichier Docker**:    

    # Utiliser l'image officielle Nginx comme base
FROM nginx:alpine

# Copier les fichiers de l'application vers le répertoire approprié dans l'image Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour le trafic HTTP
EXPOSE 80

# Démarrer Nginx lorsque le conteneur est lancé
CMD ["nginx", "-g", "daemon off;"]

## CI/CD avec GitHub Actions

Le pipeline CI/CD est configuré pour automatiser les tests, la construction et le déploiement de l'application. Voici les étapes du pipeline :

1. **Test** : Exécute les tests à chaque push ou demande de tirage.
2. **Build** : Construit l'image Docker si les tests passent.
3. **Déploiement** : Pousse l'image Docker vers Docker Hub et déploie l'application sur un serveur distant.

### Configuration des Secrets GitHub

Assurez-vous de configurer les secrets nécessaires dans les paramètres de votre dépôt GitHub :

- `DOCKER_USERNAME` : Nom d'utilisateur Docker Hub.
- `DOCKER_PASSWORD` : Mot de passe Docker Hub.
- `DOCKER_HOST` : URL de votre hôte Docker (si nécessaire).
- `DOCKER_TLS_VERIFY` : (Optionnel) Indique si TLS est requis.
- `DOCKER_CERT_PATH` : (Optionnel) Chemin vers les certificats Docker.
- `SSH_USER` : Nom d'utilisateur SSH pour se connecter au serveur.
- `SERVER_IP` : Adresse IP du serveur distant où déployer l'application.


# Utiliser l'image officielle de Nginx
FROM nginx:alpine

# Supprimer le contenu par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copier votre fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/

# Copier les fichiers statiques dans le répertoire approprié pour Nginx
COPY calculatrice/index.html /usr/share/nginx/html/
COPY calculatrice/styles.css /usr/share/nginx/html/
COPY calculatrice/script.js /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]
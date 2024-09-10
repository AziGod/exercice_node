// Importation des modules nécessaires : Express et fs (à compléter)
const express = require('express');
const fs = require('fs'); // Complétez ici en important le module fs

// Créez une application Express (à compléter)
const app = express(); // Complétez en initialisant l'application Express

// Définissez un port pour votre serveur
const PORT = 3000;

// Route principale qui renvoie un message de bienvenue
app.get('/', (req, res) => {
    res.send('Bienvenue sur votre serveur Node.js avec Express et fs !');
});

// Route qui lit le contenu du fichier data.txt et l'affiche (à compléter)
app.get('/readfile', (req, res) => {
    // Utilisez fs pour lire le fichier data.txt (à compléter)
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            // Gérez l'erreur ici (à compléter)
            res.status(500).send('Erreur lors de la lecture du fichier', err);
        } else {
            // Envoyez le contenu du fichier en réponse (à compléter)
            res.send(data); // Complétez ici pour envoyer le contenu du fichier via res
        }
    });
});






// Route qui affiche la page html pour donner un lien qui télécharge le fichier data
const path = require('path');

app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'telecharger.html'));
});

app.get('/telecharger', (req, res) => {
    const file = path.join(__dirname, 'data.txt'); // Chemin vers le fichier
    res.download(file, 'data.txt', (err) => {
        if (err) {
            console.error('Erreur lors du téléchargement du fichier:', err);
            res.status(500).send('Erreur lors du téléchargement.');
        }
    });
});


// Démarrez le serveur pour qu'il écoute sur le port défini (à compléter)
app.listen(PORT, () => { // Complétez avec le port sur lequel votre serveur va écouter
    console.log(`Serveur démarré sur le port ${PORT}`);
});


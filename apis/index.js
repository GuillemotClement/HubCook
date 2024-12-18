//on vient récupérer express
const express = require("express");
//on vient récupérer cookie
//cela permet de venir extraire le cookie de la requête et de le manipuler
const cookie = require("cookie-parser");
const routes = require("./routes");
//création de l'app en utilisant une instance de express
const app = express();

//le middleware viens appliquer la fonction à toutes les requêtes entrante et applique la fonction pour récupérer les cookies
app.use(cookie());
//ici on vient extraire les body de la requête
app.use(express.json());

//on récupère le fichier permettant de se connecter à la base de données
require("./database");

app.use(routes);
//si on atteint ici, alors la route n'as pas été trouvé
app.use("*", (req, res) => {
	res.status(404).end();
});

//on vient écouter le port
app.listen(3001, () => {
	console.log("Serveur démarré sur le port 3001");
});

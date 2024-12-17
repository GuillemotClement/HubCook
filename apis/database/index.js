const mongoose = require("mongoose");

//on vient créer la connexion
//premier paramètre est l'url de la base de donnée
//la fonction retourne une promesse, on vient donc la traiter avec then
//on utilise ensuite une callback pour traiter la réponse
mongoose
	.connect("//")
	.then(() => {
		console.log("Connexion DB OK");
	})
	//si la connexion à échouer alors on affiche le message d'erreur
	.catch((e) => {
		console.log("Echec de la connexion à la DB : ".e);
	});

const mongoose = require("mongoose");

//on vient créer la connexion
//premier paramètre est l'url de la base de donnée
//la fonction retourne une promesse, on vient donc la traiter avec then
//on utilise ensuite une callback pour traiter la réponse
mongoose
	.connect(
		//on indique ladresse de mongo atlas
		//il faudras ajouter le mot de passe de l'user ainsi que la base de donnée (collection) que l'on souhaite utiliser
		"mongodb+srv://guillemotclement:849Tcmh3uvfk@cluster0.7wtm5.mongodb.net/reactJwt?retryWrites=true&w=majority&appName=Cluster0",
	)
	.then(() => {
		console.log("Connexion DB OK");
	})
	//si la connexion à échouer alors on affiche le message d'erreur
	.catch((e) => {
		console.log("Echec de la connexion à la DB : ", e);
	});

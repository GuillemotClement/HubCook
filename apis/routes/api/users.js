const UserModel = require("../../database/models/user.model");

const router = require("express").Router();

//on vient configurer la requête POST
//ici cela indique que l'on veut créer un nouvel utilisateur
// router.post("/", async (req, res) => {
// 	//on viens récupéré le body de la requête
// 	const body = req.body;
// 	//on créer l'utilisateur
// 	//pour cela on viendras créer un nouveau modèle pour le stocker en BDD
// 	//on viens importer le modèle pour les users
// 	// on viens créer un nouvel objet, et on lui passe les données provenant du body de la requete
// 	const newUser = new UserModel(body);
// 	//on viens sauvegarder l'utilsiateur en base de donnée
// 	// une fois fais, cela déclenche la callback
// 	//elle récupère l'erreur si présent, ou sinon la nouvelle ressource
// 	newUser.save((err, user) => {
// 		//si une erreur pendant l'enregistrement, on retourne une 404 avec le message d'erreur
// 		if (err) {
// 			res
// 				.status(404)
// 				.json("Erreur lors de l'enregistrement du nouvel utilisateur");
// 		} else {
// 			//si l'enregistrement est réussis, on retourne la nouvelle ressource
// 			res.json(user);
// 		}
// 	});
// });

router.post("/", async (req, res) => {
	try {
		// Récupération du body de la requête
		const body = req.body;

		// Création d'un nouvel utilisateur avec le modèle
		const newUser = new UserModel(body);

		// Sauvegarde de l'utilisateur en base de données
		const savedUser = await newUser.save();

		// Réponse avec le nouvel utilisateur créé
		res.status(201).json(savedUser);
	} catch (error) {
		// Gestion des erreurs
		console.error(
			"Erreur lors de l'enregistrement du nouvel utilisateur :",
			error,
		);

		// Différencier les types d'erreurs si possible
		if (error.name === "ValidationError") {
			// Erreur de validation Mongoose
			res.status(400).json({
				message: "Données invalides",
				errors: error.errors,
			});
		} else {
			// Erreur générique du serveur
			res.status(500).json({
				message: "Erreur lors de l'enregistrement du nouvel utilisateur",
			});
		}
	}
});

module.exports = router;

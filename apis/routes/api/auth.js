const { JsonWebTokenError } = require("jsonwebtoken");
const UserModel = require("../../database/models/user.model");
const router = require("express").Router();
const bcrypte = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { key, keyPub } = require("../../keys");

router.post("/", async (req, res) => {
	//on récupère email et mot de passe de la requête
	const { email, password } = req.body;
	try {
		//on recupère user depuis la BDD
		const user = await UserModel.findOne({ email }).exec();
		//on vérifie que l'utilsiateur existe
		if (user) {
			//on viens comparer les mot de passe
			//premier paramètre ce que l'on souhaite comparer
			//second paramètre c'est ce que l'on souhaite comaprer, ici l'user de la base de donnée
			if (bcrypte.compareSync(password, user.password)) {
				//si les mot de passe match, alors on créer le token
				//premier paramètre est le payload
				//second est la clé privé
				//troisième les options (subject)
				const token = jsonwebtoken.sign({}, key, {
					subject: user._id.toString(),
					//on définis le temps de vie du token
					//token valide 6 mois
					expiresIn: 3600 * 24 * 30 * 6,
					//on viens préciser l'algorithme
					algorithm: "RS256",
				});
				//une fois le token créer, on viens l'écrire dans les cookies
				res.cookie("token", token, { httpOnly: true });
				//on retourne ensuite user
				res.json(user);
			} else {
				res.status(400).json("Echec de l'identification");
			}
		} else {
			res.status(400).json("Echec de l'identification");
		}
	} catch (e) {
		//si la requête echoue, on retourne le message d'erreur
		res.status(400).json("Echec de l'identification");
	}
});

router.get("/current", async (res, req) => {
	//on extraire la clé token depuis le cookie
	const { token } = req.cookies;
	//si on as un token
	if (token) {
		try {
			// on extrait l'utilisateur du token
			//on vient décoder le token
			const decodedToken = jsonwebtoken.verify(token, keyPub);
			// on peut récupérer l'user
			//on récupère l'user via son ID avec la clé sub
			//exec() permet de transformer l'instruction en promesse
			const currentUser = await UserModel.findById(decodedToken.sub)
				.select("-password -__v")
				.exec();
			if (currentUser) {
				//si on as un user alors on le retourne
				return res.json(currentUser);
				// biome-ignore lint/style/noUselessElse: <explanation>
			} else {
				return res.json(null);
			}
		} catch (e) {
			return res.json(null);
		}
	} else {
		return res.json(null);
	}
});

module.exports = router;

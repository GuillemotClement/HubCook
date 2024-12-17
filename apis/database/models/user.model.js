const mongoose = require("mongoose");

//création du schema
const userSchema = mongosse.Schema({
	//on viens décrir les différentes colonnes de la table
	username: String,
	// on définis l'adresse email comme unique
	email: { type: String, unique: true },
	password: String,
});

//création du modèle
//premier paramètre est le nom de la table
//en second on lui passe le schéma
//cela sera une classe, on utilise donc des majuscules pour son nom
const UserModel = mongoose.model("user", userSchema);

//on viens ensuite exporter
module.exports = UserModel;

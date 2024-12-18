//on viens récupérer la fonction Router()
const router = require("express").Router();

const apiUsers = require("./users");

//route pour tester la connexion à la DB
// router.get("/test", (req, res) => {
// 	res.json("ok");
// });

// ici on vient récupérer les requete avec l'url /api/users
router.use("/users", apiUsers);

//exportation du router
module.exports = router;

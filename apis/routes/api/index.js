//on viens récupérer la fonction Router()
const router = require("express").Router();

const apiUsers = require("./users");
const apiAuth = require("./auth");
//route pour tester la connexion à la DB
// router.get("/test", (req, res) => {
// 	res.json("ok");
// });

// ici on vient récupérer les requete avec l'url /api/users
router.use("/users", apiUsers);
router.use("/auth", apiAuth);
//exportation du router
module.exports = router;

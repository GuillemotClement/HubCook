//on viens récupérer la fonction Router()
const router = require("express").Router();

const apiUsers = require("./users");

// ici on vient récupérer les requete avec l'url /api/users
router.use("/users", apiUsers);

//exportation du router
module.exports = router;

//on viens récupérer la fonction Router()
const router = require("express").Router();

//on récup!re apiRouter
const apiRouter = require("./api");

//on viens récupérer les requête qui commence par api
//on viens ensuite utiliser un second router
router.use("/api", apiRouter);

//route pour tester la connexion à la DB
router.get("/test", (req, res) => {
	res.json("ok");
});

//exportation du router
module.exports = router;

//on récupère le module fs de node
const fs = require("node:fs");

module.exports = {
	key: fs.readFileSync(`${__dirname}/jwtRS256.key`),
	keyPub: fs.readFileSync(`${__dirname}/jwtRS256.key.pub`),
};
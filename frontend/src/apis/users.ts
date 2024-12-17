//cette constante contient l'@ du serveur qui gère le back
const API_USERS = "/api/users";

export async function createUser(newUser) {
	//configuration de la requête
	const response = await fetch(API_USERS, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	});
	//on viens faire une gestion d'erreur du côté de l'api
	//on vient extraire le contenu de la réponse avec la méthode json()
	const body = await response.json();
	//si la réponse du serveur est OK
	if (response.ok) {
		//l'utilisateur est créer & on retourne le body de la réponse
		return body;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		//si la réponse n'est pas bonne on affiche le body
		if (body) {
			throw body;
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			//sinon on créer une erreur générique
			throw new Error("Error API createUser()");
		}
	}
}

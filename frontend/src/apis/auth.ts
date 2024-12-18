const API_AUTH = "/api/auth";

export async function signin(credentials) {
	const response = await fetch(API_AUTH, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});
	const body = await response.json();
	if (response.ok) {
		return body;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		if (body) {
			throw body;
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			throw new Error("Erreur lors de l'identification");
		}
	}
}

//la fonction permet de récupérer l'utilisateur connecté
export async function getCurrentUser() {
	const response = await fetch(`${API_AUTH}/current`);
	return response.json();
}

//fonction permet la deconnexion
export async function signout() {
	const response = await fetch(API_AUTH, {
		method: "DELETE",
	});
}

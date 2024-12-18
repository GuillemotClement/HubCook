export async function signin(credentials) {
	const response = await fetch("/api/auth", {
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

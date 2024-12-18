import { getCurrentUser } from "../apis/auth";

// on vient récupérer l'utilsiateur connecté
export async function rootLoader() {
	return getCurrentUser();
}

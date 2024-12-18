import { useLoaderData } from "react-router";
import { AuthContext } from "../context";
import { useState } from "react";
import { signin as login } from "../apis/auth";

export default function AuthProvider({ children }) {
	const initialUser = useLoaderData();
	const [user, setUser] = useState(initialUser);

	async function signin(credentials) {
		const newUser = await login(credentials);
		setUser(newUser);
	}
	// async function logout() {}

	console.log(initialUser);
	return (
		<AuthContext.Provider value={{ user, signin }}>
			{children}
		</AuthContext.Provider>
	);
}

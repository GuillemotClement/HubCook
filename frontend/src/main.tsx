import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout.tsx";
import Homepage from "./pages/Homepage.tsx";
import Recipes from "./pages/recipes/Recipes.tsx";
import RegisterForm from "./pages/authentication/RegisterForm.tsx";
import LoginForm from "./pages/authentication/LoginForm.tsx";
import { rootLoader } from "./loaders/rootLoader.ts";
import ProfillIdex from "./pages/profil/ProfillIdex.tsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <RootLayout />,
// 		loader: rootLoader, // Ajout du loader ici
// 		children: [
// 			{ index: true, element: <Homepage /> },
// 			{ path: "recipes", element: <Recipes /> },
// 			{ path: "register", element: <RegisterForm /> },
// 			{ path: "login", element: <LoginForm /> },
// 		],
// 	},
// ]);

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter basename="/HubCook">
			<Routes>
				<Route path="/" element={<RootLayout />} loader={rootLoader}>
					<Route index element={<Homepage />} />
					<Route path="recipes" element={<Recipes />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="profil" element={<ProfillIdex />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);

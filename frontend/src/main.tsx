import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout.tsx";
import Homepage from "./pages/Homepage.tsx";
import Recipes from "./pages/recipes/Recipes.tsx";
import RegisterForm from "./pages/authentication/RegisterForm.tsx";
import LoginForm from "./pages/authentication/LoginForm.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter basename="/HubCook">
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Homepage />} />
					<Route path="recipes" element={<Recipes />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="login" element={<LoginForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);

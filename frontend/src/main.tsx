import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/templates/RootLayout";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import RecipeListPage from "./components/pages/recipes/RecipeListPage";
import LoginPage from "./components/pages/auth/LoginPage";
import RegisterPage from "./components/pages/auth/RegisterPage";
import MenuPage from "./components/pages/menu/MenuPage";
import ProfilPage from "./components/pages/profil/ProfilPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/recipes",
        element: <RecipeListPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/profil",
        element: <ProfilPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

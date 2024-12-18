import { NavLink, useRouteError } from "react-router-dom";

interface RouteError {
  status: number;
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-3">Oops!</h1>
      <p>Cette page n'existe pas !</p>
      <p className="text-red-500 italic my-4">
        <i>
          {error.status} : {error.statusText}
        </i>
      </p>
      <NavLink
        to="/"
        className="bg-blue-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-blue-700 shadow-xl"
      >
        Retour
      </NavLink>
    </div>
  );
}

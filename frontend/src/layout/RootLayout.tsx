import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
	// const user = useLoaderData();
	// console.log(user);
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<div className="flex-1 border-b py-8">
				<div className="container mx-auto">
					<Outlet />
				</div>
			</div>
			<Footer />
		</main>
	);
}

import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";

export default function RootLayout() {
	return (
		<main className="min-h-screen flex flex-col">
			<AuthProvider>
				<Header />
				<div className="flex-1 border-b py-8">
					<div className="container mx-auto">
						<Outlet />
					</div>
				</div>
				<Footer />
			</AuthProvider>
		</main>
	);
}

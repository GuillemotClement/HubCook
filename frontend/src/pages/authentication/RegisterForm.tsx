export default function RegisterForm() {
	return (
		<div className="">
			<form action="">
				<h2 className="text-center text-xl font-semibold">Inscription</h2>
				<div className="flex flex-col my-5">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="border rounded-md shadow py-1 px-2"
						id="username"
					/>
				</div>
				<div className="flex flex-col my-5">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="border rounded-md shadow py-1 px-2"
						id="email"
					/>
				</div>
				<div className="flex flex-col my-5">
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						className="border rounded-md shadow py-1 px-2"
						id="password"
					/>
				</div>
				<div className="flex justify-center">
					<button
						className="py-2 px-3 bg-blue-500 text-white hover:bg-blue-700 shadow-md rounded-md"
						type="button"
					>
						Inscription
					</button>
				</div>
			</form>
		</div>
	);
}

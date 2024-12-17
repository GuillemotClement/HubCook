export default function RegisterForm() {
	return (
		<div className="">
			<form action="">
				<div className="flex flex-col">
					<label htmlFor="">Username</label>
					<input type="text" className="border" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Mot de passe</label>
					<input type="text" className="border" />
				</div>
				<div className="">
					<button className="py-2 px-3 bg-blue-500 text-white hover:bg-blue-700 shadow-md rounded-md">
						Enregistrer
					</button>
				</div>
			</form>
		</div>
	);
}

export default function Header() {
	return (
		<header className="flex justify-between py-3 px-8 shadow-md items-center">
			<div className="">
				<i className="fa-solid fa-kitchen-set text-3xl mr-2" />
				<span className="text-2xl font-bold">HubCook</span>
			</div>
			<ul className="flex gap-x-3">
				<li>
					<a href="">Accueil</a>
				</li>
				<li>
					<a href="">Recettes</a>
				</li>
			</ul>
			<ul className="flex gap-x-3">
				<li>
					<a href="">Connexion</a>
				</li>
				<li>
					<a href="">Inscription</a>
				</li>
				<li>
					<a href="">Profil</a>
				</li>
				<li>
					<a href="">Deconnexion</a>
				</li>
			</ul>
		</header>
	);
}

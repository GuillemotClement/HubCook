import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterForm() {
	//mise en place de la validation
	const validationSchema = yup.object({
		username: yup
			.string()
			.required("Saisir un pseudo")
			.min(2, "L'username est trop court"),
		email: yup.string().email("Email invalide"),
		password: yup
			.string()
			.required("Saisir un mot de passe")
			.min(8, "Le mot de passe doit faire au moins 8 caractères"),
	});

	//définition des valeurs par défaut
	const defaultValues = {
		username: "",
		email: "",
		password: "",
	};

	//récupération des méthode du hook form
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	});

	//préparation de la fonction de submit()
	const submit = handleSubmit((credentials) => {
		console.log(credentials);
	});

	return (
		<div className="">
			{/* on vient connecter le formulaire au hook */}
			<form action="" onSubmit={submit}>
				<h2 className="text-center text-xl font-semibold">Inscription</h2>
				<div className="flex flex-col my-5">
					<label htmlFor="username">Pseudo</label>
					<input
						type="text"
						className="border rounded-md shadow py-1 px-2"
						id="username"
						// enregistrement de l'input
						{...register("username")}
					/>
					{/* Affichage de l'erreur si la validation ne passe pas */}
					{errors.username && (
						<p className="text-red-500 font-bold">{errors.username.message}</p>
					)}
				</div>
				<div className="flex flex-col my-5">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="border rounded-md shadow py-1 px-2"
						id="email"
						{...register("email")}
					/>
					{errors.email && (
						<p className="text-red-500 font-bold">{errors.email.message}</p>
					)}
				</div>
				<div className="flex flex-col my-5">
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						className="border rounded-md shadow py-1 px-2"
						id="password"
						{...register("password")}
					/>
					{errors.password && (
						<p className="text-red-500 font-bold">{errors.password.message}</p>
					)}
				</div>
				<div className="flex justify-center">
					<button
						className="py-2 px-3 bg-blue-500 text-white hover:bg-blue-700 shadow-md rounded-md"
						type="submit"
					>
						Inscription
					</button>
				</div>
			</form>
		</div>
	);
}

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signin } from "../../apis/auth";

export default function LoginForm() {
	const validationSchema = yup.object({
		email: yup
			.string()
			.email("Email invalide")
			.required("Un email est obligatoire"),
		password: yup
			.string()
			.required("Saisir un mot de passe")
			.min(8, "Le mot de passe doit faire au moins 8 caractères"),
	});

	const defaultValues = {
		email: "",
		password: "",
	};

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	});

	//on utilise une fonction asynchrone
	const submit = handleSubmit(async (credentials) => {
		try {
			clearErrors();
			const user = await signin(credentials);
			console.log(user);
		} catch (message) {
			//on viens préciser le type d'erreur que l'on récupère
			// setError("generic", { type: "generic", message });
		}
	});

	return (
		<div className="">
			{/* on vient connecter le formulaire au hook */}
			<form action="" onSubmit={submit}>
				<h2 className="text-center text-xl font-semibold">Connexion</h2>
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
				{/* Affichage d'une erreur provenant du backe end */}
				{/* {errors.generic && (
					<p className="text-red-500 font-bold">{errors.generic.message}</p>
				)} */}
				<div className="flex justify-center">
					<button
						className="py-2 px-3 bg-blue-500 text-white hover:bg-blue-700 shadow-md rounded-md"
						type="submit"
						// on vient empêcher la double soumission
						disabled={isSubmitting}
					>
						Connexion
					</button>
				</div>
			</form>
		</div>
	);
}

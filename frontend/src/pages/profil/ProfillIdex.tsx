import { useContext } from "react";
import { AuthContext } from "../../context";

export default function ProfillIdex() {
	const { user } = useContext(AuthContext);
	return (
		<div className="">
			<ul>
				<li>Nom : {user.username}</li>
				<li>Email : {user.email}</li>
				<li>Password : </li>
			</ul>
		</div>
	);
}

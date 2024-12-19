import Image from "next/image";
import NavMenu from "@/components/header/NavMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-8 shadow-md">
      <div className="flex gap-x-3 items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40}/>
        <p className="text-xl font-bold">HubCook</p>
      </div>
      <nav>
        <NavMenu/>
      </nav>
      <ul className="flex gap-x-3">
        <li><a href="">Connexion</a></li>
        <li><a href="">Inscription</a></li>
        <li><a href="">Profil</a></li>
        <li><a href="">Déconnexion</a></li>
      </ul>
    </header>
  );
}
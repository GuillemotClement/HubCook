import Link from "next/link";

export default function NavMenu() {
  return (
    <ul className="flex gap-x-3">
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/recipe">Recette</Link></li>
      <li><Link href="/menu">Menu</Link></li>
    </ul>
  );
}
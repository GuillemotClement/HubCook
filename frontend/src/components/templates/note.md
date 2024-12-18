# Templates

Structure gloabales réutilisable (squelette de page) -> disposition de menu, footer et content

Un Template est une structure générique ou un cadre qui définit la disposition globale d'une page ou d'une section de ton application. Il ne contient pas de contenu spécifique, mais sert de "squelette" pour organiser les composants.

**Rôles des Templates** :
- Fournir une disposition cohérente pour plusieurs Pages.
- Structurer les Organisms et autres composants dans une vue globale.
- Rester indépendant des données ou du contenu spécifique.

## Convention de nommage

**Convention** : Nommer les Templates selon leur rôle ou structure globale
Un Template définit une disposition (layout) pour plusieurs Pages.
Nom : PascalCase (comme pour les Pages, première lettre de chaque mot en majuscule).

Exemples :

-------------------------
| Rôle |	Nom du Template |

Disposition standard |	RootLayout.tsx

Disposition pour les pages privées | AuthLayout.tsx

Disposition avec barre latérale |	SidebarLayout.tsx


Règles de base pour nommer les Templates :
Ajouter le suffixe Layout :

Cela permet de clarifier que ce composant est un Template et non une Page.
Ex : RootLayout au lieu de simplement Default.
Nommer selon leur rôle ou contexte :

Si le Template est spécifique à un type de Page, reflète cette relation dans le nom.
Exemples :
Un Template pour les pages publiques : PublicLayout.
Un Template pour les pages d’administration : AdminLayout.
Garder les Templates génériques :

Évite de mentionner des noms de Pages spécifiques dans les noms des Templates, car les Templates doivent rester réutilisables.
Exemple : Utilise AuthLayout au lieu de LoginLayout.

3. Comparaison entre Pages et Templates
   Voici un tableau qui résume comment nommer et organiser Pages et Templates :

Aspect	Page	Template
Suffixe	Page	Layout
Exemple	ProfilePage.tsx	RootLayout.tsx
Organisation	Basé sur les routes	Basé sur les structures globales
Usage	Représente une vue ou route	Définit une disposition ou structure
Spécificité	Spécifique à une route	Réutilisable pour plusieurs Pages

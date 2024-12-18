# Pages

Page complètes basées sur les templates (HomePage)

Une Page est une implémentation spécifique d'un Template. Elle contient le contenu ou les données propres à une route ou une vue particulière.

Rôles des Pages :
- Ajouter le contenu spécifique à une vue ou une route.
- Connecter les Templates avec les données dynamiques via des requêtes ou des props.
- Utiliser des Templates pour rester cohérent dans la disposition.

## Nommage

**Convention** : Nommer les Pages par rapport aux routes

Une Page représente une vue spécifique d'une application (ex : /home, /profile, /login).

Nom : PascalCase (première lettre de chaque mot en majuscule).
Exemples :

Cela permet de distinguer rapidement une Page des autres composants (Atoms, Molecules, etc.).
Ex : HomePage et non simplement Home.

Réfléchir en termes de routes :

Le nom d’une Page doit correspondre à la route qu’elle représente.
Exemple : pour une route /settings/account, nomme la Page AccountSettingsPage.
Cas des sous-pages :

Si une page appartient à une catégorie ou section (ex : paramètres utilisateur), utilise une structure hiérarchique.
Exemple :

src/
└── pages/
  ├── Settings/
  │   ├── AccountSettingsPage.tsx
  │   ├── SecuritySettingsPage.tsx
  │   └── GeneralSettingsPage.tsx
  └── ProfilePage.tsx

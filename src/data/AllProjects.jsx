const projects = [
  {
    id: 1,
    name: "EBooks",
    url: "ebooks",
    presentation: "Site de gestion de contenus de livres de seconde mains",
    technology: ["Node JS", "React JS"],
    repositoryBack: "https://github.com/YassinL/eBooks_project",
    repositoryFront: "https://github.com/YassinL/eBooks-frontend",
    link: null,
    description: `Mon projet est un site dont le but principal est de trouver et d’acheter des livres d’occasion.
    Ce sera une interface utilisateur de gestion de contenus, et de e-commerce par la suite.
    La démarche de ce projet est de mettre en place une recherche et une sélection des livres
    accessibles : autant pour l’administrateur avec une base de données correctement
    organisée, que pour l’utilisateur avec une catégorisation des contenus intuitive et pratique.
    Ce projet vise à correspondre à un maximum de types d’utilisateurs, et est donc accessible
    sur plusieurs supports (mobile, tablette, et ​ desktop ​ ). Par ailleurs, comme le recommandent
    les normes de référencement de Google, je l’ai développé en format ​ mobile first ​ .`,
    type: "Application web",
    date: "Novembre 2020",
    poster: "EBooks/mockups_ebooks_accueil2.jpg",
    illustrations: [],
  },
  {
    id: 2,
    name: "Airbnb Like",
    url: "airbnb-like",
    presentation: "Copie de certaines fonctionnalités du site Airbnb",
    technology: [
      "Node JS",
      "React JS",
      "Sequelize",
      "SASS",
      "Express",
      "Eslint",
    ],
    repositoryBack: "https://github.com/YassinL/airbnb-clone-api",
    repositoryFront: "https://github.com/YassinL/airbnb-frontend",
    link: null,
    description: `L’objectif de ce projet
    était de reproduire une copie du site Airbnb en commençant par les fonctionnalités de base, c'est à dire de pouvoir s'inscire, se connecter, rechercher un appartement, et créer une annonce d'hébergement.`,
    type: "Application web",
    date: "Septembre 2020",
    poster: "Netflix/mockupsnetflix.png",
    illustrations: [],
  },
  {
    id: 3,
    name: "Twitter Like",
    url: "Twitter-like",
    presentation: "Copie de certaines fonctionnalités du site Twitter",
    technology: ["Node JS", "MYSQL", "SASS"],
    repository: "https://github.com/YassinL/Twitter_def",
    link: null,
    description: `L'objectif de ce projet était de
    développer un produit fonctionnellement similaire à
    Twitter et de réaliser un ​CRUD complet avec NodeJS , ​
    ExpressJS ​et ​MySQL . ​ Nous avons réalisé en groupe
    différentes fonctionnalités comme la création d’un
    compte utilisateur, d’un système de connexion et de
    déconnexion, la création et suppression de tweets et
    la modification d’un profil utilisateur.`,
    type: "Application web",
    date: "Aout 2020",
    poster: "Netflix/mockupsnetflix.png",
    illustrations: [],
  },
];

export default projects;

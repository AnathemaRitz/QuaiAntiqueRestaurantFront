import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html",[], "js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["admin","client"]),
    new Route("/editPassword", "Modifier votre mot de passe", ["admin","client"], "/pages/auth/editPassword.html"),
    new Route("/allResa", "Gérez vos reservations","/pages/reservations/allResa.html", ["client"] ),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"] )
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

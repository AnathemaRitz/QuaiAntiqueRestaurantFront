export default class Route {
    constructor(url, title, pathHtml,authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}
/*
[] -> tout le monde peut y accéder
["disconnected"] -> Réservé aux utilisateurs déconnectés
["admin"] -> Réservé aux utilisateurs avec le rôle admin
["client"] -> Réservé aux utilisateurs avec le rôle client
["admin","client"] -> Réservé aux utilisateurs avec le rôle amdin OU  client


*/
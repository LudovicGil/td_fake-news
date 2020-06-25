const menuIcons = document.querySelector(".menuIcons");
const line = document.querySelectorAll('.no-active');
const menu = document.querySelector(".menu");
/*
Ecoute sur le bouton pour ajouter la classe "active"
et retirer la classe "no-active" qui empeche l'activation
de l'animation au chargement de la page
*/
menuIcons.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    for (const element of line) {
        element.classList.remove('no-active');
    }
});
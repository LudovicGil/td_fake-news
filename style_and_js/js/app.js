const menuIcons = document.querySelector(".menuIcons");
const line = document.querySelectorAll(".no-active");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const btnWrapper = document.querySelector(".mainWrapper");

const btn = document.getElementById("#bla");
/*EVENT MENU*/
/*
Ecoute sur le bouton pour ajouter la classe "active"
et retirer la classe "no-active" qui empeche l'activation
de l'animation au chargement de la page
*/
menuIcons.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
  btnWrapper.classList.toggle("menu-actived");
  body.classList.toggle("menu-actived");

  for (const element of line) {
    element.classList.remove("no-active");
  }
});

/* * Verification du formulaire *  */

const layer = document.querySelector("#layer");
const email = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");
const name = document.querySelector("#lastName");
const textarea = document.querySelector("#textarea");
const p = document.createElement("p");
const errorName = document.querySelector("#errorName");
const errorMail = document.querySelector("#errorMail");
const errorText = document.querySelector("#errorText");

const emailRegex = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const nameRegex = /^[A-Za-z\\é\\è\\ê\-]+$/;

let successName,
  successMail,
  successText,
  success = false;
btnSubmit.addEventListener("click", function () {
  if (!success) {
    if (name.value === "" || !nameRegex.test(name.value)) {
      errorName.innerHTML = "Les lettres anonymes, c'est mal !";
      errorName.style.color = "red";
      name.value = "";
    } else {
      errorName.innerHTML = "";
      successName = true;
      // console.log("name");
    }
    if (email.value === "" || !emailRegex.test(email.value)) {
      errorMail.innerHTML = "Et comment on fait pour vous spammer ?";
      errorMail.style.color = "red";
      email.value = "";
    } else {
      errorMail.innerHTML = "";
      successMail = true;
      // console.log("mail");
    }
    if (textarea.value === "") {
      errorText.innerHTML =
        "Non mais allô quoi, tu nous écris et tu nous écris rien ?";
      errorText.style.color = "red";
      textarea.value = "";
    } else {
      errorText.innerHTML = "";
      successText = true;
      // console.log("text");
    }
    // console.log(successName);
    // console.log(successMail);
    // console.log(successText);
  }
  if (successName && successMail && successText) {
    layer.classList.remove("modal-hidden");
  }
});

/* Fermeture de la modal */
const btnModal = document.querySelector("#btnModal");

name.addEventListener("focus", function () {
  !successName ? (errorName.innerHTML = "") : "";
});
email.addEventListener("focus", function () {
  !successMail ? (errorMail.innerHTML = "") : "";
});
textarea.addEventListener("focus", function () {
  !successText ? (errorText.innerHTML = "") : "";
});

btnModal.addEventListener("click", function () {
  layer.classList.add("modal-hidden");
});

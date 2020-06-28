const menuIcons = document.querySelector(".menuIcons");
const line = document.querySelectorAll(".no-active");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const btnWrapper = document.querySelector(".mainWrapper");
const layer = document.querySelector("#layer");

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

btnSubmit.addEventListener("click", function () {
  let successName = false;
  let successMail = false;
  let successText = false;
  let success = false;
  let message;
  if (!success) {
    if (name.value === "" || !nameRegex.test(name.value)) {
      message = "Les lettres anonymes, c'est mal !";
      errorName.innerHTML = message;
      errorName.style.color = "red";
    } else {
      errorName.innerHTML = "";
      successName = true;
      console.log("name");
    }
    if (email.value === "" || !emailRegex.test(email.value)) {
      message = "Et comment on fait pour vous spammer ?";
      errorMail.innerHTML = message;
      errorMail.style.color = "red";
    } else {
      errorMail.innerHTML = "";
      successMail = true;
      console.log("mail");
    }
    if (textarea.value === "") {
      message = "Non mais allô quoi, tu nous écris et tu nous écris rien ?";
      errorText.innerHTML = message;
      errorText.style.color = "red";
    } else {
      errorText.innerHTML = "";
      successText = true;
      console.log("text");
    }
    console.log(successName);
    console.log(successMail);
    console.log(successText);
  }
  if (successName && successMail && successText) {
    layer.classList.remove("modal-hidden");
    textarea.value = "";
    email.value = "";
    name.value = "";
  }
});

const btnModal = document.querySelector("#btnModal");

btnModal.addEventListener("click", function () {
  layer.classList.add("modal-hidden");
});

// DOM Elements
const modalbg = document.querySelector(".bground");// constante permettant de gérer le bground
const modalBtn = document.querySelectorAll(".modal-btn");// constante permettant au clic sur le btn de faire apparaître le formulaire
const formData = document.querySelectorAll(".formData");// récupération du formulaire -> FormData permet de créer un ensemble de paires clef-valeur (très utilisé dans les formulaires)
const closeModalBtn = document.querySelector(".close") // récupération du bouton croix fermer le formulaire
const confirmationCloseBtn = document.querySelector("#btn-closed"); // récupération bouton "fermer" aprés le message de remerciement
const menuResponsive = document.querySelector("#myTopnav .icon") // récupération de l'icon navbar Mobile(myTopnav)
const topNav = document.querySelector("#myTopnav")// récupération de la navbar Desktop (myTopnav)


// ------ element correspondant au bouton --------
const formValid = document.querySelector(".btn-submit");// récupération du bouton "Validation du formulaire"

// ------- element de Validation ----------
const firstName = document.querySelector("#first"); // récupération dans le formulaire Id "first"
const lastName = document.querySelector("#last"); // récupération dans le formulaire Id "last"
const eMail = document.querySelector("#email");// récupération dans le formulaire Id "email"
const birthDate = document.querySelector("#birthdate");// récupération dans le formulaire Id "birthdate"
const eventParticipation = document.querySelector("#quantity");// récupération dans le formulaire Id "quantity"
const eventCity = document.querySelectorAll('.checkbox-input[name="location"]');// récupération dans le formulaire la classe "Checkbox" = localisation /
const cgu = document.querySelector("#checkbox1");// récupération dans le formulaire la classe "Checkbox" = condition obligatoire

// ------- element lors d'une erreur ----------
const errorFirstName = document.querySelector("#missfirst");// récupération dans le formulaire Id "missfirst"=manque le prénom
const errorLastName = document.querySelector("#misslast");// récupération dans le formulaire Id "misslast"=manque le nom
const errorMail = document.querySelector("#missemail");// récupération dans le formulaire Id "missemail"=manque l'e-mail
const errorBirthDate = document.querySelector("#missbirthdate");// récupération dans le formulaire Id "missbirthdate"=manque la date d'anniversaire
const errorEventParticipation = document.querySelector("#missquantity");// récupération dans le formulaire Id "missquantity"= manque le quantité
const errorEventCity = document.querySelector("#misslocalisation");// récupération dans le formulaire Id "misslocalisation"=manque la localisation
const errorCgu = document.querySelector("#misscheckbox1");// récupération dans le formulaire Id "misscheckbox1"=manque la case condition
const numbersValue = /[0-9]/;

const confirmationValidation = document.querySelector("#confirm-modal");// récupération dans le formulaire Id "quantity"

// ------------ element pour l'envoi du formulaire ------------------------
const form = document.querySelector('form')

// --------- gestion du menu hambuger  ------------
menuResponsive.addEventListener('click', editNav); // récupération  onClick= editNav

function editNav(event) { 
    event.preventDefault();
    if (topNav.className === "topnav") { // element.className nous pemret de modifié la valeur de l'attribut class
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

// ---------- Launch Modal Form ---------
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  confirmationValidation.style.display = 'none';
}

// ---- Close Modal Form ---------

closeModalBtn.addEventListener("click", closeModal);
console.log(closeModalBtn.length)

function closeModal() {
  modalbg.style.display = 'none';
}

// ------------ Envoi du formulaire d'inscription ------------------
const tableauValidation = '';

function validate(e) {
  e.preventDefault()
  validateFirstName()
  validateLastName()
  validateEmail()
  validateBirthdate()
  validateEventParticipation()
  validateEventCity()
  validateCgu()
  console.log (tableauValidation)
  }

// ------------------- validation du formulaire lors de l'input -----------

function validateFirstName() {
  console.log(firstName.value.trim.length)
  if (firstName.value.trim().length<2) { /* Changer les valeur en string et enlever les espace AV/AR  first superieur a deux */ 
      errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
      firstName.style.border = 'solid red 2px';
      return false;
  } else {
      errorFirstName.innerText = "";
      firstName.style.border = 'solid #279e7a 3px';
      return true; 
  };
}

function validateLastName() {
  if (lastName.value.toString().trim().length< 2) {
      errorLastName.style.display = 'inline';
      errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
      lastName.style.border = 'solid red 2px';
      return false;
  } else {
      errorLastName.style.display = 'none';
      lastName.style.border = 'solid #279e7a 3px';
      return true;
  }
}
function validateEmail() {
  
  
  if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value))  {       
    eMail.placeholder = "Your email"
      errorMail.style.display = "inline"
      errorMail.innerText = "Veuillez entrer une adresse mail valide.";
      eMail.style.border = 'solid red 2px';
      return false;
  } else {
      errorMail.style.display = 'none';
      eMail.style.border = 'solid #279e7a 3px';
      return true;
  }
}
function validateBirthdate() {
  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
      errorBirthDate.style.display = "inline";
      errorBirthDate.innerText = "Veuillez indiquer votre date de naissance.";
      birthDate.style.border = 'solid red 2px';
      return false;
  } else {
      errorBirthDate.style.display = 'none';
      birthDate.style.border = 'solid #279e7a 3px';
      return true;
  };
}

function validateEventParticipation() {
  if (!eventParticipation.value.match(numbersValue)) {
      errorEventParticipation.style.display = "inline";
      errorEventParticipation.innerText = "Veuillez indiquer un nombre de participation à nos tournois."
      eventParticipation.style.border = 'solid red 2px';
      return false;
  } else {
      errorEventParticipation.style.display = 'none';
      eventParticipation.style.border = 'solid #279e7a 3px';
      return true;
  };
}
function validateEventCity(eventCity) {
    let eventCityChecked = false;
  eventCity.forEach(city => {
    if (city.checked)
    {eventCityChecked = true}
  })
    
    if (eventCityChecked) {
          errorEventCity.style.display = "inline";
          errorEventCity.innerText = "Veuillez choisir une ou plusieurs ville(s).";
          return false;
      } else {
          errorEventCity.style.display = 'none';
          return true;
      };
  }
  
function validateCgu(cgu) {
  if (cgu.checked == false) { 
      errorCgu.style.display = "inline";
      errorCgu.innerText = "Vous devez accepter les termes et conditions.";
      return false;
  } else {
      errorCgu.style.display = 'none';
      return true;
  }; 
}
// -------------------- Ancienne version Validation du formulaire ----------------------
/*
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/
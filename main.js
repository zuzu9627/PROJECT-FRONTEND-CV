"USE STRICT";

// --------------------------------------DINAMIC MODIFYING THE DOM-------------------------------------
// ASSIGN ATTRIBUTES
const $downloadCV = document.querySelector("#btnCV a");
$downloadCV.href = "./assets/DOCS/CV_ZULEMA_ORELLANA.pdf";
$downloadCV.download = "CV_ZULEMAORELLANA.pdf";

const contactText = $("<p>").addClass("contactText").html("Don't hesitate to contact me and let's talk about how we can work together, I'm ready to face any challenge with a smile and a lot of enthusiasm!<br> Let's rock! 😄");
$("#contactT").append(contactText);
const softskillsText = $("<p>").addClass("softskillsText").html("Soft skills are the secret sauce that transforms ordinary individuals into extraordinary professionals,let's see mine:");
$("#softskillsText").append(softskillsText);
const hardskillsText = $("<p>").addClass("hardskillsText").html("What I learnt and what I offer:");
$("#hardskillsText").append(hardskillsText);
const experienceText = $("<p>").addClass("experienceText").html("Experience is the culmination of our journey through the knowledge and practice,here's mine:");
$("#experienceText").append(experienceText);

let textAbout =
  "I'm Zulema a passionate and multifaceted programmer. In addition to being tech-savvy, I'm also interested in art and design. I' a'm a keen traveler who loves exploring new places and cultures, and in my free time, I also like to write. I'm a firm believer that continuous learning is the key to success, and my infinite curiosity added to my training as an urban architect has led me to explore different areas, from art to programming where I found my true passion. I love being able to apply my skills in both areas to create innovative and effective solutions to seemingly impossible problems! 👩🏻‍💻+🏙️ =💯 if you're looking for someone with passion, dedication, and skills in programming, design, and urbanism, here I am!";
document.getElementById("pAbout").innerHTML = textAbout;

// --------------------------------------ANIMACION FADE IN-FADE OUT ALL THE PAGE-------------------------------------
window.addEventListener("scroll", () => {
  let reveal = document.querySelectorAll('.reveal');
  reveal.forEach((element) => {
    let viewElement = element.getBoundingClientRect().top - window.innerHeight + 20;
    (viewElement < 0) ? element.classList.add("active"): element.classList.remove("active");
  });

});

// --------------------------------------SCROLL UP-------------------------------------

$(document).ready(function () {
  // Add click event listener to scroll-to-top button
  $("#scroll-to-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "medium");
  });
  // Show/hide scroll-to-top button based on scroll position
  $(window).scroll(function () {
    ($(this).scrollTop() > 200) ? $("#scroll-to-top").fadeIn(): $("#scroll-to-top").fadeOut();
  });
  $("#scroll-to-top").hide();
});
// --------------------------------------DARK MODE-LIGHT MODE-------------------------------------

function checkTime() {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 20 || hour < 6) {
    // Change the number 20 to 8 to set the mode change at 8 PM
    setDarkMode();
  }
}

function toggleTheme() {
  let body = document.body;
  if (body.classList.contains("dark-theme")) {
    setLightMode();
    localStorage.setItem('dark-theme', 'false');
  } else {
    setDarkMode();
    localStorage.setItem('dark-theme', 'true');
  }
}

function setDarkMode() {
  let body = document.body,
    themeIcon = document.getElementById("themeIcon");
  body.classList.add("dark-theme");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

function setLightMode() {
  let body = document.body,
    themeIcon = document.getElementById("themeIcon");
  body.classList.remove("dark-theme");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

// Check local storage to set the initial theme
if (localStorage.getItem('dark-theme') === 'true') {
  setDarkMode();
} else {
  setLightMode();
}


// --------------------------------------VALIDATE FORM-------------------------------------
let nameError = document.getElementById("name-error"),
  emailError = document.getElementById("email-error"),
  messageError = document.getElementById("message-error"),
  submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById('name-form').value,
    nameError = document.getElementById('name-error'),
    patternName = /^[a-zA-Z\s]+$/;

  if (name.length < 2) {
    nameError.innerHTML = '<i class="fa-solid fa-xmark red"></i>';
    return false;
  }
  if (!patternName.test(name)) {
    nameError.innerHTML = '<i class="fa-solid fa-xmark red"></i>';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check green"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('email-form').value,
    patternEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (email.length == 0) {
    emailError.innerHTML = '<i class="fa-solid fa-xmark red"></i>';
    return false;
  }
  if (!patternEmail.test(email)) {
    emailError.innerHTML = '<i class="fa-solid fa-xmark red"></i>';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check green"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById('message-form').value;
  if (message.length < 5) {
    let missingCharacters = 5 - message.length;
    messageError.innerHTML = `<p class="red">Type ${missingCharacters} characters at least</p>`;
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-check green"></i>';
  return true;
}


function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Fix errors';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}

// --------------------------------------ACCORDION SKILLS -------------------------------------

const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open"
  }
}
skillsHeader.forEach((element) => {
  element.addEventListener('click', toggleSkills);
})
// --------------------------------------EASTER EGG-------------------------------------
document.getElementById("easter-egg").addEventListener("click", function () {
  // CALL POKEMON API
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(data => {
      // OBTEIN A RANDOM POKEMON
      var randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];

      // CREATE AN ELEMENT <P> AND AN ELEMENT <IMG>
      var paragraph = document.createElement("p");
      var image = document.createElement("img");

      // ESTABLISH ELEMENT <P> AND IMG SOURCE
      var nDied = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
      paragraph.textContent = "¡Eres responsable de la muerte de " + nDied + " " + randomPokemon.name.charAt(0)
        .toUpperCase() + randomPokemon.name.slice(1) + "!";
      image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (data.results
        .indexOf(randomPokemon) + 1) + ".png";

      // CREATE A NEW PAGE AND ADD THE RESULTS TO IT
      var newPage = window.open("", "_blank");
      newPage.document.body.appendChild(paragraph);
      newPage.document.body.appendChild(image);
    })
    .catch(error => console.error(error));

  // HIDE THE BUTTON 
  document.getElementById("easter-egg").style.display = "none";
});
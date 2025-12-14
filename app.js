const texte = "Bienvenue !";
const titre = document.getElementById("mots");
let i = 0;

// Curseur clignotant via CSS
titre.style.borderRight = "2px solid #36a7f3ff";
titre.style.paddingRight = "5px";

function typeWriter() {
  if (i < texte.length) {
    titre.textContent += texte.charAt(i);
    i++;
    setTimeout(typeWriter, 120); // vitesse d’écriture
  } else {
    setTimeout(() => {
      titre.textContent = "";
      i = 0;
      typeWriter();
    }, 1000); // pause avant de recommencer
  }
}

typeWriter();

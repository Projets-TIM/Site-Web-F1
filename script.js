// Récupération des éléments html par leur ID
let maDiv = document.getElementById("maDiv");
let sprite2 = document.getElementById("sprite2");

// Initialisation des variables pour l'animation
let i = 1;
let fps = 15;
let animationActive = false; // Indicateur pour savoir si l'animation est en cours

// Fonction pour afficher les images de l'animation
function afficher() {
    if (animationActive) {
        setTimeout(function () {
            if (i <= 30) {
                requestAnimationFrame(afficher);
                let adresse = "sprite2_" + i + ".png"; 
                sprite2.src = "images/Sprite2/" + adresse; // Mise à jour de la source de l'image
                i++;
            } else {
                // Reinitialisation de l'animation une fois toutes les images affichees
                i = 1;
                animationActive = false; // Arrêt de l'animation
            }
        }, 1000 / fps); // Vitesse de l'animation en fonction des fps
    }
}

// Ajout d'un événement au bouton pour démarrer l'animation
document.getElementById("boutonStart").addEventListener("click", function() {
    if (!animationActive) {
        animationActive = true; // Activation de l'animation
        afficher();
    }
});

// Deuxième animation avec des éléments différents
let maDiv2 = document.getElementById("maDiv2");
let sprite3 = document.getElementById("sprite3");
let adresse2 = sprite3.src;
let i2 = 1;

// Fonction pour afficher les images de la deuxième animation
setInterval(afficher2, 100);

function afficher2 () {
    adresse2 = "sprite3_" + i2 + ".png"; 
    sprite3.src = "images/Sprite3/" + adresse2; // Mise à jour de la source de l'image
    i2 = i2 + 1;
    if (i2 > 50) {
        i2 = 1; // Reinitialisation de l'animation une fois toutes les images affichees
    }
}


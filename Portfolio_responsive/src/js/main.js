//ouvrir Github

function gitHub() {
    window.open("https://github.com/idembele70/Projet_Terminer","_blank");
}

// slider Section MES TRAVAUX
let slide = new Array("src/assets/images/todoimg1.png","src/assets/images/todoimg2.png","src/assets/images/todoimg3.png");
let numero = 0;
function changerSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length -1) numero = 0;
  document.getElementById("sliderMainImg").src = slide[numero];
}
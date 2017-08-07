//var flechaIzq= document.getElementById('flechaIzq');
//var flechaDer= document.getElementById('flechaDer');


//esta mierda no va aqui, va  con onclick en el archivo testimonios.pug
//flechaIzq.addEventListener('click', plusSlides(-1));
//flechaDer.addEventListener('click', plusSlides(1));


let testimonios = document.getElementsByClassName("test__test");
let nombres     = document.getElementsByClassName("test__name");
let imagenes    = document.getElementsByClassName("test__img");

let slideIndex = 1;

showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  if (n > nombres.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = nombres.length}

  let i;
  for (i = 0; i < nombres.length; i++) {
      testimonios[i].style.display = "none";
      // nombres[i].style.display = "none"; 
      // imagenes[i].style.left="calc(100% - 100px)"; 
      // imagenes[i].style.display = "none"; 
  }

  testimonios[slideIndex-1].style.display = 'grid';
  // nombres[slideIndex-1].style.display = "inline-block"; 
  // imagenes[slideIndex-1].style.display = "inline-block"; 
}
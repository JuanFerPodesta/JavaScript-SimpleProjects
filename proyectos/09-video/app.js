// MDN - Vamos a usar Load event por esta diferencia que nos marca
/* The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without 
 waiting for stylesheets, images, and subframes to finish loading.*/
/* The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
cuando se carga la página de forma completa queremos esconder el preloader y mostrar el video */

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// la variable slide del css me va a permitir mover el boton de switch del video 
btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause(); // para pausar el video
    } else {
        btn.classList.remove("slide");
        video.play(); // para pausar el video
    }
});

// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList); -> me va a mostrar las clases que tienen los links
    // console.log(links.classList.contains("links")); me muestra T/F si esta o no la clase
    /* si esta show links se ven los links en la pantilla achicada, sino esta la clase showlinks
    no se ven, por eso quiero que cuando lo cliqueo me lo muestre y si cliqueo nuevamente me los
    oculte*/
    // manualmente:
    /*if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }*/
    // usando toggle:
    links.classList.toggle("show-links");
});


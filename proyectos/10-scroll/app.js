// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    /* linksContainer.classList.toggle("show-links"); -> esto no es dinamico xq mi show-links tiene un
    height definido de 200 y si le agrego o saco links va a quedar mal - abajo solución dinamica */
    /* vamos a usar Element.getBoundingClientRect() method returns the size of an element and its position
    relative to the viewport */
    const containerHeight = linksContainer.getBoundingClientRect().height; // es 0 por default setup
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height; // me lo calcula de acuerdo a los li que tenga
    // console.log(linksHeight);
    // si cliqueo y containerHeight es 0 quiero que sea el link hight asi me muestra las links
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;    
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// ********** fixed navbar ************
/* vamos a usar -> pageYOffset is a read - only window property that returns the number of pixels the document
has been scrolled vertically.*/ 
window.addEventListener("scroll", function() {
    // console.log(window.pageYOffset); // me imprime el movimiento del eje Y
    // si este valor es mas alto que el height de mi nav bar le voy a agregar una clase especifica a esa nav bar 
    /* esto hace que cuando scroleo para abajo la barra de arriba se ponga en fondo blanco fija */
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    // agrega el link de abajo para volver a subir
    if (scrollHeight > 500) { 
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        // slice extracts a section of a string without modifying original string
        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id);
        const element = document.getElementById(id);
        // offsetTop - A Number, representing the top position of the element, in pixels
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        // console.log(position);
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

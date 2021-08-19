// inicializamos el contador en 0
let count = 0;

// traemos los valores y los botones 
// # para traer id
// . para traer clase
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

/* forEach llama a una función para cada uno de los elementos del array */
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.classList); -> me imprime las clases de lo que cliqueo
        const styles = e.currentTarget.classList; // guardo en styles las clases del btn clickeado
        // voy a agregar una condición p/ que si contiene determinada clase pase algo
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        // le voy a cambiar el color de acuerdo al valor de count
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) { 
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        // le digo que el valor de vale sea count
        value.textContent = count;
    });

});
// console.log(btns);
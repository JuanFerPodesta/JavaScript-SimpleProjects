// array para color con 4 valores
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/* document.getElementById me trae el valor que tiene 
el elemento con ese ID */
const btn = document.getElementById('btn');

/* document.querySelector -> apunta a un selector css
en este caso ese selector es .color      
trae el primer selector encontrado con esa clase */
const color = document.querySelector('.color');

/* element.addEventListener(event, function)
event-> str especifica el nombre del evento
function -> especifica que pasa cuando ocurre el evento*/
btn.addEventListener('click', function() {
    /* nuestro objetivo es que tener un random number entre 0-3
    es entre 0 y 3 xq son los elementos dentro de nuestro array
    definido en nuestra 3da linea colors*/
    const randomNumber = getRandomNumber(); // ver la funcion abajo 

    /* le pido que le de un color al fondo del body con ese 
    random number dentro del array colors*/
    document.body.style.backgroundColor = colors[randomNumber];
    
    /* quiero elegir mi color, de acuerdo al background color
    de mi body. */
    color.textContent = colors[randomNumber] // me trae rgba(133,122,200)
});

// creo la función para obtener el random number

function getRandomNumber() {
    /* math.floor -> redondea al mas cercano
       math.random -> me trae un numero culca entre 0-1
       lo multiplico x el length de mi array para que me
       traiga algun numero cercano al indice del array */
    
    return Math.floor(Math.random() * colors.length);
}
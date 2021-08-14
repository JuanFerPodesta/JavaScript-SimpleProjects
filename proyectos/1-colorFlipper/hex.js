const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 
// lo que no tiene comentarios es porque es exactamente igual a app.js

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // para definir un hex siempre necesitamos #
    let hexColor = '#';
    
    // generaremos un loop para crear un hex color 
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}


// podremos resolverlo de dos formas:
// - using selectors inside the element
// - traversing the dom

// voy a necesitar:
// - question-btn (button) -> son 3 distintos quiero que cuando abro uno se cierre otro, como mucho 
//                            habra uno solo abierto
// - plus-icon (span)
// - minus-icon (span)
// - question-text (div-p)

// - traversing the dom -------------------------------------

// const btns = document.querySelectorAll(".question-btn");
// // para cada boton 
// btns.forEach(function (btn) {
//     // cuando haga click
//     btn.addEventListener("click", function (e) {
//         // con parentElement voy al elemento que contiene al elemento que apunta 
//         //console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         // le paso a esa question la clase show-text con toggle
//         question.classList.toggle("show-text");
//     });
// });

// - end of traversing the dom -----------------------------

// - using selectors inside the element --------------------

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    // console.log(question); -> me imprime cada una de las preguntas
    const btn = question.querySelector(".question-btn"); // trago cada uno de los btns corresp
    // console.log(btn);
    // voy a agregar un eventListener para cada uno de los botones
    btn.addEventListener("click", function () {
        // para cada pregunta comparo si la pregunta sobre la que toca es la misma, si no cierro 
        questions.forEach(function (item) {
            // console.log(question);
            // console.log(item);
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        // cuando toca el boton abre el texto de la pregunta    
        question.classList.toggle("show-text");
    });
});
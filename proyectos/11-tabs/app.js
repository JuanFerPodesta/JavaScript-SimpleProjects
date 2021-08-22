// quiero seleccionar el about
// todos los botones
// y todos los about content (son todos los articulos)

const btns = document.querySelectorAll(".tab-btn"); // me traigo todos los btns
const about = document.querySelector(".about"); // el articulo gral con la clase
const articles = document.querySelectorAll(".content"); // me traigo los articulos

// about es el parent container
// el identificador unico de los botones es el id que le configuramos al cual accedemos por medio de dataset
about.addEventListener("click", function (e) {
  // console.log(e.target); // me va a devolver la etiqueta html donde estoy clickeando
  // console.log(e.target.dataset.id);// le vamos a pedir el data id, si existe estoy clickeando sobre un btn
  // guardamos en variable id el id del boton que estoy tocando (si esta definido) y si es undefined no hago nada
  const id = e.target.dataset.id;
  if (id) {
    // sacamos la clase active de los otros botones
    btns.forEach(function (btn) {
      btn.classList.remove("active"); // le saco active a todos
      e.target.classList.add("active"); // se lo agrego al boton que toco
    });
    // ocultar todos los articulos sacando la clase active
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // agrego active para mostrarlo al elemento que toco
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

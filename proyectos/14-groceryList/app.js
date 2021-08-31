// ****** SELECT ITEMS **********
// me voy a traer todos los elementos que necesito
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems);
//load items -> para que cuando haga refresh me traiga todos los items que tenia la lista
window.addEventListener("DOMContentLoaded", setupItems);

// para los btns edit y delete tengo que tener un tratamiento especial xq están programados dinamicamente desde JS
// vamos a tener acceso recien dps de que los genero dinamicamente desde aca. Tmb podria acceder al elemento padre en
// Html y me lo deberia traer, en este caso las vamos a programar debajo de donde las creamos dinamicamente

// ****** FUNCTIONS ********** -> ponemos todas las callback functions aca
/* usamos el (e) xq cuando tenemos un submit form por defecto busca enviarlo a un servidor y qremos q se muestre abajo
lo ponemos para poder poner el preventDefault() */
function addItem(e) {
  e.preventDefault();
  // que le queremos agregar? el valor de grocery que lo trae del input
  // console.log(grocery.value); -> demuestra q lo q ponga en el input es lo que se envia
  const value = grocery.value;
  // esto q viene no se usa en projects serios pero es para no usar librerias, cada vez que hace submit da un nro distinto
  // xq es la fecha en milisegundos y la paso a string
  const id = new Date().getTime().toString();
  // condiciones
  if (value && !editFlag) {
    createListItem(id, value);
    // display alert
    displayAlert("item added to the list", "succes");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    // editElement funciona como una variable auxiliar
    editElement.innerHTML = value;
    displayAlert("value changed", "succes");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    diplayAlert("please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault(); // -> tiene sentido cuando agrega el edit
  localStorage.removeItem("list"); // cuando hago el clear list me borra todo del localStorage
}

// delete function
function deleteItem(e) {
  // quiero acceder al div donde esta el grocery item y borrarlo del grocery list
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling; // busco el title
  // set form value
  grocery.value = editElement.innerHTML; // en el campo donde ingresamos los items le pongo el valor del a editar
  editFlag = true;
  editID = element.dataset.id; // le doy el nuevo valor de ID
  submitBtn.textContent = "edit"; // le cambio el valor al boton
}
// set back to default -> limpia lo que escribimos
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  // shortcut si los args tienen el mismo nombre no es necesario poner lo mismo de los dos lados de los dos puntos
  const grocery = { id, value }; // = const grocery = {id:id, value:value};
  // console.log(grocery);
  // me fijo si hay algo ya guardado en localStorage, sino hay nada le pido que me genere un empty array
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// va a filtrar en la lista todos los items que tiene buscando el que quiero borrar, si no es el item que quiero borrar
// lo agrega a la lista, si es el item que quiero borrar no.
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  // usamos createElement para crear el article
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id -> viene del id creado arriba con la fecha en ms pasada a string
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr); // le asigno el atrr al article como un dataset
  element.innerHTML = `<p class="title">${value}</p>
                         <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                         </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  // append this item
  list.appendChild(element);
}

// LOCAL STORAGE -> COMO FUNCIONA
// en las herramientas de desarrollador en application tenemos el local storage
// localStorage API
// setItem
// getItem
// removeItem
// save as strings
// localStorage.setItem("orange", JSON.stringify(["item", "item2"])); // lo vemos en application
// const oranges = JSON.parse(localStorage.getItem("orange")); // para obtener el item que seteo arriba
// console.log(oranges); // lo imprimo para verlo
// localStorage.removeItem("orange"); // lo borra del local storage

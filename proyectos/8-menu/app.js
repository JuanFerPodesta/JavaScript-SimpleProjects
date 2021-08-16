// items precargardos, en una página estos items van a venir de una consulta a una bd
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// section center es en mi index donde están todos mis items
const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

/* me traigo todos lo botones de filtros -> no me sirve aca en esta parte del codigo 
para la version dinamica xq no tengo  ningun boton hardcodeado lo pego dps de que 
genero los botones de forma dinamica */
// const filterBtns = document.querySelectorAll(".filter-btn");
// console.log(filterBtns);

// DOMContentLoaded me ejecuta todo desde cargo la pagina - me trae todos los items
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu); // usa la funcion creada mas abajo
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  // map me puede servir para modificar ciertas cosas del array al que accedo
  let displayMenu = menuItems.map(function (item) {
    // para que ande se usa el (`) que esta arriba del tab 
    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
                </div>
          </article>`;
  });
  /* lo que me retorna map son muchos strs a ese str que le quiero hacer un join para que 
  me tire un unico y un largo str lo hago con join("") */
  displayMenu	= displayMenu.join("");
  // console.log(displayMenu);
  // con innerHTML le paso el str de displayMenu al parentElement sectionCenter y me tira la data
  sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {
   // Como tenemos una funcion para los items del menu vamos a tener una para los botones
  // usamos reduce para que si la categoria no se repita
  const categories = menu.reduce(function(values, item) {
    // si la categoria no esta la agrego
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },["all"]); // agrego all xq no está dentro de las categorias
  // console.log(categories);
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>` 
  }).join("");
  // console.log(categoryBtns);
  // con innerHTML le paso el str de categoryBtns al parentElement container y me tira la data
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
      // dataset me va a traer lo que haya definido en el html en cada uno de esos btns
      // defini un id para cada boton
      // console.log(e.currentTarget.dataset.id); -> me imprime por pantalla el id que le puse al html
      // ahora quiero guardar esta data en una vble para poder usarlas
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);  
      // como no tengo en menu una categoria all tengo que definir que pasa cuando toca all
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
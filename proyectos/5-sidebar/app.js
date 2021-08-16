/* quiero seleccionar de mi index:
- sidebar-toggle (button)
- sidebar (aside)
- close-btn (button) */

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

/* agrego un eventlistener a mi toggle button quiero ver si la sidebar
tiene la clase showsidebar, si la tiene la quiero sacar si no la agrego 
otro tambien para mi close button */

toggleBtn.addEventListener('click', function () {
    //console.log(sidebar.classList);-> me va a mostrar las clases que tiene mi sidebar
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})




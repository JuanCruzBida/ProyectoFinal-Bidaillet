/********************** Local Storage **********************/

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))
console.log(productosEnCarrito);

/********************** Selectores **********************/
const contenedorVacio = document.querySelector ("#contenedor-vacio");
const contendorComprado = document.querySelector("#contenedor-fin")
const contenedorItems = document.querySelector ("#contenedor-items");
const contenedorAcciones = document.querySelector ("#contenedor-acciones");
let btnsSacar = document.querySelector (".btns");
const btnVaciar = document.querySelector("#borrado");
const btnComprar = document.querySelector("#comprado");


/********************** Selectores **********************/

//Función mostrar items en el carrito
function mostrarItems(a) {

    if (a && a.length > 0) {
        contenedorVacio.classList.add("habilitado");
        contendorComprado.classList.add("habilitado");
        contenedorItems.classList.add("habilitado");
        contenedorAcciones.classList.remove("habilitado");

        contenedorItems.innerHTML = "";
        
        a.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
            <span>${producto.nombre}</span>
            <span>Cantidad: ${producto.cantidad}</span>
            <span>$${producto.precio}</span>
            <div class="btn-sacar">
            <button id="${producto.id}" class="btns"><i class="bi bi-trash3-fill"></i></button>
            </div>
            `;
            contenedorItems.appendChild(div);
        });
        
    } else {        
        contenedorVacio.classList.remove("habilitado");
        contendorComprado.classList.add("habilitado");
        contenedorItems.classList.remove("habilitado");
        contenedorAcciones.classList.add("habilitado");
    };
    botonesBorrar();
};    
mostrarItems(productosEnCarrito);

function botonesBorrar() {
    btnsSacar = document.querySelectorAll(".btns");

    btnsSacar.forEach (btn =>{
        btn.addEventListener("click", sacarProducto);                
    });
};

function sacarProducto (e) {
    const btnBorrar = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === btnBorrar);

    productosEnCarrito.splice(index, 1);    
    mostrarItems(productosEnCarrito);

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));  
};


btnVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    mostrarItems();
};

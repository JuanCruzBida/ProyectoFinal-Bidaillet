
/********************** Productos **********************/

//Función constructora

function Producto(id, nombre, img, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.categoria = categoria;
    this.precio = precio;
};
//Todos los productos

const todos = [
    /* Remeras */
    rBlanca = new Producto("Remera-01", "Remera blanca", "./img/remerablanca.webp", "Remeras", 3000),
    rNegra = new Producto("Remera-02", "Remera negra", "./img/remeranegra.webp", "Remeras", 3000),
    rGris = new Producto("Remera-03", "Remera gris", "./img/remeragris.webp", "Remeras", 3000),
    rBeige = new Producto("Remera-04", "Remera beige", "./img/remerabeige.webp", "Remeras", 3000),
    rTopo = new Producto("Remera-05", "Remera topo", "./img/remeratopo.webp", "Remeras", 3000),
    rPimienta = new Producto("Remera-06", "Remera pimienta", "./img/remerapimienta.webp", "Remeras", 3000),
    rVerde = new Producto("Remera-07", "Remera verde", "./img/remeraverde.webp", "Remeras", 3000),
    rNaranja = new Producto("Remera-08", "Remera naranja", "./img/remeranaranja.webp", "Remeras", 3000),
    rRosa = new Producto("Remera-09", "Remera rosa", "./img/remerarosa.webp", "Remeras", 3000),
    /* Buzos */
    bAzul = new Producto("Buzo-01", "Buzo azul", "./img/buzoazul.webp", "Buzos", 6000),
    hAzul = new Producto("Buzo-02", "Hoddie azul", "./img/buzoazulcapucha.webp", "Buzos", 6000),
    bNegro = new Producto("Buzo-03", "Buzo negro", "./img/buzonegro.webp", "Buzos", 6000),
    hNegro = new Producto("Buzo-04", "Hoddie negro", "./img/buzonegrocapucha.webp", "Buzos", 6000),
    bCamel = new Producto("Buzo-05", "Buzo camel", "./img/buzocamel.webp", "Buzos", 6000),
    hCamel = new Producto("Buzo-06", "Hoddie camel", "./img/buzocamelcapucha.webp", "Buzos", 6000),
    bGris = new Producto("Buzo-07", "Buzo gris", "./img/buzogris.webp", "Buzos", 6000),
    /* Pantalones */
    pBlanco = new Producto("Pantalon-01", "Pantalon blanco", "./img/pantalonblanco.webp", "Pantalones", 9000),
    pNegro = new Producto("Pantalon-02", "Pantalon negro", "./img/pantalonnegro.webp", "Pantalones", 9000),
    pGris = new Producto("Pantalon-03", "Pantalon gris", "./img/pantalongris.webp", "Pantalones", 9000),
    pMilitar = new Producto("Pantalon-04", "Pantalon verde militar", "./img/pantalonmilitar.webp", "Pantalones", 9000),
    pVerano = new Producto("Pantalon-05", "Pantalon de verano negro", "./img/pantalonnegroverano.webp", "Pantalones", 9000)
];
/* Fin Productos */



/********************** Selectores **********************/
    //Main
    const cardsContainer = document.querySelector('#cards-section');
    let btnsAdd = document.querySelectorAll(".btn-agregar");
    //Cantidad de productos en carrito dinámico
    const contador = document.querySelector("#cant-products");
    //Abrir y cerrar
    const btnCart = document.querySelector('.btn-cart'),
          cartContainerProducts = document.querySelector('.cart-container-products'),
          btnCartClose = document.querySelector('.btn-cart-close');
    let btnsBorrar = document.querySelectorAll(".btn-close");
    //Cards
    const linksCategorias = document.querySelectorAll(".link-categoria");
    const tituloCategorias = document.querySelector("#titulo");
    //Contenido dinámico del carrito
    const carritoDinamico = document.querySelector("#cart-container");
    const productList = document.querySelector("#product-list");
    const carritoVacio = document.querySelector ("#carrito-vacio");
    const subTotal = document.querySelector(".ocultar");
/* Fin de Selectores */



/********************** Cards **********************/

    //Todas las cards
    function mostrarProductos(categoriaSeleccionada) {
        cardsContainer.innerHTML = "";

        categoriaSeleccionada.forEach((producto) => {
            const div = document.createElement('div');
            div.classList.add("card");
            div.innerHTML = `
                            <div class="card-img">
                            <img src="${producto.img}" alt="imagen uno">
                        </div>
                        <div class="card-content">
                            <h2>${producto.nombre}</h2>
                                                
                                <select class="talles" name="talles">
                                    <optgroup class="options">
                                        <option value="xs">XS</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </optgroup>
                                </select>
                            
                            <p>$${producto.precio}</p>
                            <button id=${producto.id} class="btn-agregar">Agregar al carrito</button>
                        </div>
                    </div>        
                `;
            cardsContainer.appendChild(div);            
        });
            Botones();                    
    };
    mostrarProductos(todos)

    //Cards por categoría
    linksCategorias.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (e.currentTarget.id != "todos") {
                const categorias = todos.find(producto => producto.categoria === e.currentTarget.innerText);
                tituloCategorias.innerText = categorias.categoria;

                const categoriaElegida = todos.filter(producto => producto.categoria === e.currentTarget.innerText);
                mostrarProductos(categoriaElegida);

            } else {
                tituloCategorias.innerText = e.currentTarget.innerText;
                mostrarProductos(todos);
            };
        });
    });
/* Fin Cards */



/********************** Carrito dinámico **********************/

    //Abrir y cerrar carrito
    function abrirCarrito (){
        btnCart.addEventListener('click', () => cartContainerProducts.classList.toggle('hidden-cart'));
        btnCart.addEventListener('click', () => subTotal.classList.toggle('ocultar'));
        btnCartClose.addEventListener('click', () => cartContainerProducts.classList.toggle('hidden-cart'));
        btnCartClose.addEventListener('click', () => subTotal.classList.add('ocultar'));
    };
    abrirCarrito();

    //Ver productos en el carrito
    function mostrarCarrito(productosAgregados) {

            productList.innerHTML = "";

            productosAgregados.forEach((producto) => {
                const divCarrito = document.createElement("div")
                divCarrito.classList.add("cart-product")
                divCarrito.innerHTML = `            
                <div class="info-cart-product">
                <span class="cant">${producto.cantidad}</span>
                <p class="nombre-producto">${producto.nombre}</p>
                <p class="talle">Talle: </p>
                <span class="precio">$${producto.precio * producto.cantidad}</span>
                </div>
                <button id=${producto.id} class="btn-close">
                <i class="bi bi-x-circle"></i>
                </button>
                `;
                productList.appendChild(divCarrito);
            });

        
          Botones();  
    };
/* Fin Carrito dinámico */

/********************** Agregar al carrito dinámico **********************/

    //Botones agregar y borrar
    function Botones() {
        btnsAdd = document.querySelectorAll(".btn-agregar");
        btnsBorrar = document.querySelectorAll(".btn-close");

        btnsAdd.forEach (btn =>{
            btn.addEventListener("click", agregar);                
        });
        btnsBorrar.forEach (btn => {
           btn.addEventListener("click", borrarProductos) 
        });
    };

    //Productos en carrito
    let productosEnCarrito;
    

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarContador();
        mostrarCarrito(productosEnCarrito)
    } else {
        productosEnCarrito = [];
        console.log(productosEnCarrito);
    }
    


    //funcion agregar producto
    function agregar (e) {
        const btnProducto = e.currentTarget.id;
        const addProduct = todos.find ( producto => producto.id === btnProducto);

        if (productosEnCarrito.find(producto => producto.id === btnProducto)) {
            const i = productosEnCarrito.indexOf(addProduct);            
            productosEnCarrito[i].cantidad++;
            
        }else {
            addProduct.cantidad = 1;
            productosEnCarrito.push(addProduct);
            
        };
        actualizarContador();
        mostrarCarrito(productosEnCarrito);
        carritoOn(productosEnCarrito); 
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 
    };

    
    //Función borrar productos
    function borrarProductos (e) {
        const btnBorrar = e.currentTarget.id;
        const borrarProducto = productosEnCarrito.filter(producto => producto.id != btnBorrar);
        productosEnCarrito = [...borrarProducto];
        
        if (productosEnCarrito) {
            subTotal.innerText = `Tu carrito está vacío :(`;
        }
        
        actualizarContador();
        mostrarCarrito(productosEnCarrito);
        carritoOn(productosEnCarrito);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        
    };

    //Contador de productos en carrito
    function actualizarContador (){
        let contadorActualizado = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        contador.innerText = contadorActualizado;
    };

    //Función carrito en operación
    function carritoOn(a) {
        for (let i = 0; i < a.length; i++) {

            if (a.length > 0) {
                a.forEach(producto => {
                    let total = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
                    subTotal.innerText = ` Iniciar compra - Sub total: $${producto.precio * total}`;
                })
            };
        };       
    };

/* Fin de Agregar al carrito */


























/*             const divVacio = documen.createElement("div")
            divVacio.classList.add("cart-product")
            divVacio.innerHTML = `
            <div class="info-cart-product">                
                <p class="nombre-producto">Tu carrito está vacío :(</p>
                </div>
            `;
            productList.appendChild(divVacio); */


/*             
            <h3>Iniciar compra - Sub-Total:</h3>
            <span class="total">$${producto.precio * producto.cantidad}</span>            
            <div class="cart-close">
                <button id="${producto.id}" class="btn-cart-close">
                    <p>Cerrar</p>
                </button>
            </div> */
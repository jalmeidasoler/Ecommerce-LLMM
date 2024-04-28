const arrayProductos = [];
const arrayCarrito = [];

document.addEventListener("DOMContentLoaded",()=>{

    const url = "./utils/files/archivo.json";
    function obtenerProductos(){

        return fetch(url)

            .then(respuesta=>{
                if (!respuesta.ok){
                    throw new Error("Error de conexión.");
                }
                return respuesta.json();
            })
            .then(datos =>{
                return datos.products;  
            })
            .catch(error =>{
                Swal.fire({
                    title: "Internet",
                    text: "Está bien contigo?",
                    icon: "question"
                });
            })

    };
    function formatearProducto(productos){
        const contProductos = document.querySelector("#cartas");
        contProductos.innerHTML="";
        if(productos.length>0){
            productos.forEach(producto => {
                const productoFormateado = `
            
                <div class="card" style="width: 18rem;">
                    <img src="${producto.images[0]}" class="card-img-top" alt="${producto.title}">
                    
                    <div class="card-body animate__animate animate__bounceInUp">
                        <h6 id="titulo">${producto.title}</h6>
                        <p id="marca">Marca: ${producto.brand}</p>
                        <p id="precio">Precio: ${producto.price}</p>
                        <p>Puntuación: ${producto.rating}</p>
                        <button value="${producto.id}" class="btn btn-primary" id="botonCarrito">Añadir Carrito</button>
                    </div>
                </div>`;
                contProductos.innerHTML += productoFormateado;
                arrayProductos.push(producto);
            });
        }else{
        }
        
    }
    obtenerProductos()
        .then(productos=>{
            formatearProducto(productos);
    });
    
   
    let botonFiltro = document.querySelector("#botonFiltrar");
    let productosPreferidos = [];
    botonFiltro.addEventListener("click",()=>{  

        let marcaSelect = document.querySelector("#marcasFiltro");
        let precioMaximo = parseFloat(document.querySelector("#valorPrecio").textContent);
        let categoriaSelect = document.querySelector("#categoriasFiltro");
            
        

        switch (categoriaSelect.value) {
            case "smartphones":

                if(marcaSelect.value==="todas"){
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "smartphones";
                    });
                }else{
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "smartphones" && producto.brand === marcaSelect.value;
                    });
                }
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                    return parseFloat(producto.price) <= precioMaximo;        
                    });
                }
                
                break;
            case "laptops":
                if(marcaSelect.value==="todas"){
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "laptops";
                    });
                }else{
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "laptops" && producto.brand === marcaSelect.value;
                    });
                }
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                        return parseFloat(producto.price) <= precioMaximo;        
                    });
                    }
                
                break;
            case "fragrances":
                if(marcaSelect.value==="todas"){
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "fragrances";
                    });
                }else{
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "fragrances" && producto.brand === marcaSelect.value;
                    });
                }
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                        return parseFloat(producto.price) <= precioMaximo;        
                    });
                    }
               
                break;
            case "skincare":
                if(marcaSelect.value==="todas"){
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "skincare";
                    });
                }else{
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "skincare" && producto.brand === marcaSelect.value;
                    });
                }
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                        return parseFloat(producto.price) <= precioMaximo;        
                    });
                    }
                
                break;
            case "groceries":
                if(marcaSelect.value==="todas"){
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "groceries";
                    });
                }else{
                    productosPreferidos = arrayProductos.filter((producto)=>{
                        return producto.category === "groceries" && producto.brand === marcaSelect.value;
                    });
                }
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                        return parseFloat(producto.price) <= precioMaximo;        
                    });
                    }

                break;

            case "home":
                    if(marcaSelect.value==="todas"){
                        productosPreferidos = arrayProductos.filter((producto)=>{
                            return producto.category === "home";
                        });
                    }else{
                        productosPreferidos = arrayProductos.filter((producto)=>{
                            return producto.category === "home" && producto.brand === marcaSelect.value;
                        });
                    }
                    if (precioMaximo < 2800) {
                        productosPreferidos = productosPreferidos.filter((producto) => {
                            return parseFloat(producto.price) <= precioMaximo;        
                        });
                        }
                    break;

            case "todas":
                productosPreferidos = arrayProductos;
                if (precioMaximo < 2800) {
                    productosPreferidos = productosPreferidos.filter((producto) => {
                        return parseFloat(producto.price) <= precioMaximo;        
                    });
                    }

                break;
            default:
                break;
        }

       if (productosPreferidos.length>0){
        const contProductos = document.querySelector("#cartas");
        contProductos.innerHTML="";
        productosPreferidos.forEach(producto => {
        const productoFiltrado = `
            
                 <div class="card" style="width: 18rem;">
                    <img src="${producto.images[0]}" class="card-img-top" alt="${producto.title}">
                    
                    <div class="card-body animate__animate animate__bounceInUp">
                        <h6 id="titulo">${producto.title}</h6>
                        <p id="marca">Marca: ${producto.brand}</p>
                        <p id="precio">Precio: ${producto.price}</p>
                        <p>Puntuación: ${producto.rating}</p>
                        <button value="${producto.id}" class="btn btn-primary" id="botonCarrito">Añadir Carrito</button>
                    </div>
                </div>`;
        contProductos.innerHTML += productoFiltrado;
        });
       }
    }) // Fin función para filtrar productos.

    const nodoPadre = document.getElementById("cartas");
    nodoPadre.addEventListener("click", (event) => {
        if (event.target && event.target.matches(".btn-primary")) {
            // Si el elemento clickeado es un botón con la clase "btn-primary"
            console.log("Botón clickado");
            const carta = event.target.closest(".card");
            const titulo = carta.querySelector("h6#titulo").textContent;
            const marca = carta.querySelector("p#marca").textContent;
            const precio = carta.querySelector("p#precio").textContent;
            mostrarCarrito(titulo, marca, precio);
        }
    });

    function mostrarCarrito(titulo,marca,precio){
        let cantidad = 1;
        const nodoCesta = document.querySelector("#cesta");
        const listaProductos = nodoCesta.querySelectorAll("#productoCesta");
        console.log("Cantidad de productos en el carrito:", listaProductos.length);

        if (listaProductos.length > 0) {
            listaProductos.forEach(producto => {
                const tituloProducto = producto.querySelector('.card-title').innerText;
                if (titulo === tituloProducto) {
                    const cantidadTexto = producto.querySelector('.cantidad').innerText;
                    cantidad = parseInt(cantidadTexto) + 1;
                    producto.querySelector('.cantidad').innerText = cantidad;
                    return;
                }
            });
        }
        if(cantidad===1){
        const productoCompra = `
            
            <div class="card text-end animate__animate animate__bounceInUp" id="productoCesta" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${marca}</p>
                    <p class="card-text">${precio}</p>
                    <p>Cantidad: <span class="cantidad">${cantidad}</span></p>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
           `;
    
        nodoCesta.innerHTML += productoCompra;
        }
    }
    const nodoCesta = document.querySelector("#cesta");

    nodoCesta.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("btn-danger")) {
            Swal.fire({
                title: "¿Estás seguro de que quieres eliminar este producto?",
                showCancelButton: true,
                confirmButtonColor: "#dc3545",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                preConfirm: () => {
                    const producto = event.target.closest("#productoCesta");
                    const cantidadElemento = producto.querySelector('.cantidad');
                    let cantidad = parseInt(cantidadElemento.innerText);
                    if (cantidad > 1) {
                        cantidad--;
                        cantidadElemento.innerText = cantidad;
                    } else {
                        producto.remove();
                    }
                }
            });
        }
    });
       
}); // Fin función evento DOM.
   
function mostrarPrecio(){
    let inputPrecio = document.querySelector("#rangoPrecio");
    let valorPrecio = document.querySelector("#valorPrecio");

    valorPrecio.textContent = inputPrecio.value;

    inputPrecio.addEventListener("input", (event)=>{
        valorPrecio.textContent = event.target.value; 
    
    });
}

function modificarMarcas(){

    let selectMarcas = document.querySelector("#marcasFiltro");
    let selectCategoria = document.querySelector("#categoriasFiltro");

    let opcionCategoria = selectCategoria.value;


    switch (opcionCategoria){

        case "smartphones":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="OPPO">OPPO</option>
            <option value="Huawei">Huawei</option>
            `;
            break;

        case "laptops":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Microsoft Surface">Microsoft Surface</option>
            <option value="Infinix">Infinix</option>
            <option value="HP Pavilion">HP Pavilion</option>
            `;
            break;
        
        case "fragrances":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="Impression of Acqua Di Gio">Impression of Acqua Di Gio</option>
            <option value="Royal_Mirage">Royal_Mirage</option>
            <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
            <option value="Al Munakh">Al Munakh</option>
            <option value="Lord - Al-Rehab">Lord - Al-Rehab</option>
            `;
            break;

        case "skincare":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="L'Oreal Paris">L'Oreal Paris</option>
            <option value="Hemani Tea">Hemani Tea</option>
            <option value="Estée Lauder">Estée Lauder</option>
            <option value="RoC Retinol">RoC Retinol</option>
            `;

            break;
        
        case "groceries":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="Saaf & Khaas">Saaf & Khaas</option>
            <option value="Bake Parlor Big">Bake Parlor Big</option>
            <option value="Baking Food Items">Baking Food Items</option>
            <option value="Fauji">Fauji</option>
            <option value="Dry Rose">Dry Rose</option>
            `;
            break;

        case "home":

            selectMarcas.innerHTML="";
            selectMarcas.innerHTML=`
            <option selected value="todas">Todas</option>
            <option value="Boho Decor">Boho Decor</option>
            <option value="Flying Wooden">Flying Wooden</option>
            <option value="LED Lights">LED Lights</option>
            <option value="luxury palace">luxury palace</option>
            <option value="Golden">Golden</option>
            `;
            break;
    }
}


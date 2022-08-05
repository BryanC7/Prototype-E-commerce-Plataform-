//! De localStorage hacia el DOM
let productos = JSON.parse(localStorage.getItem('productos'))
let productosAdmin = document.querySelector('#productos')
let cardProducto

function imprimirProducto() {
    limpiarHtml()
    productos.forEach(producto => {
        let card = document.createElement('div')
        card.classList.add('my-2','mx-auto','px-0','py-0','col','col-xl-2','col-lg-3','col-md-3','col-md-4','col-sm-4', 'col-10')
        card.innerHTML = 
        `
        <div class="card">

            <img class="card-img-top" width="176" height="174" src= ${producto.url} alt="Producto">
            <div class="card-img-overlay ">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">

                    <a href="agregar-productos.html?id=${producto.id}" type="button" class="btn boton-editar btn-outline-primary btn-light iconos-img">
                        <svg class="text-primary" xmlns="http://www.w3.org/2000/svg"    width="16" height="16" fill="#000000" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </a>

                    <button type="button" id="${producto.id}" class="btn boton-eliminar btn-outline-primary btn-light iconos-img">
                        <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>

                </div>
            </div>
            <div class="card-body">
                <p class="card-text card-texto">${producto.nombre}</p>
                <p class="card-text card-texto">$${producto.precio}.00</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link card-texto text-decoration-none">Ver producto</a>
            </div>

        </div>
        `
       productosAdmin.appendChild(card)
    })
    localStorage.setItem('productos', JSON.stringify(productos))
}

//! Limpiar el HTML previo 
function limpiarHtml() {
    while(productosAdmin.firstChild) {
        productosAdmin.removeChild(productosAdmin.firstChild)
    }
}
//! Eventos de la página index-administrador

window.addEventListener('DOMContentLoaded', consultarData)
productosAdmin.addEventListener('click', eliminarProductos)

//! Eliminar productos
function eliminarProductos(e) {
    if(e.target.classList.contains('boton-eliminar')) {
        let cardId = Number(e.target.getAttribute('id'))
        let confirmar = confirm('¿Deseas eliminar este producto?')
        if(confirmar) {
            productos = productos.filter(elemento => elemento.id !== cardId)
            imprimirProducto()
        }
    }
}

//! Comprobar datos en el Ls
function consultarData() {
    cardProducto = [...productos]
    imprimirProducto()
}
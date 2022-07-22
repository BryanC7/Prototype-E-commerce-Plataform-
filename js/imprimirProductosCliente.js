//! De localStorage hacia el DOM

const productos = JSON.parse(localStorage.getItem('productos'))
const starWars = document.querySelector('#starwars')
const consolas = document.querySelector('#consolas')
const diversos = document.querySelector('#diversos')

window.addEventListener('DOMContentLoaded', consultarData)

function imprimirProducto() {
    productos.forEach(producto => {
        const card = document.createElement('div')
        card.classList.add('my-2','mx-auto','px-0','py-0','col-xl-2','col-lg-3', 'col-md-3','col-sm-4', 'col-10')
        card.innerHTML = 
        `
        <div class="card">

            <img class="card-img-top" width="176" height="174" src= ${producto.url} alt="Producto">
            <div class="card-body">
                <p class="card-text card-texto">${producto.nombre}</p>
                <p class="card-text card-texto">$${producto.precio}.00</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link card-texto text-decoration-none">Ver producto</a>
            </div>

        </div>
        `
        if(producto.categoria === 'Star Wars') {
            starWars.appendChild(card)
        } else if (producto.categoria === 'Consolas') {
            consolas.appendChild(card)
        } else if (producto.categoria === 'Diversos'){
            diversos.appendChild(card)
        } else {
            return
        }
    })
}

function consultarData() {
    cardProducto = productos
    console.log(cardProducto)
    imprimirProducto()
}
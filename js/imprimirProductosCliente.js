//! De localStorage hacia el DOM

const productos = JSON.parse(localStorage.getItem('productos'))
const productosAdmin = document.querySelector('#productos')
const starWars = document.querySelector('#starwars')
const consolas = document.querySelector('#consolas')
const diversos = document.querySelector('#diversos')

window.addEventListener('DOMContentLoaded', consultarData)

function imprimirProducto() {
    productos.forEach(producto => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = 
        `
        <img class="imagen-card" src= ${producto.url} alt="Producto">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}.00</p>
        <a class="ver-producto" href="#">Ver producto</a>
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
//! De localStorage hacia el DOM

const productos = JSON.parse(localStorage.getItem('productos'))
const productosAdmin = document.querySelector('#productos')

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
       productosAdmin.appendChild(card)
    })
}

function consultarData() {
    cardProducto = [...productos]
    console.log(cardProducto)
    imprimirProducto()
}
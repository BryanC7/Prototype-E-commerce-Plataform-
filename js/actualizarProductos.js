export let idProducto
let editando

const urlInput = document.querySelector('#url')
const categoriaInput = document.querySelector('#categoria')
const nombreInput = document.querySelector('#nombre')
const precioInput = document.querySelector('#precio')

//! Editar productos 
document.addEventListener('DOMContentLoaded' , () => {

    const parametroURL = new URLSearchParams(window.location.search)
    idProducto = Number(parametroURL.get('id')) 
    obtenerProducto(idProducto)
})

//! Obtener producto
function obtenerProducto(id) {
    const productos = JSON.parse(localStorage.getItem('productos'))
    productos.forEach(producto => {
        if(producto.id === id) {
            llenarCampos(producto)
            return
        }
    })
}

function llenarCampos(producto) {
    if(editando) {
        document.querySelector('#btnAgregar').textContent = 'Agregar producto'
        document.querySelector('#agregarProductosTitulo').textContent = 'Agregar nuevo producto'

        editando = false
    } else {
        const {url, categoria, nombre, precio} = producto
        urlInput.value = url
        categoriaInput.value = categoria
        nombreInput.value = nombre
        precioInput.value = precio

        document.querySelector('#btnAgregar').textContent = 'Guardar Cambios'
        document.querySelector('#agregarProductosTitulo').textContent = 'Editar producto'

        editando = true
    }
}
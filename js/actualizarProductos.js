import { mostrarAlerta } from './mostrarMensaje.js';

let idProducto
let editando

const urlInput = document.querySelector('#url')
const categoriaInput = document.querySelector('#categoria')
const nombreInput = document.querySelector('#nombre')
const precioInput = document.querySelector('#precio')
const formularioProducto = document.querySelector('#formularioProducto')

//! Editar productos 
document.addEventListener('DOMContentLoaded' , () => {

    formularioProducto.addEventListener('submit', actualizarProducto)

    const parametroURL = new URLSearchParams(window.location.search)
    idProducto = Number(parametroURL.get('id')) 
    obtenerProducto(idProducto)
})

function actualizarProducto(e) {
    e.preventDefault()

    const dataStorage = JSON.parse(localStorage.getItem('productos'))
   
    const productoActualizado = {
        url: urlInput.value,
        categoria: categoriaInput.value,
        nombre: nombreInput.value,
        precio: precioInput.value,
        id: Number(idProducto)
    }

    console.log(dataStorage)
    dataStorage.filter(objeto => objeto.id !== idProducto)
    console.log(dataStorage)

    localStorage.setItem('productos', JSON.stringify(productoActualizado))
    mostrarAlerta('Editado correctamente')
}

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
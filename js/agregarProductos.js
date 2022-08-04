import { mostrarAlerta } from "./mostrarMensaje.js"

// ! Comprobar inputs vacios

let url = document.querySelector('#url')
let categoria = document.querySelector('#categoria')
let nombre = document.querySelector('#nombre')
let precio = document.querySelector('#precio')
let btnAgregar = document.querySelector('#btnAgregar')

function validarFormulario(data) {
    let { url, categoria, nombre, precio} = data
    if(url === '' && categoria == 0 && nombre == 0 && precio == 0) {
        mostrarAlerta('Debes rellenar todos los campos', 'error')
        return true
    } else if(url === '') {
        mostrarAlerta('El campo url está vacío', 'error')
        return true
    } else if (categoria == 0) {
        mostrarAlerta('El campo categoria está vacío', 'error')
        return true
    } else if (nombre == 0) {
        mostrarAlerta('El campo nombre está vacío', 'error')
        return true
    } else if (precio == 0) {
        mostrarAlerta('El campo precio está vacío', 'error')
        return true
    } else {
        return false
    }
}

//! Agregar productos

btnAgregar.addEventListener('click', agregarProducto)
window.addEventListener('DOMContentLoaded', consultarLocalStorage)

let cardProducto = JSON.parse(localStorage.getItem('productos'))

function consultarLocalStorage() {
    if(!cardProducto) {
        cardProducto = []
    }
}

function agregarProducto() {
    let objetoProducto = {
        url: url.value,
        categoria: categoria.value,
        nombre: nombre.value,
        precio: precio.value,
        id: Date.now()
    }
    if(validarFormulario(objetoProducto)) {
        return
    }
    
    cardProducto = [...cardProducto, objetoProducto]
    localStorage.setItem('productos',  JSON.stringify(cardProducto))
    mostrarAlerta('Producto agregado con éxito')
}
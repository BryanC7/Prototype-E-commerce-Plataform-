// ! Comprobar inputs vacios

const url = document.querySelector('#url')
const categoria = document.querySelector('#categoria')
const nombre = document.querySelector('#nombre')
const precio = document.querySelector('#precio')
const btnAgregar = document.querySelector('#btnAgregar')
const formularioProductos = document.querySelector('.contenedor-productos')
const contenedorAlerta = document.createElement('div')

function mostrarAlerta(mensaje) {
    let alerta = document.createElement('p')
    alerta.textContent = `${mensaje}` 
    alerta.classList.add('alerta')
    btnAgregar.style.pointerEvents = "none"
    btnAgregar.style.cursor = "default"
    contenedorAlerta.appendChild(alerta)
    formularioProductos.insertBefore(contenedorAlerta, btnAgregar)
    setTimeout ( () => {
        alerta.remove()
        btnAgregar.style.pointerEvents = "auto"
        btnAgregar.style.cursor = "pointer"
    }, 3000)
}

function validarFormulario(data) {
    const { url, categoria, nombre, precio} = data
    if(url === '' && categoria == 0 && nombre == 0 && precio == 0) {
        mostrarAlerta('Debes rellenar todos los campos')
        return true
    } else if(url === '') {
        mostrarAlerta('El campo url está vacío')
        return true
    } else if (categoria == 0) {
        mostrarAlerta('El campo categoria está vacío')
        return true
    } else if (nombre == 0) {
        mostrarAlerta('El campo nombre está vacío')
        return true
    } else if (precio == 0) {
        mostrarAlerta('El campo precio está vacío')
        return true
    } else {
        return false
    }
}

//! Agregar productos

let cardProducto = JSON.parse(localStorage.getItem('productos'))
window.addEventListener('DOMContentLoaded', consultarLocalStorage)

function consultarLocalStorage() {
    if(!cardProducto) {
        cardProducto = []
    }
}

function agregarProducto() {
    const objetoProducto = {
        url: url.value,
        categoria: categoria.value,
        nombre: nombre.value,
        precio: precio.value
    }
    if(validarFormulario(objetoProducto)) {
        return
    }
    console.log(objetoProducto)
    cardProducto = [...cardProducto, objetoProducto]
    localStorage.setItem('productos',  JSON.stringify(cardProducto))
}

btnAgregar.addEventListener('click', agregarProducto)
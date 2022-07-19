// ! Comprobar inputs vacios
// Todo: Declarar constantes 1 por 1 
const inputProductos = document.querySelectorAll('.inputs')
const btnAgregar = document.querySelector('#btnAgregar')
const formularioProductos = document.querySelector('.contenedor-productos')
const contenedorAlerta = document.createElement('div')

// btnAgregar.addEventListener('click', inputsVacios)
// Todo: Refactorizar código y retornar en un booleano
function validarFormulario(data) {
    inputProductos.forEach(inputs => {
        if(inputs.value === '' || inputs.value == 0) {
            limpiarAlerta()
            let alerta = document.createElement('p')
            alerta.textContent = 'Debes rellenar todos los campos'
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
    })
    return true
}

// Limpiar duplicados
function limpiarAlerta() {
    while(contenedorAlerta.firstChild) {
        contenedorAlerta.removeChild(contenedorAlerta.firstChild)
    }
}

//! Agregar productos

let cardProducto = JSON.parse(localStorage.getItem('productos'))

function agregarProducto() {
    const objetoProducto = {
        url: inputProductos[0].value,
        categoria: inputProductos[1].value,
        nombre: inputProductos[2].value,
        precio: inputProductos[3].value,
        descripcion: inputProductos[4].value
    }
    if(validarFormulario(objetoProducto)) {
        return
    }
    console.log(objetoProducto)
    cardProducto = [...cardProducto, objetoProducto]
    localStorage.setItem('productos',  JSON.stringify(cardProducto))
    console.log(cardProducto)
}

btnAgregar.addEventListener('click', agregarProducto)
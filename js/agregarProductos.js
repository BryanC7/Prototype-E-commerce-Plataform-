// ! Comprobar inputs vacios

const inputProductos = document.querySelectorAll('.inputs')
const btnAgregar = document.querySelector('#btnAgregar')
const formularioProductos = document.querySelector('.contenedor-productos')
const contenedorAlerta = document.createElement('div')

btnAgregar.addEventListener('click', inputsVacios)

function inputsVacios() {
    inputProductos.forEach(inputs => {
        if(inputs.value === '') {
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
}

function limpiarAlerta() {
    while(contenedorAlerta.firstChild) {
        contenedorAlerta.removeChild(contenedorAlerta.firstChild)
    }
}

//! Agregar productos


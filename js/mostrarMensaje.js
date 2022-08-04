//! Mostrar mensaje 
export function mostrarAlerta(mensaje, tipo) {
    let btnAgregar = document.querySelector('#btnAgregar')
    let formularioProductos = document.querySelector('.contenedor-productos')
    let contenedorAlerta = document.createElement('div')
    let alerta = document.createElement('p')
    alerta.textContent = mensaje
    
    if(tipo === 'error') {
        alerta.classList.add('alerta')
    } else {
        alerta.classList.add('correcto')
    }
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
//! Validación de formulario 

let inputs = document.querySelectorAll('.input-text')

inputs.forEach( input => {
    input.addEventListener('blur', input => {
        validar(input.target)
    })
})

function validar(input) {
    let tipoDeInput = input.dataset.tipo
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

let tiposDeErrores = ['valueMissing', 'typeMismatch', 'patternMismatch']

let mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacío'
    },
    correo: {
        valueMissing: 'El campo email no puede estar vacío',
        typeMismatch: 'El correo no es válido'
    },
    mensaje: {
        valueMissing: 'El campo mensaje no puede estar vacío'
    },
    contraseña: {
        valueMissing: 'El campo contraseña no puede estar vacío',
        patternMismatch: 'Al menos 6 caracteres y máximo 12, debe contener una letra minúscula y una letra mayúscula. No puede contener caracteres especiales'
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ''
    tiposDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}
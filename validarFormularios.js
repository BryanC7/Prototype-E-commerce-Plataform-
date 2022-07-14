//! Validación de formulario 

const inputs = document.querySelectorAll('.input-text')

inputs.forEach( input => {
    input.addEventListener('blur', input => {
        validar(input.target)
    })
})

function validar(input) {
    const tipoDeInput = input.dataset.tipo
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tiposDeErrores = ['valueMissing', 'typeMismatch', 'patternMismatch']

const mensajesDeError = {
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
    },
    url: {
        valueMissing: 'El campo url no puede estar vacío'
    },
    categoria: {
        valueMissing: 'El campo categoria no puede estar vacío'
    },
    precio: {
        valueMissing: 'El campo precio no puede estar vacío'
    },
    descripcion: {
        valueMissing: 'El campo descripcion no puede estar vacío'
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

//! Promise
    
const email = document.querySelector('#correo')
const pass = document.querySelector('#contraseña')
const btnEntrar = document.querySelector('#btnEntrar')

function login() {
  const promise = new Promise( (resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('GET', 'http://localhost:3000/profile')
    http.send()

    http.onload = () => {
      const response = JSON.parse(http.response)
      if(http.status >= 400) {
        reject(response)
      } else {
        resolve(response)
      }
    };
  });
  return promise
  .then((respuesta) => {
    if(email.value === respuesta[0].email && pass.value === respuesta[0].pass) {
        window.location.href = 'index-administrador.html'
    } else if(email.value === respuesta[1].email && pass.value === respuesta[1].pass) {
        window.location.href = 'index-cliente.html'
    } else {
        alert('No te logeaste, inténtalo nuevamente')
    }})
}

btnEntrar.addEventListener('click', login)
 
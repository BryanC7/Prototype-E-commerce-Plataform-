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
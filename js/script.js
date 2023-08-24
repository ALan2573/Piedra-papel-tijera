let piedra = document.querySelector("#piedra");
let papel = document.querySelector("#papel");
let tijera = document.querySelector("#tijera");
let Jugador = document.querySelector("#puntajeJugador");
let maquinapuntaje = document.querySelector("#puntajeMaquina");
let puntajeEmpates = document.querySelector("#puntajeEmpates");
let imagenUsuario  = document.querySelector('.usuario')
let imagenPc = document.querySelector('.Maquina')


// piedra = 1;
// papel = 2;
// tijera = 3;
let movJ = '';
let movM = '';
let puntajeJugador = 0;
let puntajeMaquina = 0;
let empates = 0;


let imagen = document.createElement('img')
let imagen2 = document.createElement('img')



piedra.addEventListener("click", () => {

imagen.src = './img/piedra.png'
imagen.classList = 'imagen'
imagenUsuario.appendChild(imagen)
  maquina()
  movJ = 1
  quienGano()
});
papel.addEventListener("click", () => {
  imagen.src = './img/papel.png'
  imagen.classList = 'imagen'
  imagenUsuario.appendChild(imagen)
  maquina()
  movJ = 2
  quienGano()

});
tijera.addEventListener("click", () => {
  imagen.src = './img/tijera.png'
imagen.classList = 'imagen'
imagenUsuario.appendChild(imagen)
  maquina()
  movJ = 3
  quienGano()

});

function quienGano() {
  if ((movJ === 2 && movM === 1) ||(movJ === 3 && movM === 2) ||(movJ === 1 && movM === 3)) {
    console.log("gano jugador");
    puntajeJugador++
    
    Jugador.innerText = `${" " + puntajeJugador}`
}
else if ((movJ === 1 && movM === 2) || (movJ === 2 && movM === 3) || (movJ === 3 && movM === 1)){
    
    puntajeMaquina++
    maquinapuntaje.innerHTML = ` ${ " " + puntajeMaquina }`

  } else {
    
   
    
    empates++
    puntajeEmpates.innerHTML = `${' ' + empates }`

}
}

function maquina() {
 
 
  movM = Math.floor(Math.random() * 3 + 1)
  if(movM == 1){
    imagen2.src = './img/piedra.png'
    imagen2.classList = 'imagen'
    imagenPc.appendChild(imagen2)
  }else if (movM == 2){
    imagen2.src = './img/papel.png'
    imagen2.classList = 'imagen'
    imagenPc.appendChild(imagen2)
  }else {
    imagen2.src = './img/tijera.png'
    imagen2.classList = 'imagen'
    imagenPc.appendChild(imagen2)
  }

}


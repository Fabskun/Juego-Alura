let numeroSecreto = 0;

let intentos = 0;

let listanumeroSorteados = [];

let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function verificarIntentoDeUsuario() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  //console.log(typeof numeroDeUsuario);
  //console.log(numeroDeUsuario);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuarrio no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let input = (document.getElementById("valorUsuario").value = "");
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
  console.log(numeroGenerado);
  console.log(listanumeroSorteados);

  if (listanumeroSorteados.length() === numeroMaximo) {
    asignarTextoElemento('p', 'se ha terminado los numeros');
    
  } else {
    if (listanumeroSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listanumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciale() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica u numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo numero
  //generar el numero aleatorio
  //Inicializar el numeeros de intentos
  condicionesIniciale();
  //Deshailitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciale();
//console.log(numeroSecreto);

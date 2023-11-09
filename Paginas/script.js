let video = document.querySelector("video");
let botonPlay = document.querySelector(".boton-video");
let botonPausa = document.querySelector(".boton-video2");
let tiempoActual;
let duracion = document.querySelector(".duracion");
let imagenes = ["","",""];


function segundosAMinutosYSegundos(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);
  return `${minutos}:${segundosRestantes}`;
}

botonPlay.addEventListener("click", () => {
  video.play();
  tiempoActual = setInterval(() => {
    const tiempoActualEnSegundos = video.currentTime;
    const tiempoActualFormateado = segundosAMinutosYSegundos(tiempoActualEnSegundos);
    duracion.textContent = `${tiempoActualFormateado}`;
  }, 1000);
});

botonPausa.addEventListener("click", () => {
  video.pause();
  clearInterval(tiempoActual);
});



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if (imagenes[parseInt(ev.target.id)] == "") {
    var data = ev.dataTransfer.getData("text/plain");
    imagenes[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data));

    const cuadro = ev.target;
    const hiddenP = cuadro.querySelector("p.arrastre");
    if (hiddenP) {
      hiddenP.style.display = "none";
    }
  }

    if(imagenes[0]!="" && imagenes[1] !="" && imagenes[2] !=""){
      if(imagenes[0]=="img2" && imagenes [1]=="img1" && imagenes [2]=="img3"){
        document.querySelector(".tituloSecundario").innerHTML= "MUY BIEN!!"
      }else{
        document.querySelector(".tituloSecundario").innerHTML= "INTENTA DE NUEVO!!"
      }
    }   
  }
  function botonReiniciar(){
    window.location.reload();
  }
  


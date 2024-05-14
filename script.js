let avance = 0;
//para los comentarios pagina principal  
function toggleDivs() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "none"
  div2.style.display = "block"
}
function toggleDivs2() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "block"
  div2.style.display = "none"
}

//funcion de pausar video en pagina acvitidades ww1 (encargate de los demas videos xd)
function pausarVideo() {
  let video = document.getElementById('video1');
  video.pause();
  localStorage.clear();
}
//funcion para indicar q se acabo la actividad
function mostrarAlerta() {
  let video = document.getElementById('video1').style.display = "none";
  document.getElementById("continuar1").style.display = "block";
  document.getElementById("msj1").style.display = "block";
}
function mostrarAlerta2() {
  let video = document.getElementById('video2').style.display = "none";
  document.getElementById("continuar2").style.display = "block";
  document.getElementById("msj2").style.display = "block";
}
function mostrarAlerta3() {
  let video = document.getElementById('video3').style.display = "none";
  document.getElementById("continuar3").style.display = "block";
  document.getElementById("msj3").style.display = "block";
}
function mostrarAlerta4() {
  let video = document.getElementById('video4').style.display = "none";
  document.getElementById("continuar4").style.display = "block";
  document.getElementById("msj4").style.display = "block";
}

//Funcion para actulizar el marcador
function seguir1() {
  avance = 1;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir2() {
  avance = 2;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir3() {
  avance = 3;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir4() {
  avance = 4;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}

//verificar progreso pagina ww1
function verificarww1() {
  let objeto = localStorage.getItem("av_ww1");
  if (objeto) {
    avance = parseInt(objeto);
    if (avance >= 1) {
      console.log("Actividad 1 completada");
      document.getElementById('btn1').disabled = true;
      document.getElementById('btn2').disabled = false;
    }
  
    if (avance >= 2) {
      console.log("Actividad 2 completada");
      document.getElementById('btn3').disabled = false;
      document.getElementById('btn2').disabled = true;
    }
  
    if (avance >= 3) {
      console.log("Actividad 3 completada");
      document.getElementById('btn4').disabled = false;
      document.getElementById('btn3').disabled = true;
    }
  
    if (avance >= 4) {
      console.log("Actividad 4 completada");
      document.getElementById('btn5').disabled = false;
      document.getElementById('btn4').disabled = true;
    }
  
    if (avance >= 5) {
      console.log("Actividad 5 completada");
      document.getElementById('btn5').disabled = true;
      document.getElementById('botones').style.display = "none";
    }
  }
}
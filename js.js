var television = {
  Encendido: false,
  Volumen: 0,
  Canal: 0,
  Silenciar: false,
};

var encender = television.Encendido;
var volumen = television.Volumen;
var canal = television.Canal;
var silenciar = television.Silenciar;

function Encender() {
  if (encender) {
    encender = false;
  } else {
    encender = true;
  }
  switch (encender) {
    case false:
      console.log("television apagada");
      break;

    case true:
      console.log("television prendida");
      volumen = 3;
      console.log("volumen " + volumen);
      canal = 7;
      console.log("canal " + canal);
      break;

    default:
      break;
  }
}

function SubirVolumen() {
  switch (encender) {
    case false:
      console.log("television apagada");
      break;
    case true:
      if (volumen < 10) {
        volumen++;
        console.log("canal " + canal);
        console.log("volumen " + volumen);
        console.log("television prendida");
      } else if (volumen == 10) {
        console.log("canal " + canal);
        console.log("volumen al maximo ");
        console.log("television prendida");
      }
      break;

    default:
      break;
  }
}

function BajarVolumen() {
  switch (encender) {
    case false:
      console.log("television apagada");
      break;
    case true:
      if (volumen > 1) {
        volumen--;
        console.log("canal " + canal);
        console.log("volumen " + volumen);
        console.log("television prendida");
      } else if (volumen == 1) {
        console.log("canal " + canal);
        console.log("volumen al minimo ");
        console.log("television prendida");
      }
      break;

    default:
      break;
  }
}

function SubirCanal() {
  switch (encender) {
    case false:
      console.log("television apagada");
      break;
    case true:
      silenciar = false;
      if (canal < 100) {
        canal++;
        console.log("canal " + canal);
        console.log("volumen " + volumen);
        console.log("television prendida");
      } else if (canal == 100) {
        console.log("canal al maximo ");
        console.log("volumen " + volumen);
        console.log("television prendida");
      }
      break;

    default:
      break;
  }
}

function BajarCanal() {
  switch (encender) {
    case false:
      console.log("television apagada");
      break;
    case true:
      silenciar = false;
      if (canal > 1) {
        canal--;
        console.log("canal " + canal);
        console.log("volumen " + volumen);
        console.log("television prendida");
      } else if (canal == 1) {
        console.log("canal al minimo ");
        console.log("volumen " + volumen);
        console.log("television prendida");
      }
      break;

    default:
      break;
  }
}

function Mute() {
  if (silenciar) {
    silenciar = false;
  } else {
    silenciar = true;
  }

  switch (encender) {
    case false:
      console.log("television apagada");
      break;
    case true:
      if (silenciar) {
        let volumenSilenciado = 0;
        console.log("television silenciada volumen al " + volumenSilenciado);
      } else {
        console.log("canal " + canal);
        console.log("volumen " + volumen);
        console.log("television prendida");
      }

      break;

    default:
      break;
  }
}

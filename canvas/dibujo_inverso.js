var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var colorcito = "#FAA";
var xi, yf;


for(l = 0; l < lineas; l++)
{
    xi = 300 - (10 * (l +1));
    yf = 300 - 10 * l;
    dibujarLinea(colorcito, xi, 0, 300, yf );
    console.log ("linea" + l);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //siempre se pone al inicio del camino, pone el lapiz
    lienzo.strokeStyle = color; //color de la linea
    lienzo.moveTo(xinicial, yinicial); //inicio
    lienzo.lineTo(xfinal, yfinal); //fin
    lienzo.stroke(); //esta funcion se encanrga de dibujar la linea
    lienzo.closePath(); //cerrando el camino
}
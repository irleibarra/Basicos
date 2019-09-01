var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("blue", 10, 200, 300, 10);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //siempre se pone al inicio del camino, pone el lapiz
    lienzo.strokeStyle = color; //color de la linea
    lienzo.moveTo(xinicial, yinicial); //inicio
    lienzo.lineTo(xfinal, yfinal); //fin
    lienzo.stroke(); //esta funcion se encanrga de dibujar la linea
    lienzo.closePath(); //cerrando el camino
}
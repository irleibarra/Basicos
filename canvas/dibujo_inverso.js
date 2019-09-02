var texto = document.getElementById("texto_lineas");  
var boton = document.getElementById("botoncito"); 
boton.addEventListener("click", dibujoPorClick ); //a la funcion no se le pone ()pues ahi no se va a ejecutar, solo se deja saber cual va a ser.

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //siempre se pone al inicio del camino, pone el lapiz
    lienzo.strokeStyle = color; //color de la linea
    lienzo.moveTo(xinicial, yinicial); //inicio
    lienzo.lineTo(xfinal, yfinal); //fin
    lienzo.stroke(); //esta funcion se encanrga de dibujar la linea
    lienzo.closePath(); //cerrando el camino
}


function dibujoPorClick()
{
      
    var lineas = parseInt(texto.value);
    var l = 0;
    var colorcito = "#FAA";
    var xi, yf;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        xi = 300 - (espacio * (l +1));
        yf = 300 - espacio * l;
        dibujarLinea(colorcito, xi, 0, 300, yf );
    
    }
}
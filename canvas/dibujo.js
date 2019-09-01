var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


lienzo.beginPath(); //siempre se pone al inicio del camino, pone el lapiz
lienzo.strokeStyle = "red"; //color de la linea
lienzo.moveTo(100, 100); //inicio
lienzo.lineTo(200, 200); //fin
lienzo.stroke(); //esta funcion se encanrga de dibujar la linea
lienzo.closePath(); //cerrando el camino
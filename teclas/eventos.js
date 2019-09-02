var teclas = {     //esto es una sola linea de codigo por eso se separan con comas
    UP: 38, //se escriben con mayusculas pq son constantes
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado); 
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath(); //siempre se pone al inicio del camino, pone el lapiz
    lienzo.strokeStyle = color; //color de la linea
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial); //inicio
    lienzo.lineTo(xfinal, yfinal); //fin
    lienzo.stroke(); //esta funcion se encanrga de dibujar la linea
    lienzo.closePath(); //cerrando el camino
}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }
    
}
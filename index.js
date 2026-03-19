//obtiene el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")//dibuja en 2d
//prueba de dibujo
ctx.fillRect(50,50,50,50);

//limpiar el canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

//funcion para dibujar la circunferencia
function dibujarCircunferencia(){
//obtener valores 
const h = parseInt(document.getElementById("h").value);
const k = parseInt(document.getElementById("k").value);
const r = parseInt(document.getElementById("r").value);
limpiarCanvas();
//color del dibujo
ctx.fillStyle ="blue";
//uso de la ecuacion 
for (let x=0;x<canvas.width;x++){
    let y = Math.sqrt(r*r - (x-h)*(x-h))+k;
    ctx.fillRect(x,y,1,1);
    let y2 = -Math.sqrt(r*r - (x-h)*(x-h))+k;
    ctx.fillRect(x,y2,1,1);
}
}



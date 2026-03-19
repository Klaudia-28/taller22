//obtiene el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")//dibuja en 2d

//limpiar el canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
//algoritmo DDA
function dda(x1, y1, x2, y2){
    let dx = x2 -x1;
    let dy = y2 -y1;
    let pasos = Math.max(Math.abs(dx), Math.abs(dy));
    let xIncremento = dx /pasos;
    let yIncremento = dy /pasos;
    let x =x1;
    let y =y1;

    for(let i = 0; i <= pasos; i++){
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
        x += xIncremento;
        y += yIncremento;
    }
}
//funcion para dibujar la circunferencia
function dibujarCircunferencia(){
//obtener valores 
const h = parseInt(document.getElementById("h").value);
const k = parseInt(document.getElementById("k").value);
const r = parseInt(document.getElementById("r").value);
limpiarCanvas();
//color del dibujo
ctx.fillStyle ="black";
//uso de la ecuacion 
for (let x=0;x<canvas.width;x++){
    let valor = r*r - (x - h)*(x - h);
    //validacion del valor
        if (valor >= 0) {
        let y = Math.sqrt(valor) + k;
        ctx.fillRect(x, y, 1, 1);
        let y2 = -Math.sqrt(valor) + k;
        ctx.fillRect(x, y2, 1, 1);
    }
}
}



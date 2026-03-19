const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
//prueba de dibujo
ctx.fillRect(50,50,50,50);

//limpiar el canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
}

//definir variables 
const h = 200;//centro en x
const k = 200;//centro en y
const r = 200;//radio

//uso de la ecuacion 
for (let x=0;x<canvas.clientWidth;x++){
    let y = Math.sqrt(r*r - (x-h)*(x-h))+k;
    ctx.fillRect(x,y,1,1);
    let y2 = -Math.sqrt(r*r - (x-h)*(x-h))+k;
    ctx.fillRect(x,y2,1,1);
}
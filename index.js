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
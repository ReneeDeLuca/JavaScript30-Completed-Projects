const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true

function draw(e){
    if(!isDrawing) return; //stop the function from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY]
    
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    //if line width is great than 100 or less than 1, change direction
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}


//listen for when to start, change isDrawing to true and reset lastX and lastY
canvas.addEventListener('mousedown', (e)=>{ 
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
//draw while mouse is down and moving
 canvas.addEventListener('mousemove', draw);
 //stop drawing on mouse up or mouse out
 canvas.addEventListener('mouseup', ()=> isDrawing = false)
 canvas.addEventListener('mouseout', ()=> isDrawing = false);

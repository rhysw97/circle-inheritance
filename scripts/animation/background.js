//creates variable to allow me to select the canvas
const canvas = document.getElementById('canvas-bg');
//set up canvas for 2d drawin
const ctx = canvas.getContext("2d");

//sets the canvas' width and height to match the window.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//hexagon list to store the hexagons
const hexagonList = [];
//canvas setup

ctx.fillStyle = "#222";
ctx.fillRect(0, 0, canvas.width, canvas.height);




function animate() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < hexagonList.length; i++){
        
        hexagonList[i].draw()
        
        hexagonList[i]._colour = hexagonList[i].colour + 5;
    }

    setTimeout(animate, 200);

}

//class for hexagon
class Hexagon{

    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
        this._colour = 0;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get r(){
        return this._r;
    }

    get colour(){
        return this._colour;
    }

    set colour(value){
        if (value === 'number'){
            this._colour = value;
        } else {
        console.log('Colour value must be a number')
            
    
        }
    }


    draw() {
    
        const a =  2 * Math.PI / 6;
        
        ctx.beginPath()
    
        for(let i = 0; i < 6; i++) {
            ctx.strokeStyle = `hsl(${this._colour}, 100%, 50%)`
            
            ctx.lineTo ( this._x + this._r * Math.cos(a * i), this._y + this._r * Math.sin(a * i));
        }
        ctx.stroke();
        ctx.closePath();
    
    }
}

function createRow(x, y, r) {
    
        let i = 0
        

    while (x <= canvas.width + r){
        const hexagon = new Hexagon(x, y, r)
        hexagonList.push(hexagon);
        const a =  2 * Math.PI / 6;
    
        if (i % 2 === 0) {
            x += r + r * Math.cos(a);
            y += r * Math.sin(a);
        } else {
            x += r + r * Math.cos(a);
            y -= r * Math.sin(a); 
        }
        i++
            
    }
    
    
}
let y = 0;
while ( y <= canvas.height){
    createRow(0, y, 50);
    y += 86;
}
animate();




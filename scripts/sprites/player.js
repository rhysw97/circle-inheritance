
class Player extends Circle {
    constructor() {
        super(canvas.width/2, canvas.height/2, 50, "blue", 100);
        this._keys = {}; //to store keys being pressed
    }
    get keys(){
    
        return this._keys;
    }

    draw(){
        ctx.beginPath(); //begin drawring
        ctx.strokeStyle = this._color; //set the context's (the visual of the object) stroke color to the value within the objects strokeColor property 
        ctx.fillStyle = this._color; // does the same as stroke color but with fill color
        
        ctx.arc(this._xMid, this._yMid, this._radius, 0, 2*Math.PI); //draws a circle at the
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.arc(this._xMid, this._yMid, this._radius - 20, 0, 2*Math.PI); 
        ctx.closePath();
    }
    

    
    move() {
        //if w is being pressed 
        if(this._keys['w']) {
            //if the players midpoint y position is less than radius then move the player to the right side of the screen minus the radius
            if (this._yMid < this._radius){
                this._yMid = canvas.height - this._radius;
            }
            //decrement the players midpoint on the y axis by the players speed
            this._yMid -= this._speed;
        } 

        //if s is being pressed
        if(this._keys['s']) {
            if (this._yMid > canvas.height - this._radius){
                this._yMid = this._radius;
            }
            this._yMid += this._speed;
        }
        //if a is being pressed
        if (this._keys['a']) {
            if( this._xMid < this._radius){
                this._xMid = canvas.width - this._radius;
            }
            this._xMid -= this._speed;
        }
        //if d is being pressed 
        if (this._keys['d']) {
            if (this._xMid > canvas.width - this._radius) {
                this._xMid = this._radius;
            }
            this._xMid += this._speed;
        }
    
    }

}
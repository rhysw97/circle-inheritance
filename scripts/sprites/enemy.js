
class Enemy extends Circle  {
    constructor(xMid, yMid, radius, health) {
        super(xMid, yMid, radius, 'red', health);
        this._xVel = 3;
        this._yVel = 3;
        

    }  
    
    get xVel(){
        return this._xVel;
    }

    get yVel(){
        return this._yVel;
    }


    set xVel(value){
        this._xVel = value;
    }

    set yVel(value){
        this._yVel = value;
    }


    //polymorphism to override circles draw class
    draw(){
        this._health = this._radius;
        super.draw();
    }

    move(){
        
        if (this._xMid + this._radius > window.innerWidth){
            this._xVel = 0 - this._xVel;
        }

        if (this._xMid - this._radius < 0){
            this._xVel = 0 - this._xVel;

        }
        
        if (this._yMid + this._radius > window.innerHeight)
            this._yVel = 0 - this._yVel;

        if (this._yMid - this._radius < 0){
            this._yVel = 0 - this._yVel;
        }
    
        this._xMid += this._xVel;
        this._yMid += this._yVel;
    }

    updateRadius(){
        this._radius = this._health;
    }
}

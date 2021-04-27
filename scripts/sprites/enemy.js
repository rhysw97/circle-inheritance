
class Enemy extends Circle  {
    constructor(xMid, yMid) {
        super(xMid, yMid, 0, 'red', 'hotpink')
        this._health = 0;
        this._xVel = 1;
        this._yVel = 1;

    }  
    
    getRadius(){
        const randomNumber = Math.floor(Math.random() * 3);
   
        switch(randomNumber){
            case 0:
                this._radius = 25;
                break;
            case 1:
                this._radius = 50;
                break;
            case 2:
                this._radius = 100;
                break;
        }
    }

    //polymorphism to override circles draw class
    draw(){
        this.getRadius();
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        this._xMid += 2;
        this._yMid += 2;
        requestAnimationFrame(this.move);
    
    }
}

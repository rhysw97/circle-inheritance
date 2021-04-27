
class Player extends Circle {
    constructor() {
        super(canvas.width/2, canvas.height/2, 50, "blue", 100);
        this._up = false;
        this._down = false;
        this._left = false;
        this._right = false;
    }

    get up(){
        return this._up;
    }

    get down(){
        return this._down;
    }

    get left(){
        return this._left;
    }

    get right(){
        return this._right;
    }

    set up(value){
        this._up = value;
    }

    set down(value){
        this._down = value;
    }

    set left(value){
        this._left = value;
    }

    set right(value){
        this._right = value;
    }
    
    
    movePlayer(speed) {
        if (this._up === true) {
            this._yMid -= speed;
        } 

        if (this._down === true) {
            this._xMid -= speed;
        }

        if (this._left === true) {
            this._yMid += speed;
        }

        if (this._right === true) {
            this._xMid += speed;
        }
    }
}
class Projectile extends Circle {
    constructor (xMid, yMid, velocity) {
       
        super(xMid, yMid, 10, 'grey', 5);
        this.velocity = velocity;
        
    }

    

    move() {
        this._xMid = this._xMid + this.velocity.x;
        this._yMid = this._yMid + this.velocity.y;
    }
}
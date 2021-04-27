//class for circle (will be used to create classes for the different sprites)
class Circle{
    //constructor method to allow me to set class properties (arguments allow me to set property values for each individul object when creating it)
    constructor(xMid, yMid, radius, color='black', health) {
        this._xMid = xMid; 
        this._yMid = yMid;
        this._radius = radius;
        this._color = color;
        this._health = health;
    }


    //getter Methods to allow me to get property using object.property rather than object._property. Can also add logic for error messages
    get xMid(){
        return this._xMid;
    }

    get yMid(){
        return this._yMid;
    }

    get radius(){
        return this._radius;
    }

    get fillColor(){
        return this._fillColor;
    }

    get color(){
        return this._color;
    }

    get health(){
        return this._health
    }
    
    //setter methods for x and y midpoints

    set yMid(value){
        if (value < 1 || typeof value !== 'number'){
            console.log("Invalid Input");
        } else {
            this._yMid = value;
        }
    }

    set xMid(value){
        if (value < 1 || typeof value !== 'number'){
            console.log("Invalid Input");
        } else {
            this._xMid = value;
        }
    }

    //fuction to draw a circle
    draw(){
        ctx.beginPath(); //begin drawring
        ctx.strokeStyle = this._color; //set the context's (the visual of the object) stroke color to the value within the objects strokeColor property 
        ctx.fillStyle = this._color; // does the same as stroke color but with fill color
        ctx.arc(this._xMid, this._yMid, this._radius, 0, 2*Math.PI); //draws a circle at the 
        ctx.fill();
        ctx.stroke();
    }

}

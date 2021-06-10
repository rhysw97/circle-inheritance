//Class to store all the game informations
class Game {
    constructor(){
        this._playerObject = new Player(); 
        this._enemyList = []; // to store each enemy object
        this._projectileList = []; // to store each enemy object
        this._gameState = [];
        this._score = 0;
        this._maxNumOfEnemies = 5;  
    }
    
    //getter methods
    get playerObject(){
        return this._playerObject;
    }

    get enemyList(){
       return this._enemyList;
    }

    get projectileList(){
        return this._projectileList;
     }

    get gameState(){
        return this._gameState;
    }

    get score(){
        return this._score;
    }

    get maxNumOfEnemies(){
        return this._maxNumOfEnemies;
    }

    set score(value) {
        if(typeof value === 'number') {
            this._score = value;
        } else {
            console.log(`Error. Value is not a number: ${value}`);
        }
    }

    set maxNumOfEnemies(value) {
        if(typeof value === 'number') {
            this._maxNumOfEnemies = value;
        } else {
            console.log(`Error. Value is not a number: ${value}`);
        }
    }



    //function selects a returns either 25, 50 and 75 by generating a random number from 0 - 2 
    getRadius(){
        const randomNumber = Math.floor(Math.random() * 3);
   
        switch(randomNumber){
            case 0:
                return 25;
                break;
            case 1:
                return 50;
                break;
            case 2:
                return 75;
                break;
            default:
                console.log('error random number out of range');
        }
    }

    //function to create a new enemies
    spawnEnemies(){
        //this loops while the number of enemies is 
        while(this._enemyList.length < this._maxNumOfEnemies){
            //gets radius for enemy
            const radius = this.getRadius(); 
            const health = radius;
            const yPos = radius; //will set the mid position of circle to
            const xPos = Math.floor(Math.random() * (canvas.width - radius) + radius);
            const enemy = new Enemy(xPos, yPos, radius, health);
            
            this._enemyList.push(enemy);
        }
    }

    //function to display enemies within enemy list
    displayEnemies(){
        for( let i = 0; i < this._enemyList.length; i++){
            this._enemyList[i].draw();
            this._enemyList[i].move();
        }
    }

    //function to display projectiles within projectile list
    displayProjectiles(){
        for( let i = 0; i < this._projectileList.length; i++){
            this._projectileList[i].draw();
            this._projectileList[i].move();
          
        }
    }

    collisionDection(object1, object2, index, list){
    
        //saves difference between the 2 objects passed in center x coordinate
        const xDist = object1.xMid - object2.xMid;

        //does the same with y coordinate
        const yDist = object1.yMid - object2.yMid; 
        //works out hypotinues a^2 + b^2 = c^2 of triangle which gives ditance of objects center points
        const dist =  Math.hypot(xDist, yDist); 
        //console.log(object1.health)
       
        //if the distance between the 2 circles mid points is less than their radius's added together 
        if (dist < object1.radius + object2.radius) {
            list.splice(index, 1) //item at index passed in is spliced from the list passed in
            //decreases object1's health by object 2's health
            object1.health = object1.health - object2.health;
            return true; //retun
            
        }
        return false;
    }

}
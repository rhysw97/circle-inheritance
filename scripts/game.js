
class Game {
    constructor(){
        this._playerObject = new Player(); 
        this._enemyList = [];
        this._gameOver = false;

    }

    get playerObject(){
        return this._playerObject;
    }

    get enemyList(){
        this._enemyList.forEach(enemy => {
            return enemy;
        })
    }

    //Functions
    startMovement(keyPressed){
        
        if (keyPressed.key === 'w') {
            this._playerObject.up = true;
        }

        if (keyPressed.key === 's') {
            this._playerObject.down = true;
        }

        if (keyPressed.key === 'a') {
            this._playerObject.left = true;
        }

        if (keyPressed.key === 'd') {
            this._playerObject.down = true;
        }
        this._playerObject.movePlayer(20)
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         this.gameState()
    }

    stopMovement(keyReleased){
        if (keyReleased.key === 'w') {
            this._playerObject.up = false;
        }

        if (keyReleased.key === 's') {
            this._playerObject.down = false;
        }

        if (keyReleased.key === 'a') {
           this._playerObject.left = false;
        }

        if (keyReleased.key === 'd') {
            this._playerObject.down = false;
        }
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         this.gameState();
    }

    createGameWindow(){

    }

    gameState(){
        this._playerObject.draw()
    }

}
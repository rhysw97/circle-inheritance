const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//sets canvas width and height to the inner width of the 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const player = new Player(); //creates new object of the Player class

const gameObject = new Game();
//tells the 
document.addEventListener('keydown', event => {
    player.keys[event.key] = true; 
})

document.addEventListener('keyup', event => {
    delete player.keys[event.key];
});

document.addEventListener('click', event => {
    //works out distance of the players mid point to the click on both x and y axis and stores the results into the array dist
    const dist = {
        x: event.clientX - player.xMid,
        y: event.clientY - player.yMid
    }

    //finds angle from players midpoint to the click 
    const angleToClick = Math.atan2(dist.y, dist.x)


    //uses the Math libraries cosine and sine functions to find the velocity the projectile would need to reach the click
    const velocity = {
        x: Math. cos(angleToClick) * 4,
        y: Math.sin(angleToClick) * 4
    }
    //creates new projectile object
    const projectile = new Projectile(player.xMid, player.yMid, velocity);
    //pushes projectile object to the beginning of the list   
    gameObject.projectileList.push(projectile);
})

function displayHealth() {
    
}

function gameState() { 
    player.draw();
    gameObject.displayEnemies();
    gameObject.displayProjectiles();
};

//gameLoop
function animate(){
    //gets animation frame
    const requestID = requestAnimationFrame(animate);
    gameObject.spawnEnemies(); //calls gameObjects spawn enemies method 
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the screen
    
    gameState();
    player.move();

    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+gameObject.score, 8, 20);
    
    if (player.health <= 0) {

        cancelAnimationFrame(requestID); //stops animation
        document.cookie = gameObject.score; //stores users score into cookie to display on game over page
        window.location.href = "game-over.html"; //loads game over window 
    }
    //loops through each enemy in the enemylist
    gameObject.enemyList.forEach((enemy, index) => {
     //loops through all projectiles in projectile list
        gameObject.projectileList.forEach((projectile, pIndex) => {
            //uses collision detection function to check if any enemy has colided with any projectile and saves whether it has in enemyHit.
            const enemyHit = gameObject.collisionDection(enemy, projectile, pIndex, gameObject.projectileList);
            if(projectile.xMid > window.innerWidth - projectile.radius || projectile.xMid < projectile.radius){
                gameObject.projectileList.splice(pIndex, 1)
            }

            if(enemyHit === true) {
                gameObject.score = gameObject.score + enemy.radius - enemy.health;
            }
        })
    })

    //loops through the enemy list
    gameObject.enemyList.forEach((enemy, index) => {
        //calls the collison dection method to check if player hit enemy
        gameObject.collisionDection(player, enemy, index, gameObject.enemyList);
        console.log(enemy.health)
        gameObject.score += enemy.radius - enemy.health
        enemy.radius = enemy.health
        if(enemy.health <= 20) {
            gameObject.score = gameObject.score + 100;
            gameObject.enemyList.splice(index, 1);
            gameObject.numOfEnemies = gameObject.numOfEnemies + 1;
        }
    })
    console.log('Score: ' + gameObject.score)

}
animate();
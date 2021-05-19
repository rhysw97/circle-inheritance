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
    console.log(angleToClick)

    //uses the Math libraries cosine and sine functions to find the velocity the projectile would need to reach the click
    const velocity = {
        x: Math. cos(angleToClick) * 4,
        y: Math.sin(angleToClick) * 4
    }
    console.log(velocity);
    const projectile = new Projectile(player.xMid, player.yMid, velocity);
            
    gameObject.projectileList.push(projectile);
})


function bounce(object1, object2){
    object1.health = object1.health - object2.radius;
    console.log(object1.health);
    object2._xVel = 0 - object2.xVel;
    object2._yVel = 0 - object2.yVel;
}

function gameState() { 
    player.draw();
    gameObject.displayEnemies();
    gameObject.displayProjectiles();
};

//gameLoop
function animate(){
    const requestID = requestAnimationFrame(animate);
    gameObject.spawnEnemies();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameState();
    player.move();
    
    if (player.health <= 0) {

        cancelAnimationFrame(requestID);
        awindow.location.href = "game-over.html";  
    }

    gameObject.enemyList.forEach((enemy, index) => {
     
        gameObject.projectileList.forEach((projectile, pIndex) => {
            gameObject.collisionDection(enemy, projectile, pIndex, gameObject.projectileList);
            if(projectile.xMid > window.innerWidth - projectile.radius || projectile.xMid < projectile.radius){
                projectileList.splice(pIndex, 1)
            }
        })
    })

    
    gameObject.enemyList.forEach((enemy, index) => {
        gameObject.collisionDection(player, enemy, index, gameObject.enemyList);
        console.log(enemy.health)
        enemy.radius = enemy.health
        if(enemy.health <= 0) {
            gameObject.enemyList.splice(index, 1);
        }
    })
   

   
   
}

function gameOver(){
    //window.location.href = "game-over.html";      
}

animate();
//need to make player shoot

//function to store everything being drawn to the screen




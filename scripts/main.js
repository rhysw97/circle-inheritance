const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const playerSpeed = 5;

let isKeyDown = false;



const gameObject = new Game();

console.log(gameObject.playerObject.up)


document.addEventListener('keydown', gameObject.startMovement)

document.addEventListener('keyup', gameObject.stopMovement)

const enemy = new Enemy(50, 50);


gameObject.gameState();

console.log(gameObject.playerObject.up)
console.log(enemy)
//gameLoop

//need to make player shoot

//function to store everything being drawn to the screen




const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const tileSize = 40;
const maze = [
  [1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,1],
  [1,0,1,0,1,0,1,1],
  [1,0,1,0,0,0,0,1],
  [1,1,1,1,1,1,0,1],
  [1,0,0,0,0,1,0,1],
  [1,0,1,1,0,0,0,1],
  [1,1,1,1,1,1,1,1],
];
let player = {x: 1, y: 1};

function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[0].length; x++) {
      ctx.fillStyle = maze[y][x] === 1 ? "black" : "white";
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function movePlayer(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;
  if (maze[newY][newX] === 0) {
    player.x = newX;
    player.y = newY;
    drawMaze();
  }
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": movePlayer(0, -1); break;
    case "ArrowDown": movePlayer(0, 1); break;
    case "ArrowLeft": movePlayer(-1, 0); break;
    case "ArrowRight": movePlayer(1, 0); break;
  }
});

drawMaze();

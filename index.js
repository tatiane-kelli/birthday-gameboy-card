const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = { x: 50, y: 300, width: 40, height: 40, speed: 5, img: 'assets/boy.png' };
const items = [
    { x: 200, y: 300, collected: false, img: 'assets/baloon.png' },
    { x: 350, y: 300, collected: false, img: 'assets/gift.png' },
    { x: 500, y: 300, collected: false, img: 'assets/cake.png' },
    { x: 650, y: 300, collected: false, img: 'assets/confetti.png' }
];

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") player.x += player.speed;
    if (e.key === "ArrowLeft") player.x -= player.speed;
});

function checkCollision(item) {
    return player.x < item.x + 40 &&
           player.x + player.width > item.x &&
           player.y < item.y + 40 &&
           player.y + player.height > item.y;
}

const bip = document.getElementById('collectedItemFx');
const levelUp = document.getElementById('levelUpFx');
const backtrack = document.getElementById('gameBacktrack');

window.addEventListener('load', () => {
    bip.load();
    levelUp.load();
    backtrack.load();
});

function playBacktrack() {
    backtrack.loop = true;
    backtrack.volume = 0.05;
    backtrack.play();
}

function stopBacktrack() {
    backtrack.volume = 0;
}

function playBipFx() {
    bip.currentTime = 0;
    bip.volume = 0.3;
    bip.play();
}
  
function playLevelUpFx() {
    levelUp.currentTime = 0;
    levelUp.volume = 0.3;
    levelUp.play();
  }

function updateGame() {
    playBacktrack();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const playerImg = new Image();
    playerImg.src = 'assets/loveofmylife.png';
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    items.forEach(item => {
        if (!item.collected) {
            const img = new Image();
            img.src = item.img;
            ctx.drawImage(img, item.x, item.y, 40, 40);

            if (checkCollision(item)) {
                item.collected = true;
                playBipFx()
            }
        }
    });

    if (items.every(item => item.collected)) {
        document.getElementById("levelUpMessage").style.display = "flex";
        stopBacktrack();
        playLevelUpFx()
    }

    requestAnimationFrame(updateGame);
}

updateGame();

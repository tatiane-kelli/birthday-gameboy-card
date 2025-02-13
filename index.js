const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = { x: 50, y: 300, width: 40, height: 40, speed: 5, img: new Image() };
player.img.src = 'assets/loveofmylife.png';

const items = [
    { x: 200, y: 300, collected: false, img: new Image() },
    { x: 350, y: 300, collected: false, img: new Image() },
    { x: 500, y: 300, collected: false, img: new Image() },
    { x: 650, y: 300, collected: false, img: new Image() }
];

items[0].img.src = 'assets/baloon.png';
items[1].img.src = 'assets/gift.png';
items[2].img.src = 'assets/cake.png';
items[3].img.src = 'assets/confetti.png';

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') player.x += player.speed;
    if (e.key === 'ArrowLeft') player.x -= player.speed;
});

function checkCollision(item) {
    return player.x < item.x + 40 &&
           player.x + player.width > item.x &&
           player.y < item.y + 40 &&
           player.y + player.height > item.y;
}

const bipSound = document.getElementById('collectedItemFx');
const levelUpSound = document.getElementById('levelUpFx');
const backtrack = document.getElementById('gameBacktrack');

window.addEventListener('load', () => {
    bipSound.load();
    levelUpSound.load();
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
    bipSound.currentTime = 0;
    bipSound.volume = 0.3;
    bipSound.play();
}

function playLevelUpFx() {
    levelUpSound.currentTime = 0;
    levelUpSound.volume = 0.3;
    levelUpSound.play();
}

let levelUpSoundPlayed = false;

function updateGame() {
    playBacktrack();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);

    items.forEach(item => {
        if (!item.collected) {
            ctx.drawImage(item.img, item.x, item.y, 40, 40);

            if (checkCollision(item)) {
                item.collected = true;
                playBipFx();
            }
        }
    });

    if (items.every(item => item.collected)) {
        document.getElementById('levelUpMessage').style.display = 'flex';
        stopBacktrack();

        if (!levelUpSoundPlayed) {
            levelUpSoundPlayed = true;
            setTimeout(() => {
                playLevelUpFx();
            }, 100);
        }
    }
    requestAnimationFrame(updateGame);
}

updateGame();

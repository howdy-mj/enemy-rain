let enemy = document.createElement("div");
let enemyLocationX = Math.random() * 755;
let enemyLocationY = 0;

function enemyAppear() {
    enemy.className = "enemy";
    enemy.style.left = `${enemyLocationX}px`;
    enemy.style.top = `${enemyLocationY}px`;
    bg.appendChild(enemy);    
}

const enemyMoveDown = () => {
    // console.log('5초');
    if (enemy.offsetTop >= 525) { 
        enemy.className = "enemy die";
    }
    enemyLocationY += 5;
    enemy.style.top = `${enemyLocationY}px`;
    // console.log(enemy.style.top);
}

function init() {
    enemyAppear();
    setInterval( setInterval(enemyMoveDown, 20), 10);
}
init();
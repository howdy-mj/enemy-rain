const dayingAudio = new Audio('./audio/dying.wav');

const enemyAppear = () => {
    let enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.left = Math.random() * 745 + "px";
    enemy.style.top = 0 +"px";
    bg.appendChild(enemy);
    // console.log(enemy.style.left);

    let enemyLocationY = 0;
    let repeatEnemyDown = setInterval( () => {
        if (enemyLocationY >= 540) { 
            enemy.className = "enemy die";
            if (enemy.style.top = 550 + "px") { 
                enemy.className = "enemy die";
                clearInterval(repeatEnemyDown);
                setTimeout( () => {
                    bg.removeChild(enemy);
                }, 1000);
            }
        }
        enemyLocationY += 5;
        enemy.style.top = `${enemyLocationY}px`;
        // console.log(enemyLocationY);
        
        if (enemyLocationY >= 510) {
        // console.log(`두 값의 차이는 ${hero.offsetLeft - enemy.offsetLeft}`);
            if (hero.offsetLeft - enemy.offsetLeft <= 50  && hero.offsetLeft - enemy.offsetLeft >= -50) {
                dayingAudio.play();
                enemy.className = "enemy die";
                    clearInterval(repeatEnemyDown);
                    setTimeout( () => {
                        bg.removeChild(enemy);
                    }, 300);
            }
        }
    }, 100);
}

setInterval(enemyAppear, 3000);
// enemyAppear();
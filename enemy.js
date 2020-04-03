const enemyAppear = () => {
    let enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.left = Math.random() * 745 + "px";
    enemy.style.top = 0 +"px";
    bg.appendChild(enemy);
    // console.log(enemy.style.left);

    let enemyLocationY = 0;
    setInterval( () => {
        if (enemyLocationY >= 540) { 
            enemy.className = "enemy die";
            if (enemy.style.top = 560 + "px") { 
                bg.removeChild(enemy);
            }
        }
        enemyLocationY += 5;
        enemy.style.top = `${enemyLocationY}px`;
        // console.log(enemyLocationY);

        if (enemyLocationY >= 510) {
        // console.log(`두 값의 차이는 ${hero.offsetLeft - enemy.offsetLeft}`);
            if (hero.offsetLeft - enemy.offsetLeft <= 50  && hero.offsetLeft - enemy.offsetLeft >= -50) {
                enemy.className = "enemy die";

                if (enemyLocationY >= 555) {
                    bg.removeChild(enemy);
                }
            }
        }
    }, 100);
}

setInterval(enemyAppear, 3000);
// enemyAppear();
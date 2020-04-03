const enemyAppear = () => {
    let enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.left = Math.random() * 755 + "px";
    enemy.style.top = 0 +"px";
    bg.appendChild(enemy);

    let enemyLocationY = 0;
    setInterval(
        () => {
         
        if (enemyLocationY >= 525) { 
            enemy.className = "enemy die";
        }
        enemyLocationY += 5;
        enemy.style.top = `${enemyLocationY}px`;
    }
,100);
}

setInterval(enemyAppear, 3000);
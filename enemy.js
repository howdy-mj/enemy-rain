const dayingAudio = new Audio('./audio/dying.wav');

class Enemy {
    constructor(name) {
        this.name = name;
        this.top = 0;
        this.left = Math.random() * 745;
        this.createEnemy();
        console.log(this);
    }

    createEnemy() {
        const bg = document.querySelector("#bg");
        this.enemy = document.createElement("div");
        this.enemy.className = "enemy"
        this.enemy.style.left = this.left + "px";
        this.enemy.style.top = this.top + "px";
        bg.appendChild(this.enemy);
        this.repeatEnemyDown();
    }

    repeatEnemyDown() {
        this.timeoutID = setInterval( () => {
            if (this.top >= 540) { 
                if (this.enemy.style.top = 550 + "px") { 
                    this.enemy.className = "enemy die";
                    clearInterval(this.timeoutID);
                    setTimeout( () => {
                        // console.log(this.enemy);
                        // console.log(bg)
                        bg.removeChild(this.enemy);
                    }, 1000);
                }
            }
            // console.log(this.top);
            // console.log(this.enemy.style.top);

            this.top += 5;
            this.enemy.style.top = this.top + "px";
            // console.log(this.enemy.style.top);
            
            if (this.top >= 510) {
                if (test.left - this.left <= 50  && test.left - this.left >= -50) {
                    dayingAudio.play();
                    this.enemy.className = "enemy die";
                    clearInterval(this.timeoutID);
                    setTimeout( () => {
                        bg.removeChild(this.enemy);
                    }, 300);
                }
            }
        }, 100);
    }
}


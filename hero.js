const bg = document.querySelector("#bg");
const hero = document.createElement("div");
let heroLocation = "382.5";

function turnFront() {
    hero.className = "hero";
    hero.style.left = `${heroLocation}px`;
    bg.appendChild(hero);
}

function init() {
    turnFront();
    
    document.addEventListener("keydown", function(e){
        if (e.keyCode === 37) { // 왼쪽
            if (hero.style.left === "-2.5px") { return }
            hero.style.background = "url('./images/hero.png') 70px";
            heroLocation -= 5;
            // console.log(heroLocation);
            hero.style.left = `${heroLocation}px`;
        }  else if (e.keyCode === 39) { // 오른쪽
            if (hero.style.left === "767.5px") { return }
            hero.style.background = "url('./images/hero.png') 35px"; 
            heroLocation += 5;
            hero.style.left = `${heroLocation}px`;
        }
            
        if (e.keyCode === 38) { // 위
            hero.style.background = "url('./images/hero.png') 105px"; 
        } else if (e.keyCode === 40) { // 아래
            hero.style.background = "url('./images/hero.png') 140px"; 
        }
    });

}
init();
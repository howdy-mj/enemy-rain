const bg = document.querySelector("#bg");
const div = document.createElement("div");

function turnFront() {
    div.className = "hero";
    bg.append(div);    
}

function init() {
    turnFront();
    
    document.addEventListener("keydown", function(e){
        if (e.keyCode === 37 && div.offsetLeft > 0) {
            // 왼쪽
            div.style.background = "url('./images/hero.png') 70px";
        } else if (e.keyCode === 38) {
            // 위
            div.style.background = "url('./images/hero.png') 105px"; 
        } else if (e.keyCode === 39) {
            // 오른쪽
            div.style.background = "url('./images/hero.png') 35px"; 
        } else if (e.keyCode === 40) {
            // 아래
            div.style.background = "url('./images/hero.png') 140px"; 
        }
    });

}
init();
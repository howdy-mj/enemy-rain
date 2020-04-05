let test = new Hero("test-one");
// let ghost = new Enemy("ghost-one");
let ghost;

// setInterval(() => {
//    new Enemy('ghost')
// }, 3000);
setInterval(() => {
    ghost = new Enemy('ghost');
}, 3000);

document.addEventListener("keydown", function(e){
    // console.log(test);
    if (e.keyCode === 37) { // 왼쪽
        // console.log("왼쪽 키");
        test.hero.className = "hero left";
        test.moveLeft();
    }  else if (e.keyCode === 39) { // 오른쪽
        // console.log("오른쪽 키");
        test.hero.className = "hero right";
        test.moveRight();
    }

    if (test.left <= -2.5) {
        // console.log('왼쪽 끝');
        test.hero.style.left = "-2.5px";
    }
    if (test.left >= 767.5) {
        // console.log('오른쪽 끝');
        test.hero.style.left = "767.5px";
    }
    
    if (e.keyCode === 38) { // 위
        // console.log("위 키");
        test.hero.className = "hero back"; 
    } else if (e.keyCode === 40) { // 아래
        // console.log("아래 키");
        test.hero.className = "hero front";
    }
});
// class Hero {
  
// }


function getHero() {
    const div = document.createElement("div");
    const bg = document.querySelector("#bg");
    // console.log(bg);
    div.className = "hero";
    bg.append(div);
}

function init() {
    getHero();
}
init();
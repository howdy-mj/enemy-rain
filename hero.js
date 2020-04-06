class Hero {
    constructor(name) {
        this.name = name;
        this.bottom = 0;
        this.left = 382.5;
        this.createHero();
    }

    createHero() {
        const bg = document.querySelector("#bg");
        this.hero = document.createElement("div");
        this.hero.className = "hero front";
        this.hero.style.left = this.left + "px";
        this.hero.style.bottom = this.bottom + "px";
        bg.appendChild(this.hero);
    }

    moveRight() {
        // console.log("moveR");
        // console.log(this.hero.style.left);
        this.left += 5;
        this.hero.style.left = this.left + "px";
        // console.log(this.hero.style.left);
    }

    moveLeft() {
        // console.log("moveL");
        this.left -= 5;
        this.hero.style.left = this.left +"px";
    }
}
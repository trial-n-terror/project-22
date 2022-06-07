class Prototype extends Game {
    #player;
    #map;
    #enemies = [];
    constructor() { 
        super();

        noiseSeed(3);

        this.#player = new Player(100, 100);
        this.#map = new Map(15);

        this.#enemies.push(new Enemy(300, 300, this.#player.Position));
    }

    Update() { 
        translate(-this.#player.Position.x + width / 2, -this.#player.Position.y + height / 2);
    }
}
class Prototype extends Game {
    #player;
    #map;
    constructor() { 
        super();

        noiseSeed(3);

        this.#player = new Player(100, 100);
        this.#map = new Map(15);
    }

    Update() { 
        translate(-this.#player.Position.x + width / 2, -this.#player.Position.y + height / 2);
    }
}
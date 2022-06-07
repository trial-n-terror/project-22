class Map extends GameObject {
    #tileGridSize = 5;

    #tiles = [];

    constructor(tileGridSize) {
        super(0, 0, 0, 0);

        this.#tileGridSize = tileGridSize;

        this.#tiles.push(new MapTile(0, 0, this.#tileGridSize));
        this.#tiles.push(new MapTile(1, 1, this.#tileGridSize));
        this.#tiles.push(new MapTile(0, 1, this.#tileGridSize));
        this.#tiles.push(new MapTile(1, 0, this.#tileGridSize));
    }

    PixelPosToTilePos(xyPos) {
        return createVector(Math.floor(xyPos.x / (this.#tileGridSize * Settings.GridSize)), Math.floor(xyPos.y / (this.#tileGridSize * Settings.GridSize)));
    }
}
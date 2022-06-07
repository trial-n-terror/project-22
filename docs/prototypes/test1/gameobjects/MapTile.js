class MapTile extends GameObject {
    #gridSize = 5;
    #obstacles = [];
    #values = [];
    constructor(x, y, gridSize) {
        super(x * Settings.GridSize * gridSize, y * Settings.GridSize * gridSize, 0, 0);

        this.#gridSize = gridSize;

        this.#InitObstacles();
    }

    #InitObstacles() {
        for (let y = 0; y < this.#gridSize; ++y) {
            for (let x = 0; x < this.#gridSize; ++x) {
                let noiseVal = noise(
                    .005 * (this.Position.x + (x * Settings.GridSize)), 
                    .005 * (this.Position.y + (y * Settings.GridSize))
                    );
                this.#values.push(noiseVal);
                if (noiseVal < .3) {
                    this.#obstacles.push(new Obstacle(this.Position.x + (x * Settings.GridSize), this.Position.y + (y * Settings.GridSize)));
                }
            }
        }
    }


    Update() {
        // fill("black");
        // circle(0, 0, 10);

        
        // for (let y = 0; y < this.#gridSize; ++y) {
        //     for (let x = 0; x < this.#gridSize; ++x) {
        //         let noiseVal = this.#values[(y * this.#gridSize) + x];
        //         fill(noiseVal * 255,noiseVal * 255,noiseVal * 255,250);
        //         rect((x * Settings.GridSize), (y * Settings.GridSize), 48, 48);
        //         fill("black");
        //         text(noiseVal.toFixed(2), (x * Settings.GridSize), (y * Settings.GridSize));
        //     }
        // }
    }
}
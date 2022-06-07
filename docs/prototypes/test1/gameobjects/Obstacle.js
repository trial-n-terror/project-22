class Obstacle extends GameObject {
    constructor(x, y) {
        super(x, y, Settings.GridSize, Settings.GridSize);
        this.CollisionLayer = Settings.Layers.OBSTACLES;
        this.SetDefaultCollider();
    }

    Update() {
        fill("green");
        rect(0, 0, this.Width + 1, this.Height + 1);
    }
}
class Projectile extends GameObject {
    #maxHits = 2;

    #origin = createVector(0, 0);
    #range = 0;
    #moveTics = 0;

    #enemiesHit = [];

    constructor(x, y, w, h, range = -1, maxHits = -1) {
        super(x, y, w, h);
        this.#origin = createVector(x, y);
        this.#range = range;
        this.#maxHits = maxHits;

        this.SetDefaultCollider();

        // empty the enemiesHit list every 100 ms
    }

    get EnemiesHit() {
        return this.#enemiesHit;
    }

    get MoveTics() {
        return this.#moveTics;
    }

    OnOverlap(otherSprites) {
        otherSprites.forEach(sprite => {
            if (sprite instanceof Enemy && this.#enemiesHit.includes(sprite) === false) {
                sprite.Hit();
                if (this.#maxHits > 0) {
                    this.#maxHits--;
                }
                this.#enemiesHit.push(sprite);
            }
        });
    }

    MoveTo(x, y) {
        this.Position.x = x;
        this.Position.y = y;
    }

    Update() {
        this.#moveTics++;
        
        fill("cyan");
        rect(0, 0, this.Width, this.Height);

        if (this.#maxHits == 0) {
            this.Remove();
        }
        if (this.#range > -1 && this.Position.dist(this.#origin) > this.#range) {
            this.Remove();
        }
    }
}
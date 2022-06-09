class Enemy extends GameObject {
    #speed = 1;
    #goal = 5;
    #hasHitPlayer = false;
    #gotHit = false;
    #hitPoints = 10;

    constructor(x, y, goal) {
        super(x, y, 50, 50);
        this.#goal = goal;
        this.CollisionLayer = Settings.Layers.GROUNDENEMIES;
        this.SetDefaultCollider();
    }

    Update() {

        if (this.#gotHit) {
            fill("magenta")
        }
        else {
            fill("blue");
        }

        rect(0, 0, this.Width, this.Height);

        let goto = createVector(0, 0);

        goto = p5.Vector.sub(this.#goal, this.Position);

        if (goto.magSq() >= this.#speed * this.#speed) {
            goto.normalize();
            this.Position.add(goto.mult(this.#speed));
        }
    }

    Hit() {
        new HitText(this.Position.x, this.Position.y - this.Height / 2);
        this.#gotHit = true;
        setTimeout(() => {
            this.#gotHit = false
        }, 50);

        console.log("hit")

        this.#hitPoints--;
        if (this.#hitPoints <= 0) {
            this.Remove();
        }
    }

    OnOverlap(otherSprites) {
        otherSprites.forEach(sprite => {
            if (sprite instanceof Player && this.#hasHitPlayer === false) {
                console.log("hit!");
                this.#hasHitPlayer = true
                sprite.Hit();
                this.#HitPlayer();
            }
        });
    }

    #HitPlayer() {
        setTimeout(() => {
            this.#hasHitPlayer = false
        }, 500);
    }
}
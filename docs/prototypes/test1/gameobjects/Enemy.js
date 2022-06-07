class Enemy extends GameObject { 
    #speed = 1;
    #goal = 5;
    #hasHitPlayer = false;
    constructor(x, y, goal) { 
        super(x, y, 50, 50);
        this.#goal = goal;
        this.CollisionLayer = Settings.Layers.GROUNDENEMIES;
        this.SetDefaultCollider();
    }

    Update() { 
        fill("blue");
        rect(0, 0, this.Width, this.Height);

        let goto = createVector(0, 0);
        
            goto = p5.Vector.sub(this.#goal, this.Position);

        if (goto.magSq() >= this.#speed * this.#speed) {
            goto.normalize();
            this.Position.add(goto.mult(this.#speed));
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
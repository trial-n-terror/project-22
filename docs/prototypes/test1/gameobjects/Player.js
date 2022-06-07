class Player extends GameObject { 
    #speed = 5;
    #hitBy = [];

    constructor(x, y) { 
        super(x, y, 50, 50);
        this.CollisionLayer = Settings.Layers.PLAYER;
        this.SetDefaultCollider();
    }

    Update() { 
        fill("red");
        rect(0, 0, this.Width, this.Height);

        let goto = createVector(0, 0);

        if (keyIsDown(LEFT_ARROW) === true) { 
            goto.add(createVector(-this.#speed, 0));
        }
        if (keyIsDown(RIGHT_ARROW) === true) { 
            goto.add(createVector(this.#speed, 0));
        }
        if (keyIsDown(UP_ARROW) === true) { 
            goto.add(createVector(0, -this.#speed));
        }
        if (keyIsDown(DOWN_ARROW) === true) { 
            goto.add(createVector(0, this.#speed));
        }

        if (mouseIsPressed === true) {
            goto = p5.Vector.sub(createVector(mouseX, mouseY), createVector(width/2, height/2));
        }

        if (goto.magSq() >= this.#speed * this.#speed) {
            goto.normalize();
            this.Position.add(goto.mult(this.#speed));
        }
    }

    Hit() {
        new HitText(this.Position.x, this.Position.y - this.Height / 2);
    }


    // OnOverlap(otherSprites) {
    //     otherSprites.forEach(sprite => {
    //         if (sprite instanceof Enemy && this.#hitBy.includes(sprite) === false) {
    //             console.log("hit!");
    //             this.#hitBy.push(sprite);
    //             this.#GetHit(sprite);
    //         }
    //     });
    // }

    // #GetHit(enemy) {
    //     setTimeout(() => {
    //         this.#hitBy = this.#hitBy.filter(x => x != enemy)
    //     }, 500);
    // }
}
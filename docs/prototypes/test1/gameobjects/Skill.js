

class Skill extends GameObject {

    static SkillTypes = {
        PROJECTILE: 0,
        MELEE: 1
    };
    static SkillDirections = {
        TOP: 0,
        LEFT: 1,
        RIGHT: 2,
        BOTTOM: 3,
        FORWARD: 4,
        BACKWARD: 5,
        RANDOM: 6
    }

    #enemiesHitThisTic = [];

    #skillType = Skill.SkillTypes.MELEE;
    #ticRate = 500;
    #hitsBeforeDestruction = 1;
    #maxHitsBeforeDestruction = 2;
    #direction = Skill.SkillDirections.FORWARD;

    #parent = null;

    #active = false;

    constructor(parent, w, h) {
        super(parent.Position.x, parent.Position.y, w, h);
        this.SetDefaultCollider();

        this.#parent = parent;

        setInterval(() => {
            this.#enemiesHitThisTic.forEach(e => {
                e.Hit();
            });
            this.#active = true;
            setTimeout(() => this.#active = false, 100)
            this.#enemiesHitThisTic = [];
            this.#hitsBeforeDestruction = this.#maxHitsBeforeDestruction;
        }, this.#ticRate);
    }

    Update() {
        this.Position = this.#parent.Position.copy();

        switch(this.#direction) {
            case Skill.SkillDirections.FORWARD: 
            let forward = createVector(this.#parent.ViewDirection.x, 0).normalize();
            this.Position.x += forward.x * this.Width / 2;
            break;
        }

        if (this.#active) {
            fill("cyan");
        }
        else {
            noFill();
        }
        rect(0, 0, this.Width, this.Height);
    }


    OnOverlap(otherSprites) {
        otherSprites.forEach(sprite => {
            if (sprite instanceof Enemy && 
                this.#enemiesHitThisTic.includes(sprite) === false) 
            {
                this.#hitsBeforeDestruction--;
                if (this.#hitsBeforeDestruction < 0) {
                    return;
                }

                
                this.#enemiesHitThisTic.push(sprite);
            }
        });
    }
}
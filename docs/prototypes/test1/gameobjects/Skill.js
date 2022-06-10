class Skill extends GameObject {

    static SkillDirections = {
        // TOP: 0,
        // LEFT: 1,
        // RIGHT: 2,
        // BOTTOM: 3,
        FORWARD: 4,
        // BACKWARD: 5,
        // RANDOM: 6,
        CIRCULAR: 7
    }

    #fireTicRate = 500;
    #hitTicRate = 500;
    #range = 0;
    #projectileOrigin = createVector(0, 0);
    #skillDirection = Skill.SkillDirections.FORWARD;
    #projectiles = [];

    #parent = null;

    constructor(parent, projectileOrigin, skillDirection, fireFrequency, hitFrequency, range) {
        super(parent.Position.x, parent.Position.y, 0, 0);
        this.#parent = parent;

        this.#skillDirection = skillDirection;
        this.#projectileOrigin = projectileOrigin;
        this.#fireTicRate = fireFrequency;
        this.#hitTicRate = hitFrequency;
        this.#range = range;

        if (this.#fireTicRate > -1) {
            setInterval(() => {
                this.#Shoot();
            }, this.#fireTicRate);
        }
        else {
            this.#Shoot();
        }
    }

    #Shoot() {
        let startPos = p5.Vector.add(this.Position, this.#projectileOrigin);
        let dir = this.#parent.ViewDirection;
        let projectile = new Projectile(startPos.x, startPos.y, 25, 25, 100, 1);
        projectile.SetSpeed(5, degrees(dir.heading()));
        this.#projectiles.push(projectile);
    }

    Update() {
        this.Position = this.#parent.Position.copy();
        switch(this.#skillDirection) {
            case Skill.SkillDirections.FORWARD:
                break;
            case Skill.SkillDirections.CIRCULAR: 
                this.#projectiles.forEach(p => {
                    let angle = p.Velocity.heading();
                    angle += .05;
                    p.SetSpeed(5, degrees(angle));
                })
                break;
        }
    }
}
class HitText extends GameObject { 
    #opacity = 200;
    constructor(x, y) { 
        super(x, y, 0, 0);
    }

    Update() { 
        fill(0, 0, 0, this.#opacity);
        textSize(32);
        textAlign(CENTER);
        text("Ouch!", 0, 0);


        this.Position.y -= .5;
        
        this.#opacity--;
        if (this.#opacity <= 0) {
            this.Remove();
        }
    }
}
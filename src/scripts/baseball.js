
class Baseball {
    constructor() {
        this.x = 295;
        this.y = 260;
        this.dx = 0
        this.dy = 1.5
        this.baseballWidth = 32
        this.baseballHeight = 32;
        this.width = this.baseballWidth * 2
        this.height = this.baseballHeight * 2
        this.frame = 0
        this.gameFrame = 0
        this.staggerFrames = 7
        this.image = new Image()
        this.image.src = './imgs/baseballSprite.png'
    }

    updateHomer() {
        this.gameFrame++
        if (this.gameFrame % 4 == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }

        if (this.y > 350) {
            this.dx = Math.random() * 4 - 2;
            this.dy = -2;
        }
        this.x += this.dx
        this.y += this.dy;
    }

    updateFlyOut(){ 
        this.gameFrame++
        if (this.gameFrame % 4 == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }

        if (this.y > 350) {
            this.dx = Math.random() * 4 - 2;
            this.dy = -2;
        } 
        if (this.y < 140) { 
            this.dx = 0;
            this.dy = 0;
        }
        this.x += this.dx
        this.y += this.dy
    }



    updateStrikeOut() { 
        this.gameFrame++
        if (this.gameFrame % 4 == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
            }
            this.x += this.dx
            this.y += this.dy
    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, this.frame * this.baseballHeight, this.baseballWidth, this.baseballHeight, this.x, this.y, this.width, this.height)
        //ctx.drawImage(image, 0, 0, 32, dynamic, x, y, this.width, how tall pic is)
    }

    resetBaseball() { 
        this.frame = 0
        this.gameFrame = 0
        this.dx = 0
        this.dy = 1.5
        this.x = 295
        this.y = 260
    }

}

export default Baseball;



       
 

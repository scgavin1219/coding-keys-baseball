//import Field from './scripts/field'

class Batter {
    constructor() {
        this.x = 255
        this.y = 330
        this.batterWidth = 32;
        this.batterHeight = 32;
        this.width = this.batterWidth * 4
        this.height = this.batterHeight * 4
        this.frame = 0
        this.gameFrame = 0
        this.image = new Image();
        this.image.src = './imgs/batterSprite.png'
        //this.staggerFrames = 10
    }

    updateBatter(ctx) {
        this.gameFrame++
        if (this.gameFrame % 15 == 0 && this.gameFrame > 20) {
            if (this.frame > 3) {
                ctx.drawImage(this.image, 0, 4 * this.batterHeight, this.batterWidth, this.batterHeight, this.x, this.y, this.width, this.height)
            } else {
                this.frame++
             }
        }
    }

    drawBatter(ctx) {
        //c.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, 0, this.frame * this.batterHeight, this.batterWidth, this.batterHeight, this.x, this.y, this.width, this.height)

    }

    batterReset(ctx) { 
        this.gameFrame = 0
        this.frame = 0
        this.drawBatter(ctx)
    }

}

export default Batter

// drawRunner() {
//     let dx = 0;
//     let dy = 0;

//     c.fillStyle = "green"
//     c.fillRect(x, y, 20, 20)
//     console.log("RUN")
//     if (this.x > 600 || this.y < 200) {
//         dx = -dx
//     }
//     if (this.x < 200 || this.x > 600) {
//         dx = -dx
//     }
//     this.x += dx
//     this.y += dy
// }
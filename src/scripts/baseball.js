
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



// const baseball = new Image();
// baseball.src = './imgs/baseballSprite.png'
// const baseballWidth = 32;
// const baseballHeight = 32;
// let frameY = 0;
// let gameFrame = 0;
// const staggerFrames = 7;

// const baseball1 = new Baseball();

// function animate() {
//     c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     c.drawImage(background, 0, 0)
//     baseball1.draw();
//     baseball1.update()

//     requestAnimationFrame(animate)
// }


// animate()

    
        
 


























//     drawOut() {
//         x = 400
//         y = 400
//         let dx = 0
//         let dy = 1
//         c.fillStyle = "white"
//         c.fillRect(x, y, 20, 20)

//         if (y > 600) {
//             dx = 0.5;
//             dy = -1
//         }
//         if (y < 200) {
//             dx = 0
//             dy = 0
//         }
//         x += dx
//         y += dy
//     }

//     drawHomerun() {
//         x = 400
//         y = 400
//         let dx = 0
//         let dy = 1
//         console.log("homer")
//         c.fillStyle = "white"
//         c.fillRect(x, y, 10, 10)

//         if (y > 600) {
//             dx = -0.5;
//             dy = -1;
//         }
//         x += dx
//         y += dy
//     }
// }
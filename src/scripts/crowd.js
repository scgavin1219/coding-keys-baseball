
class Crowd { 
    constructor() { 
            this.x = Math.random() * 450
            this.y = Math.random * 20
            this.crowdWidth = 32;
            this.crowdHeight = 32;
            this.width = this.crowdWidth * 1
            this.height = this.crowdHeight * 1
            this.frame = 0
            this.gameFrame = 0
            this.crowdMember = Math.floor(Math.random() * 15)
            this.image = new Image();
            this.image.src = './imgs/crowd.png'
            this.bleachers = []
            
    }


    drawFan(ctx) {
        ctx.drawImage(this.image, 0, this.crowdMember * this.crowdHeight, this.crowdWidth, this.crowdHeight, this.x, this.y, this.width, this.height)
    }
}

export default Crowd

class Crowd { 
    constructor(x, y , crowdMember) { 
            this.x = x
            this.y = y
            this.dx = 0
            this.dy = 0
            this.crowdWidth = 12;
            this.crowdHeight = 12;
            this.width = this.crowdWidth * 2
            this.height = this.crowdHeight * 2
            this.frame = 0
            this.gameFrame = 0
            this.crowdMember = crowdMember
            this.image = new Image();
            this.image.src = './imgs/crowd2.png'
           
            
            
    }
 

    drawFan(ctx) {
        //
        ctx.drawImage(this.image, 0, this.crowdHeight * this.crowdMember, this.crowdWidth, this.crowdHeight, this.x, this.y, this.width * 1.5, this.height * 1.5)
    }

    updateFanOut() { 
        this.dx = Math.random() /2 - 0.25
        this.dy = Math.random() /2 - 0.25

        this.x += this.dx
        this.y += this.dy
    }

    updateFanHomer() { 
        this.dx = Math.random() - 0.5
        this.dy = Math.random() - 0.5

        this.x += this.dx
        this.y += this.dy
    }

    
}

export default Crowd
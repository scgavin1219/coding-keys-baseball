
class Crowd { 
    constructor(x, y , crowdMember) { 
            this.x = x
            this.y = y
            this.dx = Math.random()
            this.dy = Math.random()
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
    // now this is in game class

    // crowdGenerator() {
    //     let bleachers = []
    //     for (let i = 0; i < 25; i++) { 
    //         bleachers.push(new Crowd())
    //     }
    //     return bleachers
    // }

    drawFan(ctx) {
        //
        ctx.drawImage(this.image, 0, this.crowdHeight * this.crowdMember, this.crowdWidth, this.crowdHeight, this.x, this.y, this.width * 1.5, this.height * 1.5)
    }

    updateFan() { 
        // this.gameFrame++

        // this.dx = Math.random()/10
        // this.dy = Math.random()/10

        this.x += this.dx
        this.y += this.dy
    }
}

export default Crowd
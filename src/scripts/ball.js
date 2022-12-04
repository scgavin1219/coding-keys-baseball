

class Ball { 
    constructor(status) { 
        this.status = status;
        this.x = 400;
        this.y = 250;
        this.width = 20;
        this.height = 20;
        this.image = new Image();
        //this.image.src = //where it is 
    }

    drawOut() {
        let x = 400
        let y = 400
        let dx = 0
        let dy = 1
        c.fillStyle = "red"
        c.fillRect(x, y, 20, 20)

        if (y > 600) {
            dx = 0.5;
            dy = -1
        }
        if (y < 200) {
            dx = 0
            dy = 0
        }
        x += dx
        y += dy
    }

    drawHomerun() {
        let x = 400
        let y = 400
        let dx = 0
        let dy = 1
        console.log("homer")
        c.fillStyle = "blue"
        c.fillRect(x, y, 10, 10)

        if (y > 600) {
            dx = -0.5;
            dy = -1;
        }
        x += dx
        y += dy
    }
}
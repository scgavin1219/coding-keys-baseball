//import Field from './scripts/field'

class Batter { 
    constructor(status) { 
        //this.status = status
        this.x = 400
        this.y = 400
        this.width = 30;
        this.height = 30;
        this.image = new Image();
        //this.image = //...src
    }

    draw(c) { 
        

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
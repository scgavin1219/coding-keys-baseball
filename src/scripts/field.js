
class Field { 
        constructor() { 
            this.x = 0
            this.y = 0
            this.width = 690;
            this.height = 500;
        }

    makeField(c) { 
        const background = new Image()
        background.src = "./imgs/homerun.png";
        c.drawImage(background, 0, 0)
        
        console.log(background)

    }
}


export default Field


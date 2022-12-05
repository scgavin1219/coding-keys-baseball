//NOT IN USE ANYMORE


class Field { 
        constructor() { 
            this.x = 0
            this.y = 0
            this.width = 690;
            this.height = 500;
            //this.image = new Image();
            //this.image.src = './imgs/baseballfield.png'
            //c.drawImage(backgroun)
            //this.makeField()
        }

    makeField(c) { 
        //const CANVAS_WIDTH = this.width = 690;
        //const CANVAS_HEIGHT = this.height = 500;
        
        const background = new Image()
        background.src = "./imgs/homerun.png";
        c.drawImage(background, 0, 0)
        
        console.log(background)


    }
}


export default Field



    // const canvasEl = document.getElementById("myCanvas");

    // console.log(canvasEl)

    // canvasEl.width = 800;
    // canvasEl.height = 600;
    // const ctx = canvasEl.getContext("2d");
    
    // //dugouts
    // ctx.fillStyle = "green";
    // ctx.fillRect(0, 0, 800, 700)
    // ctx.fillStyle = "yellow"
    // ctx.fillRect(0, 300, 75, 200)
    // ctx.fillStyle = "blue"
    // ctx.fillRect(725, 300, 75, 200)

    // //basepaths
    // ctx.beginPath()
    // ctx.moveTo(400, 400)
    // ctx.lineTo(250, 250)
    // ctx.lineTo(400, 100)
    // ctx.lineTo(550, 250)
    // ctx.lineTo(380, 420)
    // ctx.lineWidth = 60
    // ctx.strokeStyle = 'brown'
    // ctx.stroke()

    // //foullines
    // ctx.beginPath()
    // ctx.moveTo(0, 0)
    // ctx.lineTo(400, 400)
    // ctx.lineTo(800, 0)
    // ctx.strokeStyle = "white"
    // ctx.lineWidth = 2
    // ctx.stroke()

    // //mound
    // ctx.beginPath();
    // ctx.arc(400, 250, 20, 0, Math.PI * 2, false)
    // ctx.fillStyle = 'brown'
    // ctx.fill()
    // ctx.stroke();

    // //bases
    // //home @ (400, 400)
    // ctx.beginPath()
    // ctx.arc(400, 400, 7, 0, Math.PI * 2, false)
    // ctx.fillStyle = 'white'
    // ctx.fill()
    // ctx.stroke();

    // //first @ 550, 250
    // ctx.beginPath()
    // ctx.arc(550, 250, 7, 0, Math.PI * 2, false)
    // ctx.fillStyle = 'white'
    // ctx.fill()
    // ctx.stroke();

    // //second @400, 100
    // ctx.beginPath()
    // ctx.arc(400, 100, 7, 0, Math.PI * 2, false)
    // ctx.fillStyle = 'white'
    // ctx.fill()
    // ctx.stroke();

    // //third @  250, 250 
    // ctx.beginPath()
    // ctx.arc(250, 250, 7, 0, Math.PI * 2, false)
    // ctx.fillStyle = 'white'
    // ctx.fill()
    // ctx.stroke();
  
    // }


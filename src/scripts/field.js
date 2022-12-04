
class Field { 
        constructor() { 
            this.makeField()
        }

    makeField() { 
        const canvas = document.getElementById("myCanvas")
        console.log(canvas)
        const c = canvas.getContext("2d")
        const CANVAS_WIDTH = canvas.width = 690;
        const CANVAS_HEIGHT = canvas.height = 500;

        const background = new Image()
        background.src = './imgs/baseballfield.png';
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


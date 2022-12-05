import Field from "./field"
import StopWatch from "./stopwatch"
import Baseball from "./baseball"
import Batter from "./batter"

// const canvas = document.getElementById("myCanvas")
// console.log(canvas)
// const c = canvas.getContext("2d")
// const CANVAS_WIDTH = 690;
// const CANVAS_HEIGHT = 500;
// const field = new Field()
// field.makeField(c)



class Game { 
    constructor(ctx) { 
        // this.field = new Field()
        // this.field.makeField(c)
        this.stopwatch = new StopWatch()
        this.baseball = new Baseball()
        this.ctx = ctx
        this.stopwatchRunning = false
        this.animate = this.animate.bind(this)
        this.animate()
    }
    animateField() {
        //animating 
        const background = new Image();
        background.src = "./imgs/baseballfield.png";
        this.ctx.drawImage(background, 0, 0, 690, 500);
  
    }

    animateBaseball() { 

    }

    animateBatter() { 
    
    }

    animate() { 
        this.ctx.clearRect(0, 0, 690, 500)
        this.animateField()

        requestAnimationFrame(this.animate)
    }


    gameloop() { 
        
    }

}















//     animate() { 
//         c.clearRect(0, 0, 690, 500)


//         requestAnimationFrame(animate())

//     }

   

//     out() {
//         drawOut()
//         setTimeout(() => {
//             drawRunner()
//             console.log("idk")
//         }, 2000);

//     }

//     homer() {
//         drawHomerun()
//         setTimeout(() => {
//             drawRunner()
//         }, 500);
//     }

//     animate() {
//         requestAnimationFrame(animate);
//         drawField()
//         //console.log("idk")
//         drawRunner()
//         setTimeout(() => {
//             drawHomerun()
//         }, 2000)
//     //out()
//     }

    
// }


export default Game


 //moved to ball class

    // drawHomerun() {
    //     let x = 400
    //     let y = 400
    //     let dx = 0
    //     let dy = 1
    //     console.log("homer")
    //     c.fillStyle = "blue"
    //     c.fillRect(x, y, 10, 10)

    //     if (y > 600) {
    //         dx = -0.5;
    //         dy = -1;
    //     }
    //     x += dx
    //     y += dy
    // }
    //moved to ball class

    // drawOut() {
    //     let x = 400
    //     let y = 400
    //     let dx = 0
    //     let dy = 1
    //     c.fillStyle = "red"
    //     c.fillRect(x, y, 20, 20)

    //     if (y > 600) {
    //         dx = 0.5;
    //         dy = -1
    //     }
    //     if (y < 200) {
    //         dx = 0
    //         dy = 0
    //     }
    //     x += dx
    //     y += dy
    // }


    //moved to batterclass
    // drawRunner() {
    //     let z = 400
    //     let w = 600
    //     let dz = 1
    //     let dw = -1

    //     c.fillStyle = "green"
    //     c.fillRect(z, w, 20, 20)
    //     console.log("RUN")
    //     if (z > 600 || z < 200) {
    //         dz = -dz
    //     }
    //     if (w < 200 || w > 600) {
    //         dw = -dw
    //     }
    //     z += dz
    //     w += dw
    // }



// createBatter(){
//     //batters position
//     let batter = new Batter()
// }

// checkBase(batter) {
//     let first = (650, 250)
// }

// allBatters() {
//     return [].concat(this.batter);
// }

// draw() {
//     ctx.clearRect(0, 0, 800, 600);
//     this.field.makeField;
//     ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
//     this.allBatters().forEach((batter) => {
//         batter.draw(ctx);
//     });
// }

// animate(time) {
//     const timeDelta = time - this.lastTime;
//     this.game.step(timeDelta);
//     this.game.draw(this.ctx);
//     this.lastTime = time;
//     // every call to animate requests causes another call to animate
//     requestAnimationFrame(this.animate.bind(this));

// }


// advance() {
//     let x;
//     let y;
//     let dX = 1;
//     let dY = 1;
//     if (batter.pos === this.firstBase) {

//     }

//     if (batter.pos === this.secondBase) {

//     }

//     if (batter.pos === this.thirdBase) {

//     }

//     if (batter.pos === this.homeBase) {

//     }

// }



















// // let EASY_TIME_LIMIT = 3000;
// // let MEDIUM_TIME_LIMIT = 2000;
// // let PITCHES = ["~", "`", "|", "/", "<", ">", "[", "]", "!", "@", "$", "#",
// //                     "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "'", ";",
// //                     ":", "?", "\\", "{", "}" ]

// // class Game { 
// //     constructor(field) {
// //         this.field = field 

// //     }

// //     getPitch() { 
// //     //get a random charachter from PITCHES
// //      let pitch = PITCHES[Math.floor(Math.random() * PITCHES.length)];
// //      //creates a new h3 element for the character
// //      const pitchHeader = document.createElement('h3');
// //      pitchHeader.innerText= pitch;  
// //      //attaches the H3 to the pitch input class
// //      let parent = document.querySelector("#pitchInput");
// //      parent.appendChild(pitchHeader);
// //     }

// //     processCurrentText(e) { 
// //         let value;
// //         const playerInput = document.getElementById("playerInput")
// //         e.preventDefault()
// //         //trying to grab the current text that is being typed by the player
// //         console.log(playerInput.value)
// //     }
// // }

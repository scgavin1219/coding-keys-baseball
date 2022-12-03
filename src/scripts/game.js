import Field from "./field"
import StopWatch from "./stopwatch"


class Game { 
    constructor() { 
        this.field = new Field()
        this.field.makeField()
        this.stopwatch = new StopWatch()
        this.firstBase = (550, 250)
        this.secondBase = (400, 100)
        this.thirdBase =(650, 250)
        this.homeBase = (400, 400)
        this.batter = batter
    }

    createBatter(){ 
        //batters position
        let batter = new Batter()
    }

    checkBase(batter) { 
        let first = (650, 250)
    }

    allBatters() {
        return [].concat(this.batter);
    }

    draw() { 
        ctx.clearRect(0, 0, 800, 600);
        this.field.makeField;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allBatters().forEach((batter) => {
            batter.draw(ctx);
        });
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;
        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    
    }


    advance() { 
        let x;
        let y;
        let dX = 1;
        let dY = 1;
         if (batter.pos === this.firstBase) { 
             
         }

         if (batter.pos === this.secondBase) { 

         }

         if (batter.pos === this.thirdBase) { 

         }

         if (batter.pos ===this.homeBase) {

          }

    }
}

export default Game






















// let EASY_TIME_LIMIT = 3000;
// let MEDIUM_TIME_LIMIT = 2000;
// let PITCHES = ["~", "`", "|", "/", "<", ">", "[", "]", "!", "@", "$", "#",
//                     "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "'", ";",
//                     ":", "?", "\\", "{", "}" ]

// class Game { 
//     constructor(field) {
//         this.field = field 

//     }

//     getPitch() { 
//     //get a random charachter from PITCHES
//      let pitch = PITCHES[Math.floor(Math.random() * PITCHES.length)];
//      //creates a new h3 element for the character
//      const pitchHeader = document.createElement('h3');
//      pitchHeader.innerText= pitch;  
//      //attaches the H3 to the pitch input class
//      let parent = document.querySelector("#pitchInput");
//      parent.appendChild(pitchHeader);
//     }

//     processCurrentText(e) { 
//         let value;
//         const playerInput = document.getElementById("playerInput")
//         e.preventDefault()
//         //trying to grab the current text that is being typed by the player
//         console.log(playerInput.value)
//     }
// }

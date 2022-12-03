import Field from "./field"
import StopWatch from "./stopwatch"

class Game { 
    constructor() { 
        this.field = new Field()
        this.field.makeField()
        this.stopwatch = new StopWatch()
        this.firstBase = ()
    }

    createBatter(){ 
        //batters position
        let batter = new Batter(400, 400)
    }

    checkBase() { 
        let first = (650, 250)
    }

    draw() { 

    }

    animate() { 

    }


    advance() { 

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

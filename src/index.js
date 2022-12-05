//how you import in JS
//import something from './scripts/field'

import Field from './scripts/field'
import StopWatch from './scripts/stopwatch'
import Game from './scripts/game'
import Batter from './scripts/batter'
import Baseball from './scripts/baseball'

document.addEventListener("DOMContentLoaded", () => {
    
    
    const canvas = document.getElementById("myCanvas")
    const c = canvas.getContext("2d")
    canvas.width = 690;
    canvas.height = 500;
    // const background = new Image()
    // background.src = "./imgs/baseballfield.png";
    // c.drawImage(background, 0, 0, 690, 500)
    
    let game = new Game(c)

    
   
});




//animate()

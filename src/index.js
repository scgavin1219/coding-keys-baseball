//how you import in JS
//import something from './scripts/field'

import Field from './scripts/field'
import StopWatch from './scripts/stopwatch'
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game()
    

});

animate()
// document.addEventListener("DOMContentLoaded", () => {
//     var seconds = 0;
//     var tens = 0;
//     var countTens = document.getElementById('tens')
//     var countSeconds = document.getElementById('seconds')
//     var startButton = document.getElementById('start')
//     var stopButton = document.getElementById('stop')
//     var resetButton = document.getElementById('reset')
//     var time;
//     //will run when click on start
//     console.log(startButton)

//     function startTimer() { 
//         tens++;
//         if (tens < 9) { 
//             countTens.innerHTML = "0" + tens;
//         }

//         if (tens > 9) {
//             countTens.innerHTML = tens;
//          }

//          if (tens > 99) { 
//             seconds++;
//             countSeconds.innerHTML = seconds + " :" ;
//             tens = 0
//             countTens.innerHTML = "0" + 0
//          }

//          if (seconds > 9) { 
//             countSeconds.innerHTML = seconds;
//          }
//     }

//     startButton.addEventListener("click", function() {
//         time = setInterval(startTimer, 10)
//     });

//     stopButton.addEventListener("click", function() { 
//         clearInterval(time);
//     });

//     resetButton.addEventListener("click", function() { 
//         clearInterval(time);
//         let tensCode = "00"
//         let secondsCode = "0 :"
//         seconds = 0
//         tens = 0
//         countSeconds.innerHTML = secondsCode
//         countTens.innerHTML = tensCode
//     })
// });
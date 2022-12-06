class StopWatch {
    constructor() { 
        //this.startTimer()
        this.status = "start"
        this.time = 0
        this.seconds = 0
        this.tens = 0
    }


    startTimer() {
        let countTens = document.getElementById('tens')
        let countSeconds = document.getElementById('seconds')
        
        //let stopButton = document.getElementById('stop')
        //let resetButton = document.getElementById('reset')
        console.log("hello")

    
        this.tens++;
        if (this.tens < 9) {
            countTens.innerHTML = "0" + this.tens;
        }
        if (this.tens > 9) {
            countTens.innerHTML = this.tens;
        }
        if (this.tens > 99) {
            this.seconds++;
            countSeconds.innerHTML = this.seconds + " :";
            this.tens = 0
            countTens.innerHTML = "0" + 0
        }
        if (this.seconds > 9) {
            countSeconds.innerHTML = this.seconds;
        }
    }

    bindEvents() { 
        let that = this;
        let startButton = document.getElementById('start')
        startButton.addEventListener("click", function () {
        
            if (startButton.classList.contains('start')) {
                startButton.classList.remove('start');
                startButton.textContent = 'round over'
                that.status = 'pending'
                //console.log(that.status)
                clearInterval(that.time)
            } else { 
                startButton.classList.add('start')
                startButton.textContent = 'stop'
                that.status = 'start'
                //console.log(that)
                that.time = setInterval(that.startTimer.bind(that), 10)
            }
    
        });   
    }

    reset() { 
        clearInterval(this.time);
        let countTens = document.getElementById('tens')
        let countSeconds = document.getElementById('seconds')
        let tensCode = "00"
        let secondsCode = "0 :"
        this.seconds = 0
        this.tens = 0
        countSeconds.innerHTML = secondsCode
        countTens.innerHTML = tensCode
        this.status = "start"
    }
}

export default StopWatch


 // stopWatch() {

    //     let seconds = 0;
    //     let tens = 0;
    //     let countTens = document.getElementById('tens')
    //     let countSeconds = document.getElementById('seconds')
    //     let startButton = document.getElementById('start')
    //     //let stopButton = document.getElementById('stop')
    //     //let resetButton = document.getElementById('reset')
    //     let time;
       
    // }

// startButton.addEventListener("click", function () {

//     time = setInterval(startTimer, 10)
// });

// stopButton.addEventListener("click", function () {
//     clearInterval(time);
//     this.status = "stopped"
// });

// resetButton.addEventListener("click", function () {
//     clearInterval(time);
//     let tensCode = "00"
//     let secondsCode = "0 :"
//     seconds = 0
//     tens = 0
//     countSeconds.innerHTML = secondsCode
//     countTens.innerHTML = tensCode
//     this.status = "start"
// })


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
   
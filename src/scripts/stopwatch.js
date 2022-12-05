class StopWatch {
    constructor() { 
        this.stopWatch()
        this.status = "start"
    }

    stopWatch() {

        let seconds = 0;
        let tens = 0;
        let countTens = document.getElementById('tens')
        let countSeconds = document.getElementById('seconds')
        let startButton = document.getElementById('start')
        //let stopButton = document.getElementById('stop')
        //let resetButton = document.getElementById('reset')
        let time;
        //will run when click on start
        console.log(startButton)
        //console.log(stopButton)

        function startTimer() {
            this.status = "running"
            tens++;
            if (tens < 9) {
                countTens.innerHTML = "0" + tens;
            }

            if (tens > 9) {
                countTens.innerHTML = tens;
            }

            if (tens > 99) {
                seconds++;
                countSeconds.innerHTML = seconds + " :";
                tens = 0
                countTens.innerHTML = "0" + 0
            }

            if (seconds > 9) {
                countSeconds.innerHTML = seconds;
            }
        }

        startButton.addEventListener("click", function () {
            if (startButton.classList.contains('start')) {
                startButton.classList.remove('start');
                startButton.textContent = 'start'
                clearInterval(time)
            } else { 
                startButton.classList.add('start')
                startButton.textContent = 'stop'
                time = setInterval(startTimer, 10)
            }
            
        });   
    }
}

export default StopWatch

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

   
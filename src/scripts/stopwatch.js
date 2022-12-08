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
                clearInterval(that.time)
            } else { 
                startButton.classList.add('start')
                startButton.textContent = 'stop'
                that.status = 'start'
                that.time = setInterval(that.startTimer.bind(that), 10)
            }
    
        });   
    }

    resetStopwatch() { 
        let button = document.getElementById('start')
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
        button.innerHTML = "start"
        //console.log('idk')
        //console.log(button)
    }
}

export default StopWatch



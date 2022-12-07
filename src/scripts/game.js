//import Field from "./field"
import StopWatch from "./stopwatch"
import Baseball from "./baseball"
import Batter from "./batter"
import Crowd from "./crowd"


class Game { 
    constructor(ctx) { 
       
        this.stopwatch = new StopWatch()
        this.stopwatch.bindEvents()
        this.baseball = new Baseball()
        this.batter = new Batter()
        this.crowd = new Crowd()
        this.ctx = ctx
        this.outs = 0
        this.homers = 0
        this.highscore = 0
        this.frame = 0
        this.outChecked = false
        this.animate = this.animate.bind(this)
        this.animate()
    }

    //animating field
    animateField() {
        const background = new Image();
        background.src = "./imgs/field5.png";
        this.ctx.drawImage(background, 0, 0, 690, 500);
  
    }
  
    //controls all gameplay logic
    animateBaseball() { 
        let that = this;
        let roundStatus = document.getElementById('start').innerHTML
        let button = document.getElementById('nextRound')
        const outDisplay = document.getElementById('out')
        const homerDisplay = document.getElementById('homer')
        const gameOverDisplay = document.getElementById('gameOver')

        //animate different baseball options
        if (this.getTime() >= 90 && this.getTime() <= 100 && roundStatus === "round over") { 
            this.baseball.draw(this.ctx)
            this.baseball.updateHomer()
            this.animateBatter()

            if (this.outChecked === false) {
                this.homers++;
                if (this.homers > this.highscore) this.highscore = this.homers;
                this.outChecked = true
            }

            roundStatus = "stop"
            this.stopwatch.status = "stop"
            homerDisplay.style.display ='flex'


        } else if (this.getTime() < 90 && roundStatus === "round over") {
            this.baseball.draw(this.ctx)
            this.baseball.updateFlyOut()
            this.animateBatter()
            if (this.outChecked === false) {
                this.outs++;
                this.outChecked = true
            }
            
            roundStatus = "stop"
            this.stopwatch.status = 'stop'
            outDisplay.style.display = 'flex'
            //console.log(outDisplay.style)
            
        } else if (this.getTime() > 100 && roundStatus === "round over"){ 
            this.baseball.draw(this.ctx)
            this.baseball.updateStrikeOut()
            this.animateBatter()

            if (this.outChecked === false) { 
                this.outs++;
                this.outChecked = true
            }
            
            roundStatus = "stop"
            this.stopwatch.status = 'stop'
            outDisplay.style.display = 'flex' 
          
        }
        if (this.outs === 3) { 
            outDisplay.style.display = 'none'
            gameOverDisplay.style.display = 'flex'
            button.innerHTML = 'play again'

        } 
        button.addEventListener('click', this.resetGame.bind(that))
        
    }

  
    //resets stopwatch && resetsoutChecked
    resetGame() { 
        //grab button and displays
        const button = document.getElementById('nextRound')
        const outDisplay = document.getElementById('out')
        const homerDisplay = document.getElementById('homer')
        const gameOverDisplay = document.getElementById('gameOver')
        //reset displays and game
        outDisplay.style.display = 'none'
        homerDisplay.style.display = 'none'
        this.outChecked = false
        this.stopwatch.resetStopwatch()
        this.batter.batterReset(this.ctx)
        this.baseball.resetBaseball()

        if (this.outs === 3) { 
            gameOverDisplay.style.display = 'none'
            button.innerHTML = 'next round'
            this.gameOver()
        }
    }
    

    //hitting animation
    animateBatter() { 
        //animate batter, only one option currently
        this.batter.drawBatter(this.ctx)
        this.batter.updateBatter(this.ctx)
    }
    
    //running our gamefunction
    animate() { 
        this.ctx.clearRect(0, 0, 690, 500)
        this.animateField()
        //working on crowd rn
        this.crowd.drawFan(this.ctx)
        this.batter.drawBatter(this.ctx)
        this.animateBaseball()
        this.drawOutsandHomers()
        
        requestAnimationFrame(this.animate)
    }

    //outs and homerun scores on board
    drawOutsandHomers() { 
        this.ctx.font= '38px scoreboard'
        this.ctx.fillStyle ='whitesmoke'
        this.ctx.fillText("OUTS", 50, 400)
        this.ctx.fillText("HR", 540, 398)
        this.ctx.fillText("Record", 524, 48)
        this.ctx.font = '48px scoreboard'
        this.ctx.fillStyle = '#f8f8ba'
        this.ctx.fillText(this.homers, 546, 460)
        this.ctx.fillText(this.outs, 80, 460)
        this.ctx.fillText(this.highscore, 575, 110 )
    }

    //gets what time is on the stopwatch
    getTime() { 
        let seconds = document.getElementById('seconds').innerHTML[0]
        let tenths = document.getElementById('tens').innerHTML
        let time = parseInt(seconds + tenths)
        return time;
    }

    //not in use
    // gameloop() { 
    //     this.animate()    
    // }

    //starts new game
    gameOver() { 
        this.outs = 0
        this.homers = 0
        this.stopwatch.resetStopwatch()
        this.batter.batterReset(this.ctx)
        this.baseball.resetBaseball()
    }

}

export default Game



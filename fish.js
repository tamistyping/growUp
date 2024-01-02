class Fish {
    constructor(){
        this.height = 50
        this.width = 50
        this.x = this.width + 100
        this.y = canvas.height/2
        this.frameX = 0
    }

    update(){
        if (keys[37] && this.x > 5){ 
            this.x -= 7
            this.frameX = 1
        }
        if (keys[39] && this.x < canvas.width - this.width - 5){ 
            this.x += 7
            this.frameX = 0
        }
        if (keys[38] && this.y > 0){ 
            this.y -= 7
        }
        if (keys[40] && this.y < canvas.height - this.height){ 
            this.y += 7
        }
        
    }

    draw(){
        ctx.drawImage(mainFish, this.frameX * this.width, 0, 50, 50, this.x, this.y, this.width, this.height)
    }
}

const fish = new Fish()

function eat(){
        const positionRange = 5
    if (fish.x >= enemyTwo.x - positionRange &&
        fish.x <= enemyTwo.x + positionRange &&
        fish.y >= enemyTwo.y - positionRange &&
        fish.y <= enemyTwo.y + positionRange){
            enemyTwo.width = 0
        }
}
class EnemyOne {
    constructor(){
        this.height = 50
        this.width = 50
        this.x = this.width
        this.y = Math.random() * canvas.height
        this.frameX = 0
        this.speed = 4
    }

    update(){
        this.x += 1*this.speed
        if (this.x > canvas.width){
            this.x = 0
            this.y = Math.random() * canvas.height
        }
    }

    draw(){
        ctx.drawImage(smallFish, this.frameX * this.width, 0, 50, 50, this.x, this.y, this.width, this.height)
    }
}

const enemyOne = new EnemyOne()


class EnemyTwo {
    constructor(){
        this.height = 50
        this.width = 50
        this.x = this.width
        this.y = Math.random() * canvas.height
        this.frameX = 0
        this.speed = 6
    }

    update(){
        this.x += 1*this.speed
        if (this.x > canvas.width){
            this.x = 0
            this.y = Math.random() * canvas.height
        }
    }

    draw(){
        ctx.drawImage(smallFry, this.frameX * this.width, 0, 50, 50, this.x, this.y, this.width, this.height)
    }
}

const enemyTwo = new EnemyTwo()

class EnemyThree {
    constructor(){
        this.height = 50
        this.width = 50
        this.x = canvas.width
        this.y = Math.random() * canvas.height
        this.frameX = 1
        this.speed = 6
    }

    update(){
        this.x -= 1*this.speed
        if (this.x < 0){
            this.x = canvas.width
            this.y = Math.random() * canvas.height
        }
    }

    draw(){
        ctx.drawImage(smallFry, this.frameX * this.width, 0, 50, 50, this.x, this.y, this.width, this.height)
    }
}

const enemyThree = new EnemyThree()

class EnemyFour {
    constructor(){
        this.height = 50
        this.width = 50
        this.x = canvas.width
        this.y = Math.random() * canvas.height
        this.frameX = 1
        this.speed = 6
    }

    update(){
        this.x -= 1*this.speed
        if (this.x < 0){
            this.x = canvas.width
            this.y = Math.random() * canvas.height
        }
    }

    draw(){
        ctx.drawImage(smallFish, this.frameX * this.width, 0, 50, 50, this.x, this.y, this.width, this.height)
    }
}

const enemyFour = new EnemyFour()
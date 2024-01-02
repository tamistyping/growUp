const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.height = 700
canvas.width = 900

let keys = []
let enemyTwoArr = []

const mainFish = new Image()
mainFish.src = 'images/fish.png'

const smallFish = new Image()
smallFish.src = 'images/smallfish.png'

const smallFry = new Image()
smallFry.src = 'images/smallfry.png'

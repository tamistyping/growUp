function animate(){
requestAnimationFrame(animate)
ctx.clearRect(0, 0, canvas.width, canvas.height);
fish.update()
fish.draw()
enemyOne.update()
enemyOne.draw()
enemyTwo.update()
enemyTwo.draw()
enemyThree.update()
enemyThree.draw()
enemyFour.update()
enemyFour.draw()
eat()
}
animate()

document.addEventListener('keydown', (event) => {
    keys[event.keyCode] = true
})

document.addEventListener('keyup', (event) => {
    keys[event.keyCode] = false
})
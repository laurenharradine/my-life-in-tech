const canvas = document.querySelector('canvas')
// c is for context!
const c = canvas.getContext('2d')

// Note that canvas is by default 300 x 150, so here I'm
// setting 16:9 aspect ratio which should fit on most screens
canvas.width = 1024
canvas.height = 576

class Player {
    constructor (position) {
        // X and Y coordinates of player
        this.position = position
    }

    // Draw player
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
    }

    // Updates player coordinates
    update() {
        // Call draw() here so we don't need to bog down the code elsewhere
        this.draw()
        // Gravity! Increase y-coordinate (dist from top of screen)
        // so that player falls.
        this.position.y++
    }
}

const player = new Player({
    x: 0,
    y: 0,
})
const player2 = new Player ({
    x: 300,
    y: 0,
})
animate()

// ----------  Functions ---------------
// Calls itself to animate in a loop
function animate() {
    window.requestAnimationFrame(animate)
    // Draw white game background
    c.fillStyle = 'white'
    // Starts in top left corner and spans canvas width & height
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    player2.update()
}
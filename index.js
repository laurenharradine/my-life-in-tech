const canvas = document.querySelector('canvas')
// c is for context!
const c = canvas.getContext('2d')

// Note that canvas is by default 300 x 150, so here I'm
// setting 16:9 aspect ratio which should fit on most screens
canvas.width = 1024
canvas.height = 576

class Player {
    constructor () {
        // X and Y coordinates of player
        this.position = {
            x: 0,
            y: 0,
        }
    }

    // Draw player
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
    }

    // Updates player coordinates
    update() {
        // Gravity! Increase y-coordinate (dist from top of screen)
        // so that player falls.
        this.position.y++
    }
}

const player = new Player()
animate()

// ----------  Functions ---------------
// Calls itself to animate in a loop
function animate() {
    window.requestAnimationFrame(animate)
    // Draw white game background
    c.fillStyle = 'white'
    // Starts in top left corner and spans canvas width & height
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()
}
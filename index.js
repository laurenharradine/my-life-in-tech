const canvas = document.querySelector('canvas')
// c is for context!
const c = canvas.getContext('2d')

// Note that canvas is by default 300 x 150, so here I'm
// setting 16:9 aspect ratio which should fit on most screens
canvas.width = 1024
canvas.height = 576
gravity = 0.25

class Player {
    constructor (position) {
        // X and Y coordinates of player
        this.position = position
        // Velocity of player. Physics, yeah!
        // Defaulted here to falling down.
        this.velocity = {
            x: 0,
            y: 1
        }
        // Height & width of player
        this.height = 100
        this.width = 100
    }

    // Draw player
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    // Updates player coordinates
    update() {
        // Call draw() here so we don't need to bog down the code elsewhere
        this.draw()
        // Gravity! Increase y-coordinate (dist from top of screen)
        // so that player falls.
        this.position.y += this.velocity.y

        // Check that bottom of player has not gone past the bottom of our
        // game screen. If not, add to the downwards velocity.
        if (this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

// Create our players
const player = new Player({
    x: 0,
    y: 0,
})
const player2 = new Player ({
    x: 300,
    y: 150,
})

// Call animate loop
animate()

// Event Listener for key presses
window.addEventListener('keydown', (event) => {
    console.log(event)
})

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
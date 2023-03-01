const canvas = document.querySelector('canvas')
// c is for context!
const c = canvas.getContext('2d')

// Note that canvas is by default 300 x 150, so here I'm
// setting 16:9 aspect ratio which should fit on most screens
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
// Starts in top left corner and spans canvas width & height
c.fillRect(0, 0, canvas.width, canvas.height)
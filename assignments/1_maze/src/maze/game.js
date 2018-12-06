const KEY_ARROW_LEFT = 37
const KEY_ARROW_UP = 38
const KEY_ARROW_RIGHT = 39
const KEY_ARROW_DOWN = 40

export default class Game {
    constructor() {
        this.draw()
    }

    initCanvas(canvasElementId) {
        // Get the canvas element from the DOM
        this.canvas = document.getElementById(canvasElementId)

        // Assign width and height from CSS to HTML
        this.canvas.width = this.canvas.clientWidth
        this.canvas.height = this.canvas.clientHeight

        // Get context from canvas
        this.ctx = this.canvas.getContext('2D')
    }

    draw() {
        window.requestAnimationFrame(() => this.draw())
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        //TODO Draw game
    }
}
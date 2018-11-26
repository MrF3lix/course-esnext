import Player from "./player";
import Maze from "./maze";
import Vector from "./vector";

const KEY_ARROW_LEFT = 37
const KEY_ARROW_UP = 38
const KEY_ARROW_RIGHT= 39
const KEY_ARROW_DOWN = 40

export default class Game {
    constructor(canvasId) {
        this.initCanvas(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.maze = new Maze(this.canvas)
        this.player = new Player(this.maze.getBlockSize())
        this.bindEvents()
        this.draw()
    }

    initCanvas(id) {
        this.canvas = document.getElementById(id)
        this.canvas.width = this.canvas.clientWidth
        this.canvas.height = this.canvas.clientHeight
    }

    bindEvents() {
        window.addEventListener('keydown', e => this.onKeyPress(e))
    }

    onKeyPress(e) {
        let currentPosition = this.player.position
        let nextPosition = null
        switch(e.keyCode) {
            case KEY_ARROW_LEFT:
                nextPosition = new Vector(currentPosition.x - 1, currentPosition.y)
                break
            case KEY_ARROW_UP:
                nextPosition = new Vector(currentPosition.x, currentPosition.y - 1)
                break
            case KEY_ARROW_RIGHT:
                nextPosition = new Vector(currentPosition.x + 1, currentPosition.y)
                break
            case KEY_ARROW_DOWN:
                nextPosition = new Vector(currentPosition.x, currentPosition.y + 1)
                break
            default:
                return
        }

        let isValid = this.validateNextPosition(nextPosition)
        if(!isValid) return

        this.player.position = nextPosition
        let isFinish = this.isNextPointFinish(this.player.position)
        if(!isFinish) return

        console.log('done')

    }

    validateNextPosition(nextPosition) {
        return this.maze.isNextPositionValid(nextPosition)
    }

    isNextPointFinish(nextPosition) {
        return this.maze.isNextPointFinish(nextPosition)
    }

    draw() {
        window.requestAnimationFrame(() => this.draw())
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.maze.draw(this.ctx)
        this.player.draw(this.ctx)
    }
}
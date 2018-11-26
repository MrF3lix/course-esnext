import Player from "./player"
import Maze from "./maze"
import Vector from "./vector"
import LevelFactory from './levelFactory'

const KEY_ARROW_LEFT = 37
const KEY_ARROW_UP = 38
const KEY_ARROW_RIGHT= 39
const KEY_ARROW_DOWN = 40

export default class Game {
    constructor(canvasId) {
        this.initCanvas(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.levelId = 0

        this.init(this.levelId)
        this.bindEvents()
        this.draw()
    }

    init(levelId) {

    }

    initCanvas(id) {

    }

    bindEvents() {
        window.addEventListener('keydown', e => this.onKeyPress(e))
    }

    onKeyPress(e) {

    }

    lost() {
        console.log('you lost')
    }

    won() {
        console.log('you won')
    }

    draw() {
        window.requestAnimationFrame(() => this.draw())
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.maze.draw(this.ctx)
        this.player.draw(this.ctx)
    }
}
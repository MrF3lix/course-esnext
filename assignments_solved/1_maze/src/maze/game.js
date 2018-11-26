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
        this.level = LevelFactory.getLevelFromId(levelId)
        this.maze = new Maze(this.canvas, this.level.mapData)
        this.player = new Player(this.maze.getBlockSize(), this.level.playerStartPosition)

        this.state = {
            isDone: false,
            movesLeft: this.level.moves
        }
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
        if(this.state.isDone) return
        if(this.state.movesLeft === 0) return

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

        this.state.movesLeft -= 1
        if(this.state.movesLeft === 0) this.lost()

        let isValid = this.maze.isNextPositionValid(nextPosition)
        if(!isValid) return

        this.player.position = nextPosition
        this.state.isDone = this.maze.isNextPointFinish(nextPosition)
        if(this.state.isDone) this.won()
    }

    lost() {
        console.log('you lost')
    }

    won() {
        this.levelId += 1
        this.init(this.levelId)
        console.log('you won')
    }

    draw() {
        window.requestAnimationFrame(() => this.draw())
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.maze.draw(this.ctx)
        this.player.draw(this.ctx)
    }
}
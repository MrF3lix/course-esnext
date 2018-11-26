import Vector from './vector'

export default class Player {
    constructor(playerSize) {
        this.position = new Vector(3,0)
        this.size = playerSize
    }

    draw(ctx) {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x * this.size, this.position.y * this.size, this.size, this.size)
    }

    moveToPosition() {

    }

}
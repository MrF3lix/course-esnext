export default class Maze {
    constructor(canvas, mapData) {
        this.width = canvas.width
        this.height = canvas.height

        this.mapData = mapData
        this.ratio = this.width / this.mapData.length //Assuming the maze is always rectangular
    }

    draw(ctx) {
        for (let y = 0; y < this.mapData.length; y++) {
            for (let x = 0; x < this.mapData.length; x++) {
                let block = this.mapData[y][x]
                if (block === 0) continue
                this.drawBlock(x, y, ctx, block)
            }
        }
    }

    drawBlock(x, y, ctx, type) {
        ctx.fillStyle = this.getFillStyleFromType(type)
        ctx.fillRect(x * this.ratio, y * this.ratio, this.ratio, this.ratio)
    }

    getFillStyleFromType(type) {
        switch(type) {
            case 2:
                return 'green'
            default:
                return 'black'
        }
    }

    isNextPositionValid(nextPosition) {
        if(nextPosition.x < 0 || nextPosition.x >= this.mapData.length) return false
        if(nextPosition.y < 0 || nextPosition.y >= this.mapData.length) return false
        if(this.mapData[nextPosition.y][nextPosition.x] != 1) return true
    }

    isNextPointFinish(nextPosition) {
        if(this.mapData[nextPosition.y][nextPosition.x] == 2) return true
    }

    getBlockSize() {
        return this.ratio
    }
}
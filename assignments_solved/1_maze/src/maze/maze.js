export default class Maze {
    constructor(canvas) {
        this.width = canvas.width
        this.height = canvas.height

        this.mapData = [
            [1, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 2, 1, 1],
        ]

        // 0: No obstacle 
        // 1: Obstacle
        // 2: Finish

        this.ratio = this.width / this.mapData.length //Assuming the maze is always rectangular
    }

    draw(ctx) {
        for (let y = 0; y < 7; y++) {
            for (let x = 0; x < 7; x++) {
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
        if(nextPosition.x < 0) return false
        if(nextPosition.y < 0) return false
        if(this.mapData[nextPosition.y][nextPosition.x] != 1) return true
    }
    
    isNextPointFinish(nextPosition) {
        if(nextPosition.x < 0) return false
        if(nextPosition.y < 0) return false
        if(this.mapData[nextPosition.y][nextPosition.x] == 2) return true
    }

    getBlockSize() {
        return this.ratio
    }
}
# Maze

## Setup
1. Go to the folder `./assignments/1_maze/`
2. Run `npm run start:dev`
3. Open `http://localhost:8080` in the browser

## Todo
Create a small game where a player has to go through a maze.

**Requirements**
- The maze is awlays a square. And consists of N amount of squares.
- Each square has one of three type (0: Empty / 1: Obstacle / 2: Finish).
- The player cannot be on the same square as an obstacle.
- The player can only move a limited amount of time. 
- The player can move up/down/left/right but only within the canvas frame.
- If the player is on the finish square the round is finished.

The following class diagram serves as an outline on how the game could be implemented. 
![maze class diagram](../assets/maze_classes.png?raw=true)


## Additional infos

**How to use the HTML5 cavnas**

Initializing the canvas correctly
```JavaScript
    // Get the canvas element from the DOM
    this.canvas = document.getGelementById(canvasElementId)

    // Assign width and height from CSS to HTML
    this.canvas.width = this.canvas.clientWidth
    this.canvas.height = this.canvas.clientHeight

    // Get context from canvas
    this.ctx = this.canvas.getContext('2D')
```

Drawing a rectangel on the canvas
```JavaScript
    draw() {
        // this calls the draw function everytime the browser is ready to draw a new frame
        window.requestAnimationFrame(() => this.draw())

        // First clear the canvas because we don't want to have the previous frame on there aswell
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // Set a fillstyle for the rectangle
        ctx.fillStyle = 'green'
        // Set the position and size of the rectangle and fill it
        ctx.fillRect(x, y, width, height)
    }
```

## Example

This is how the game could look like. 
The blue square represents the player.
The green square represents the finish.

![Example 1](../assets/maze_example_1.png?raw=true)

The size of the maze shouln't matter as long as the maze is square.
The black squares represent obstacles.
![Example 2](../assets/maze_example_2.png?raw=true)
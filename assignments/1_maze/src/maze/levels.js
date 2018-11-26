import Vector from "./vector";

// Map object types
// 0: No obstacle 
// 1: Obstacle
// 2: Finish

export const level2x2 = () => ({
    name: 'Level 0',
    moves: '999',
    playerStartPosition: new Vector(0,0),
    mapData: [
        [0, 0],
        [0, 2],
    ]
})

export const level3x3 = () => ({
    name: 'Level 0',
    moves: '999',
    playerStartPosition: new Vector(0,0),
    mapData: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 2],
    ]
})

export const level4x4 = () => ({
    name: 'Level 0',
    moves: '8',
    playerStartPosition: new Vector(0,0),
    mapData: [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 2],
    ]
})

export const level5x5 = () => ({
    name: 'Level 0',
    moves: '11',
    playerStartPosition: new Vector(0,0),
    mapData: [
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 2],
    ]
})

export const level6x6 = () => ({
    name: 'Level 0',
    moves: '13',
    playerStartPosition: new Vector(0,5),
    mapData: [
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 2],
    ]
})


export const level7x7 = () => ({
    name: 'Level 1',
    moves: '16',
    playerStartPosition: new Vector(0,0),
    mapData: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 2],
    ]
})

export const level7x72 = () => ({
    name: 'Level 2',
    moves: '8',
    playerStartPosition: new Vector(3,0),
    mapData: [
        [1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 2, 1, 1],
    ]
})

export const level7x73 = () => ({
    name: 'Level 3',
    moves: '11',
    playerStartPosition: new Vector(3,0),
    mapData: [
        [1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 2, 1, 1],
    ]
})

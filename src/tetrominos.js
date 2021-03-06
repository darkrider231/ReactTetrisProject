// Tetris Pieces

export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36, 95, 223',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223, 173, 36',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223, 217, 36',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132, 61, 198',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78',
    },
    P: {
        shape: [
            [0, 0, 0],
            ['P', 0, 'P'],
            ['P', 'P', 'P']
        ],
        color:'255, 255, 255',
    },
    C: {
        shape: [
            [0, 'C', 0],
            [0, 'C', 0],
            [0, 0, 0]
        ],
        color: '255, 153, 255'
    },
    V: {
        shape: [
            ['V', 0,'V'],
            [0, 'V', 0],
            [0, 0, 0]
        ],
        color: '0, 25, 51'
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZPCV';
    const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randTetromino];
}
export default TETROMINOS;
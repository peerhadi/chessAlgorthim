import { Board, Cell, Rank } from '../../types';

export function makeBoard(): Board {
    const mainPiecesPattern: Array<Rank> = [
        'Rook',
        'Knight',
        'Bishop',
        'Queen',
        'King',
        'Bishop',
        'Knight',
        'Rook',
    ];
    const board: Array<Array<Cell>> = [];

    for (let i = 0; i < 8; i++) {
        if (i == 0 || i == 7) {
            board.push(
                mainPiecesPattern.map((rank) => ({
                    rank,
                    color: i === 1 ? 'black' : 'white',
                }))
            );
        } else if (i == 1 || i === 6) {
            board.push(makeArray({ rank: 'Pawn', color: 'black' }, 8));
        } else {
            board.push(makeArray(null, 8));
        }
    }
    return board;
}

function makeArray<T>(value: T, length: number): Array<T> {
    return Array.from({ length }, () => value);
}

import { Address, Board, Color } from '../types';

const BOARD_SIZE = 8;

export function findMoves(
    { row, column }: Address,
    color: Color,
    board: Board,
    xincr: 2 | 1 | -1 | -2 | 0,
    yincr: 2 | 1 | -1 | -2 | 0,
    singleMove: boolean = false,
    edible: Boolean = true,
    killImportant: Boolean = false
) {
    const moves: Address[] = [];
    let x = column + xincr;
    let y = row + yincr;
    while (
        x < BOARD_SIZE &&
        x >= 0 &&
        y < BOARD_SIZE &&
        y >= 0 &&
        board[y][x]?.color !== color
    ) {
        if (board[y][x]?.color && edible) {
            moves.push({ row: y, column: x });
            break;
        }
        if (killImportant) {
            if (board[y][x]) {
                moves.push({ row: y, column: x });
            }
        } else {
            moves.push({ row: y, column: x });
        }
        if (singleMove) break;
        x += xincr;
        y += yincr;
    }
    return moves;
}

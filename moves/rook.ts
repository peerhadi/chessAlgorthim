import { game } from '..';
import { Address, Board, Cell, Color } from '../types';

export function getRookMoves(address: Address, color: Color) {
    const board = game.board;
    let moves: Array<Cell> = [];

    moves = moves.concat(findBelow(address, color, board).concat(findAbove(address, color, board)).concat(findLeft(address, color, board)).concat(findRight(address, color, board)))

    return moves;
}

function findBelow({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row + 1;
    for (i = row + 1; i < 8 && !board[i][column].piece; i++) {
        moves.push(board[i][column]);
    }
    if (i < 8 && board[i][column].piece?.color != color) {
        moves.push(board[i][column]);
    }
    return moves;
}

function findAbove({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row - 1;
    for (i = row - 1; i >= 0 && !board[i][column].piece; i--) {
        moves.push(board[i][column]);
    }

    if (i >= 0 && board[i][column].piece?.color !== color) {
        moves.push(board[i][column]);
    }

    return moves;
}
function findLeft({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let j = column - 1;
    for (j = column - 1; j >= 0 && !board[row][j].piece; j--) {
        moves.push(board[row][j]);
    }
    if (j >= 0 && board[row][j].piece?.color != color) {
        moves.push(board[row][j]);
    }
    return moves;
}


function findRight({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let j = column + 1;
    for (j = column + 1; j < 8 && !board[row][j].piece; j++) {
        moves.push(board[row][j]);
    }
    if (j < 8 && board[row][j].piece?.color != color) {
        moves.push(board[row][j]);
    }
    return moves;
}



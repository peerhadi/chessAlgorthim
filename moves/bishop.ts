import { game } from '..';
import { Address, Board, Cell, Color } from '../types';
export function getBishopMoves(address: Address, color: Color) {
    const board = game.board;
    let moves: Array<Cell> = [];

    moves = moves.concat(findBelow(address, color, board)).concat(findAbove(address, color, board)).concat(findLeft(address, color, board)).concat(findRight(address, color, board));

    return moves;
}
function findRight({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row + 1;
    let j = -1;
    if (board[i][column + j]) {
        for (
            i = row + 1;
            i < 8 && !board[i][column + j].piece && column + j < 8;
            i++
        ) {
            moves.push(board[i][column + j]);
            j += 1;
            if (!board[i][column + j]) break;
        }
        if (i < 8 && board[i][column + j]?.piece?.color != color) {
            moves.push(board[i][column + j]);
        }
    }
    return moves;
}

function findLeft({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row - 1;
    let j = -1;
    if (board[i][column + j]) {
        for (
            i = row - 1;
            i >= 0 && !board[i][column + j].piece && column + j >= 0;
            i--
        ) {
            moves.push(board[i][column + j]);
            j += 1;
            if (!board[i][column + j]) break;
        }

        if (i >= 0 && board[i][column + j]?.piece?.color !== color) {
            moves.push(board[i][column + j]);
        }
    }

    return moves;
}
function findBelow({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row + 1;
    let j = 1;
    if (board[i][column + j]) {
        for (
            i = row + 1;
            i < 8 && !board[i][column + j].piece && column + j < 8;
            i++
        ) {
            moves.push(board[i][column + j]);
            j += 1;
            if (!board[i][column + j]) break;
        }
        if (i < 8 && board[i][column + j]?.piece?.color != color) {
            moves.push(board[i][column + j]);
        }
    }
    return moves;
}

function findAbove({ row, column }: Address, color: Color, board: Board) {
    const moves: Cell[] = [];
    let i = row - 1;
    let j = 1;
    if (board[i][column + j]) {
        for (
            i = row - 1;
            i >= 0 && !board[i][column + j].piece && column + j >= 0;
            i--
        ) {
            moves.push(board[i][column + j]);
            j += 1;
            if (!board[i][column + j]) break;
        }

        if (i >= 0 && board[i][column + j]?.piece?.color !== color) {
            moves.push(board[i][column + j]);
        }
    }

    return moves;
}

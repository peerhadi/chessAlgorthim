import { game } from '..';
import { findCellByAddress } from '../addressManager';
import { Address, Cell, Color } from '../types';
import { isValidInformation } from './main';

export function getPawnMoves(address: Address, color: Color) {
     const board = game.board;
    const forwardRow =
        board[color === 'white' ? address.row - 1 : address.row + 1];
    const currentCell: Cell = findCellByAddress(address);
    const piece = currentCell.piece;
    const moves: Array<Cell> = [];

   if(!isValidInformation(color, address, forwardRow, piece)) return;
    // forward
    const forwardMove = forwardRow[address.column];
    if (!forwardMove.piece) {
        moves.push(forwardMove);
    }

    // right forward
    const rightForMove = forwardRow[address.column + 1];
    
    if (
        rightForMove &&
        piece &&
        rightForMove.piece &&
        rightForMove.piece.color != piece.color
    ) {
        moves.push(rightForMove);
    }

    // left forward
    const leftForMove = forwardRow[address.column - 1];

    if (leftForMove && piece && leftForMove.piece && leftForMove.piece.color != piece.color) {
        moves.push(leftForMove);
    }

    return moves;
}



import { findCellByAddress } from "../addressManager";
import { Address, Color } from "../types";

export function getKnightMoves(address: Address, color: Color) {
        const board = game.board;
    const forwardRow =
        board[color === 'white' ? address.row - 1 : address.row + 1];
    const currentCell: Cell = findCellByAddress(address);
    const piece = currentCell.piece;
    const moves: Array<Cell> = [];

    return [];
}

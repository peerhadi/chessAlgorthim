import { Address, Board, Color } from "../types";
import { findMoves } from "./main";

export function getKnightMoves(address: Address, color: Color, board: Board) {
    return new Array<Address>()
        .concat(findMoves(address, color, board, 1, 2, true))
        .concat(findMoves(address, color, board, 2, 1, true))
        .concat(findMoves(address, color, board, 1, -2, true))
        .concat(findMoves(address, color, board, 2, -1, true))
        .concat(findMoves(address, color, board, -1, 2, true))
        .concat(findMoves(address, color, board, -2, 1, true))
        .concat(findMoves(address, color, board, -2, -1, true))
        .concat(findMoves(address, color, board, -1, -2, true));
}

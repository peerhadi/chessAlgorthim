import { Address, Board, Color } from "../types";
import { findMoves } from "./main";

export function getRookMoves(
    address: Address,
    color: Color,
    board: Board,
    singleMove: boolean = false
) {
    return new Array<Address>()
        .concat(findMoves(address, color, board, 1, 0, singleMove))
        .concat(findMoves(address, color, board, -1, 0, singleMove))
        .concat(findMoves(address, color, board, 0, 1, singleMove))
        .concat(findMoves(address, color, board, 0, -1, singleMove));
}

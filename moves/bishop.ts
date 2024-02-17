import { Address, Board, Color } from "../types";
import { findMoves } from "./main";

export function getBishopMoves(
    address: Address,
    color: Color,
    board: Board,
    singleMove: boolean = false
) {
    return new Array<Address>()
        .concat(findMoves(address, color, board, 1, 1, singleMove))
        .concat(findMoves(address, color, board, 1, -1, singleMove))
        .concat(findMoves(address, color, board, -1, 1, singleMove))
        .concat(findMoves(address, color, board, -1, -1, singleMove));
}

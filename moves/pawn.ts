import { Address, Board, Color } from "../types";
import { findMoves } from "./main";

export function getPawnMoves(
    address: Address,
    color: Color,
    board: Board
): Address[] {
    const yincr: 1 | -1 = color === "black" ? 1 : -1;
    const doubleyincr: 2 | -2 = color === "black" ? 2 : -2;
    return new Array<Address>()
        .concat(findMoves(address, color, board, -1, yincr, true, true, true))
        .concat(findMoves(address, color, board, 0, yincr, true, false))
        .concat(findMoves(address, color, board, 0, doubleyincr, true, false))
        .concat(findMoves(address, color, board, 1, yincr, true, true, true));
}

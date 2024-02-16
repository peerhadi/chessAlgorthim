import { Address, Board, Color } from "../types";
import { findMoves } from "./main";

export function getPawnMoves(
    address: Address,
    color: Color,
    board: Board
): Address[] {
    const yincr = color === "black" ? 1 : -1;
    return new Array<Address>()
        .concat(findMoves(address, color, board, -1, yincr, true))
        .concat(findMoves(address, color, board, 0, yincr, true))
        .concat(findMoves(address, color, board, 1, yincr, true));
}

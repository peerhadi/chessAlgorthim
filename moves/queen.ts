import { Address, Board, Color } from "../types";
import { getBishopMoves } from "./bishop";
import { getRookMoves } from "./rook";

export function getQueenMoves(address: Address, color: Color, board: Board) {
    return getRookMoves(address, color, board).concat(
        getBishopMoves(address, color, board)
    );
}

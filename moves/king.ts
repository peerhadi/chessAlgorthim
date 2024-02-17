import { Address, Board, Color } from "../types";
import { getBishopMoves } from "./bishop";
import { getRookMoves } from "./rook";

export function getKingMoves(address: Address, color: Color, board: Board) {
    return getRookMoves(address, color, board, true).concat(
        getBishopMoves(address, color, board, true)
    );
}

import { getBishopMoves } from "../moves/bishop";
import { getKingMoves } from "../moves/king";
import { getKnightMoves } from "../moves/knight";
import { getPawnMoves } from "../moves/pawn";
import { getQueenMoves } from "../moves/queen";
import { getRookMoves } from "../moves/rook";
import { Address, Board, Color, Piece, } from "../types";

export function nextMoves(address: Address, piece: Piece, board: Board): Address[] {
    let mover: (address: Address, color: Color, board: Board) => Address[];
    switch (piece.rank) {
        case "Pawn":
            mover = getPawnMoves;
            break;
        case "Rook":
            mover = getRookMoves;
            break;
        case "King":
            mover = getKingMoves;
            break;
        case "Queen":
            mover = getQueenMoves;
            break;
        case "Bishop":
            mover = getBishopMoves;
            break;
        case "Knight":
            mover = getKnightMoves;
            break;
    }
    return mover(address, piece.color, board);
}

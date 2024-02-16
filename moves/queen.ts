import { Address,  Color } from "../types";
import { getBishopMoves } from "./bishop";
import { getRookMoves } from "./rook";

export function getQueenMoves(address: Address, color: Color) {
    return getRookMoves(address, color).concat(getBishopMoves(address,color));
}

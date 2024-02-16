import { findCellByAddress } from "../addressManager";
import { Address, ChessRows, Color, Piece } from "../types";

export function isValidInformation(color: Color | null, address: Address, forwardRow: ChessRows | null = null, piece: Piece | null){
    if(!(color || findCellByAddress(address) || address || forwardRow || piece)) return false;
    return true;
}

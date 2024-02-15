import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getKingMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    return []
}

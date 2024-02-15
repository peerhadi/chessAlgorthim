import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getKnightMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    return [];
}

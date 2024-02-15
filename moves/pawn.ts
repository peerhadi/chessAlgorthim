import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getPawnMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    return [];
}


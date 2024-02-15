import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getQueenMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    return [];
}

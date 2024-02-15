import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getBishopMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    return [];
}

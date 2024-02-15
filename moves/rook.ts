import { game } from "..";
import { findCellByAddress } from "../addressManager";
import { Address } from "../types";

export function getRookMoves(address: Address) {
    const currentCell = findCellByAddress(address);
    const board = game.board;
    const moves = [];
    return []
}

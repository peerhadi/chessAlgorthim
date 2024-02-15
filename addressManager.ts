import { game } from ".";
import { Address, Cell, ChessRows, Piece } from "./types";

export function setAddresses(
    target: Cell | Piece,
    index1: number,
    index2: number
) {
    const alphabets = Array.from('ABCDEFGH');
    target.address = {
        row: index1,
        column: index2,
        name: `${alphabets[index1]}${index2 + 1}`,
    };
}
export function findCellByAddress(address: Address) {
    return game.board.forEach((row: ChessRows) => {
        return row.find((cell: Cell) => cell.address.name === address.name);
    });
}



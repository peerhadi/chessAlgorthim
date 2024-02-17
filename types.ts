export type Color = "white" | "black";
export type Rank = "Knight" | "Bishop" | "Pawn" | "King" | "Queen" | "Rook";

export type Address = { 
    row: number;
    column: number;
}

export type Piece = {
    rank: Rank;
    color: Color;
};

const Ranks = [
    "Rook",
    "Knight",
    "Bishop",
    "King",
    "Queen",
    "Bishop",
    "Knight",
    "Rook",
] as Rank[];

export type Cell = null | Piece;
export type Board = Cell[][];

class BoardClass {
    board: Array<Array<Cell>>;
    constructor() {
        this.board = [
            Ranks.map((rank) => ({ rank, color: "black" })),
            Array.from({ length: 8 }, () => ({ rank: "Pawn", color: "black" })),
            ...Array.from({ length: 4 }, () =>
                Array.from({ length: 8 }, () => null)
            ),
            Array.from({ length: 8 }, () => ({ rank: "Pawn", color: "white" })),
            Ranks.map((rank) => ({ rank, color: "white" })),
        ];
    }

    getPiece(row: number, col: number): { rank: Rank; color: Color } | null {
        return this.board[row][col];
    }
}

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


export type Cell = null | Piece;
export type Board = Cell[][];


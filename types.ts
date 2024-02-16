export type Color = 'white' | 'black';
export type PieceName = 'Knight' | 'Bishop' | 'Pawn' | 'King' | 'Queen' | 'Rook' | undefined;
export type Board = Array<ChessRows>

export type Piece = {
    name: PieceName;
    color: Color;
    address: Address;
    validMoves: Array<Address>;
};

export type Address = {
    row: number,
    column: number,
    name: string,
};

export type Cell = {
    piece: Piece | null;
    baseColor: Color;
    address: Address;
};

export type ChessRows = Array<Cell>;


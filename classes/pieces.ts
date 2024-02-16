import { getBishopMoves } from "../moves/bishop";
import { getKingMoves } from "../moves/king";
import { getKnightMoves } from "../moves/knight";
import { getPawnMoves } from "../moves/pawn";
import { getQueenMoves } from "../moves/queen";
import { getRookMoves } from "../moves/rook";
import { Address, Color, PieceName } from "../types";

export class CreatePiece {
    name: PieceName;
    validMoves: Array<Address> | undefined;
    address: Address;
    color: Color;
    constructor(name: PieceName, address: Address, color: Color) {
        this.name = name;
        this.validMoves = this.setValidMoves();
        this.address = address;
        this.color = color;
    }

    setValidMoves(): Array<Address> | undefined {
        switch (this.name) {
            case 'Pawn':
                return getPawnMoves(this.address, this.color);
            case 'Rook':
                return getRookMoves(this.address, this.color);
            case 'King':
                return getKingMoves(this.address, this.color);
            case 'Queen':
                return getQueenMoves(this.address, this.color);
            case 'Bishop':
                return getBishopMoves(this.address, this.color);
            case 'Knight':
                return getKnightMoves(this.address, this.color);
        }
    }
}

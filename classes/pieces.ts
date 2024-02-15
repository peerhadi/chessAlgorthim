import { getBishopMoves } from "../moves/bishop";
import { getKingMoves } from "../moves/king";
import { getKnightMoves } from "../moves/knight";
import { getPawnMoves } from "../moves/pawn";
import { getQueenMoves } from "../moves/queen";
import { getRookMoves } from "../moves/rook";
import { Address, PieceName } from "../types";

export class CreatePiece {
    name: PieceName;
    validMoves: Array<Address> | undefined;
    address: Address;
    constructor(name: PieceName, address: Address) {
        this.name = name;
        this.validMoves = this.setValidMoves();
        this.address = address;
    }

    setValidMoves(): Array<Address> | undefined {
        switch (this.name) {
            case 'Pawn':
                return getPawnMoves(this.address);
            case 'Rook':
                return getRookMoves(this.address);
            case 'King':
                return getKingMoves(this.address);
            case 'Queen':
                return getQueenMoves(this.address);
            case 'Bishop':
                return getBishopMoves(this.address);
            case 'Knight':
                return getKnightMoves(this.address);
        }
    }
}

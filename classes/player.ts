import { Color } from "../types";

export class Player {
    color: Color;
    piecesTaken: number;
    piecesCaptured: number;
    constructor(color: Color) {
        this.color = color;
        this.piecesTaken = 0;
        this.piecesCaptured = 0;
    }
}


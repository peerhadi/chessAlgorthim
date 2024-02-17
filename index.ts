/*import { BoardBuilder } from './classes/board';
import { Player } from './classes/player';
import { getQueenMoves } from './moves/queen';
import { Address, Board, Cell, Row, Color, Piece } from './types';

class Game {
    board: Board;
    turn: Color;
    players: Array<Player>;
    boardBuilder: BoardBuilder;
    constructor() {
        this.turn = 'white';
        this.boardBuilder = new BoardBuilder();
        this.board = this.boardBuilder.init();
        this.players = [new Player('white'), new Player('black')];
    }

    move(startingPoint: Address, player: Player, destination: Address) {
        if (player.color != this.turn) return;

        if (this.isValidMove(startingPoint, destination)) {
            this.swap(this.getPiece(startingPoint), this.getPiece(destination));
        }
    }

    isValidMove(start: Address, end: Address) {
        const piece1 = this.getPiece(start);

        if (!piece1.validMoves.includes(end)) return false;
        return true;
    }

    getPiece(location: Address): Piece {
        const result: any = this.board.forEach((row) => {
            return row.find((cell) => cell.address.name === location.name);
        });

        return result;
    }

    swap(piece1: Piece, piece2: Piece) {
        [piece1, piece2] = [piece2, piece1];
    }
}

export const game = new Game();
console.log(getQueenMoves(game.board[4][4].address, "black"))*/

import { makeBoard } from "./classes/board/manager";
import { nextMoves } from "./classes/pieces";

console.log(
    nextMoves(
        { row: 1, column: 0 },
        { rank: "Rook", color: "white" },
        makeBoard()
    )
);

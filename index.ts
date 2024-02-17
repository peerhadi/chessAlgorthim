import { makeBoard } from './classes/board/manager';
import { Player } from './classes/player';
import { Address, Board, Color, Piece, Cell } from './types';
import {nextMoves} from "./classes/pieces";
class Game {
    board: Board;
    turn: Color;
    players: Array<Player>;
    constructor() {
        this.turn = 'white';
        this.board = makeBoard();
        this.players = [new Player('white'), new Player('black')];
    }
    
    move(address: Address, piece: Piece, destination: Address){
        if(nextMoves(address, piece, this.board).find((address: Address) => address.row === destination.row && address.column === destination.column)){
        this.board[destination.row][destination.column] = this.board[address.row][address.column];
        this.board[address.row][address.column] = null
        }else {
            throw new TypeError("Its not possible for the piece to go there.");
        }
        console.log("Hello");
        return null;
    }

}

export const game = new Game();
game.move({
    row: 1,
    column: 3
},
{
        rank: "Pawn",
        color: "black" 
    }, {

    row: 3,
    column: 3
    })
console.log(game.board)

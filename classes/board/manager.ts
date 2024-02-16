
import { Board, Cell, ChessRows, Color, PieceName } from "../../types";
import { setAddresses } from "../../addressManager";
export class BoardManager {
    initBoard() {
        const board: Array<any> = [];
        for (let i = 0; i < 64; i++) {
            if (i % 8 === 0) {
                board.push(new Array());
            }
            board[Math.floor(i / 8)].push({
                piece: null,
                baseColor: i % 2 ? 'white' : 'black',
            });
        }
        return board;
    }
    setUpChess(board: Board){
        const mainPiecesPattern: Array<PieceName> = [
            'Rook',
            'Knight',
            'Bishop',
            'Queen',
            'King',
            'Bishop',
            'Knight',
            'Rook',
        ];
        for (let i = 0; i < board.length; i++) {
            if (i == 1) {
                this.setUpRows(i, 'black', 'Pawn', board);
            }
            if (i == 6) {
                this.setUpRows(i, 'white', 'Pawn', board);
            }

            if (i == 0) {
                this.setUpRows(i, 'black', '', board, mainPiecesPattern);
            }

            if (i == 7) {
                this.setUpRows(i, 'white', '', board, mainPiecesPattern);
            }
        }
    }

   setUpRows(
        i: number,
        color: Color,
        piece: PieceName | '',
        board: Board,
        pattern?: Array<PieceName>,
    ) {
        board[i].forEach((cell: Cell, j: number) => {
            if (pattern) {
                cell.piece = {
                    color: color,
                    name: pattern[j],
                    address: {
                        row: 0,
                        column: 0,
                        name: '',
                    },
                    validMoves: [],
                };
            } else {
                cell.piece = {
                    color: color,
                    name: piece ? piece : undefined,
                    address: {
                        row: 0,
                        column: 0,
                        name: '',
                    },
                    validMoves: [],
                };
            }
        });
    }
    setAddresses(board: Board) {
        board.forEach((row: ChessRows, i: number) => {
            row.forEach((cell: Cell, j: number) => {
                setAddresses(cell, i, j);
                if (cell.piece) {
                    setAddresses(cell.piece, i, j);
                }
            });
        });
    }
 
}


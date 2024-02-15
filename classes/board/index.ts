
import { Board } from "../../types";
import { BoardManager } from "./manager";

export class BoardBuilder {
    boardManagar: BoardManager;
    board: Board
    constructor() {
        this.boardManagar = new BoardManager();
        this.board = this.boardManagar.initBoard();
        this.boardManagar.setUpChess(this.board);
        this.boardManagar.setAddresses(this.board);
    }

    init(){
        return this.board;
    }
}



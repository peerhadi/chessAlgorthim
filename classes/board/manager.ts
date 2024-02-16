import { Board, Rank } from "../../types";

export function makeBoard(): Board {
    const mainPiecesPattern: Array<Rank> = [
        "Rook",
        "Knight",
        "Bishop",
        "Queen",
        "King",
        "Bishop",
        "Knight",
        "Rook",
    ];

    return [
        mainPiecesPattern.map((rank) => ({ rank, color: "black" })),
        repeat({ rank: "Pawn", color: "black" }, 8),
        ...repeat(repeat(null, 8), 4),
        repeat({ rank: "Pawn", color: "white" }, 8),
        mainPiecesPattern.map((rank) => ({ rank, color: "white" })),
    ];
}

function repeat<T>(value: T, length: number): Array<T> {
    return Array.from({ length }, () => value);
}

type PieceShapes = {
    dimensions: { width: number, height: number },
    shape: { x: number, y: number }[][]
}

type SrsCheck = {
    spawnRight: { x: number, y: number }[],
    rightSpawn: { x: number, y: number }[],
    rightRep: { x: number, y: number }[],
    repRight: { x: number, y: number }[],
    repLeft: { x: number, y: number }[],
    leftRep: { x: number, y: number }[],
    leftSpawn: { x: number, y: number }[],
    spawnLeft: { x: number, y: number }[]
}

const genericSrsCheck: SrsCheck = {
    spawnRight: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -1, y: 1},
        {x: 0, y: -2},
        {x: -1, y: -2}
    ],
    rightSpawn: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 1, y: -1},
        {x: 0, y: 2},
        {x: 1, y: 2}
    ],
    rightRep: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 1, y: -1},
        {x: 0, y: 2},
        {x: 1, y: 2}
    ],
    repRight: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -1, y: 1},
        {x: 0, y: -2},
        {x: -1, y: -2}
    ],
    repLeft: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 1, y: 1},
        {x: 0, y: -2},
        {x: 1, y: -2}
    ],
    leftRep: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -1, y: -1},
        {x: 0, y: 2},
        {x: -1, y: 2}
    ],
    leftSpawn: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -1, y: -1},
        {x: 0, y: 2},
        {x: -1, y: 2}
    ],
    spawnLeft: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 1, y: 1},
        {x: 0, y: -2},
        {x: 1, y: -2}
    ]
};

const iChecks: SrsCheck = {
    spawnRight: [
        {x: 0, y: 0},
        {x: -2, y: 0},
        {x: 1, y: 0},
        {x: -2, y: -1},
        {x: 1, y: 2}
    ],
    rightSpawn: [
        {x: 0, y: 0},
        {x: 2, y: 0},
        {x: -1, y: 0},
        {x: 2, y: 1},
        {x: -1, y: -2}
    ],
    rightRep: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: 2, y: 0},
        {x: -1, y: 2},
        {x: 2, y: -1}
    ],
    repRight: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: -2, y: 0},
        {x: 1, y: -2},
        {x: -2, y: 1}
    ],
    repLeft: [
        {x: 0, y: 0},
        {x: 2, y: 0},
        {x: -1, y: 0},
        {x: 2, y: 1},
        {x: -1, y: -2}
    ],
    leftRep: [
        {x: 0, y: 0},
        {x: -2, y: 0},
        {x: 1, y: 0},
        {x: -2, y: -1},
        {x: 1, y: 2}
    ],
    leftSpawn: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: -2, y: 0},
        {x: 1, y: -2},
        {x: -2, y: 1}
    ],
    spawnLeft: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: 2, y: 0},
        {x: -1, y: 2},
        {x: 2, y: -1}
    ]
}

class PieceType {
    public color: string;
    public name: string;
    public srsShapes: PieceShapes;
    public srsChecks: SrsCheck;
    public code: number = 0;

    constructor(name: string, color: string, code: number) {
        this.name = name;
        this.color = color;
        this.code = code;
    }

    get mino() {
        return this.code;
    }


    public getRotationFor(startingRotation: number, endRotation: number)
        : { x: number, y: number }[] | undefined {
        if ((startingRotation % 2) == (endRotation % 2)) {
            return undefined;
        }
        if (startingRotation == 0 && endRotation == 1) {
            return this.srsChecks.spawnRight;
        }
        if (startingRotation == 0 && endRotation == 3) {
            return this.srsChecks.spawnLeft;
        }
        if (startingRotation == 1 && endRotation == 2) {
            return this.srsChecks.rightRep;
        }
        if (startingRotation == 1 && endRotation == 0) {
            return this.srsChecks.rightSpawn;
        }
        if (startingRotation == 2 && endRotation == 1) {
            return this.srsChecks.repRight;
        }
        if (startingRotation == 2 && endRotation == 3) {
            return this.srsChecks.repLeft;
        }
        if (startingRotation == 3 && endRotation == 0) {
            return this.srsChecks.leftSpawn;
        }
        if (startingRotation == 3 && endRotation == 2) {
            return this.srsChecks.leftRep;
        }
        return undefined;
    }
}

const I = new PieceType("I-piece (cyan)", "#00b6ff", 0);
const J = new PieceType("J-piece (blue)", "#0030ff", 1);
const L = new PieceType("L-piece (orange)", "#ffa600", 2);
const O = new PieceType("O-piece (yellow)", "#ffda00", 3);
const S = new PieceType("S-piece (green)", "#27ff00", 4);
const T = new PieceType("T-piece (purple)", "#b200ff", 5);
const Z = new PieceType("Z-piece (red)", "#ff2900", 6);

const EMPTY_PIECE_COLOR = "#363636";
const PIECE_TYPES = [I, J, L, O, S, T, Z];

I.srsShapes = {
    dimensions: {width: 4, height: 4},
    shape: [
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}],
        [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}],
        [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}],
        [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3}]
    ]
}
J.srsShapes = {
    dimensions: {width: 3, height: 3},
    shape: [
        [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 1, y: 0}, {x: 0, y: 2}, {x: 1, y: 1}, {x: 1, y: 2}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}],
        [{x: 2, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}]
    ]
}
L.srsShapes = {
    dimensions: {width: 3, height: 3},
    shape: [
        [{x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}],
        [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
    ]
}
O.srsShapes = {
    dimensions: {width: 2, height: 2},
    shape: [
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}]
    ]
}
S.srsShapes = {
    dimensions: {width: 3, height: 3},
    shape: [
        [{x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
        [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
        [{x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
        [{x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}]
    ]
}
T.srsShapes = {
    dimensions: {width: 3, height: 3},
    shape: [
        [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [{x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}]
    ]
}
Z.srsShapes = {
    dimensions: {width: 3, height: 3},
    shape: [
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
        [{x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
    ]
}

PIECE_TYPES.slice(1).forEach(pieceType => {
    pieceType.srsChecks = genericSrsCheck;
});

I.srsChecks = iChecks;

enum Mino {
    I = 0,
    J = 1,
    L = 2,
    O = 3,
    S = 4,
    T = 5,
    Z = 6,
    None = 7,
    Shadow = 8
}

enum RotationDirection {
    Clockwise = "clockwise",
    CounterClockwise = "counterClockwise",
    Rotate180 = "180"
}

class Piece {
    public type: PieceType;
    public x: number;
    public y: number;
    public rotation: number;

    public previousMinos: { x: number, y: number }[] = [];

    constructor(type: PieceType) {
        this.type = type;
        this.rotation = 0;
        this.x = 3;
        if (type == O) {
            this.x = 4
        }
        this.y = 0;
    }

    public rotate(rotationDirection: RotationDirection) {
        let newRotation = this.rotation;
        if (rotationDirection === RotationDirection.Clockwise) {
            newRotation--;
        } else if (rotationDirection === RotationDirection.CounterClockwise) {
            newRotation++;
        } else if (rotationDirection === RotationDirection.Rotate180) {
            newRotation += 2;
        }
        newRotation %= 4;
        if (newRotation < 0) {
            newRotation += 4;
        }
        if (rotationDirection != RotationDirection.Rotate180) {
            const shape = this.type.srsShapes.shape[newRotation];
            const srsChecks = this.type.getRotationFor(this.rotation, newRotation);
            for (let i = 0; i < shape.length; i++) {
                const srsCheck = srsChecks[i];
                if (currentGame.canShiftPiece(srsCheck.x, srsCheck.y, shape)) {
                    this.x += srsCheck.x;
                    this.y += srsCheck.y;
                    this.rotation = newRotation;
                    return;
                }
            }
        } else {
            const shape = this.type.srsShapes.shape[newRotation];
            if (currentGame.canShiftPiece(0, 0, shape)) {
                this.rotation = newRotation;
                return;
            }
            for (let y_shift = -1; y_shift <= 1; y_shift++) {
                if (currentGame.canShiftPiece(0, y_shift, shape)) {
                    this.y += y_shift;
                    this.rotation = newRotation;
                    return;
                }
            }
            for (let x_shift = -1; x_shift <= 1; x_shift++) {
                if (x_shift == 0) return;
                for (let y_shift = -1; y_shift <= 1; y_shift++) {
                    if (currentGame.canShiftPiece(x_shift, y_shift, shape)) {
                        this.x += x_shift;
                        this.y += y_shift;
                        this.rotation = newRotation;
                        return;
                    }
                }
            }
        }
    }

    public minoLocations(): { x: number, y: number }[] {
        return this.type.srsShapes.shape[this.rotation].map(mino => {
            return {x: this.x + mino.x, y: this.y + mino.y};
        });
    }

    public paintMinos(board: Mino[][]) {
        this.previousMinos.forEach(location => {
            board[location.y][location.x] = Mino.None;
        });
        this.previousMinos = [];
        let shadowY = this.y;
        while (shadowY++ < 22) {
            let collides = false;
            this.type.srsShapes.shape[this.rotation].forEach(mino => {
                let row = board[shadowY + mino.y];
                if (row === undefined) {
                    collides = true;
                    return;
                }
                let cell = row[this.x + mino.x];
                if (cell === undefined || cell !== Mino.None) {
                    collides = true;
                }
            });
            if (collides) {
                break;
            }
        }
        shadowY--;
        this.type.srsShapes.shape[this.rotation].forEach(mino => {
            let row = board[shadowY + mino.y];
            if (row === undefined) {
                return;
            }
            row[this.x + mino.x] = Mino.Shadow;
            this.previousMinos.push({x: this.x + mino.x, y: shadowY + mino.y});
        });
        this.type.srsShapes.shape[this.rotation].forEach(mino => {
            let row = board[this.y + mino.y];
            if (row === undefined) {
                return;
            }
            row[this.x + mino.x] = this.type.mino;
            this.previousMinos.push({x: this.x + mino.x, y: this.y + mino.y});
        });
    }
}

class Queue {

    private queue: PieceType[] = [];
    private bagInfo: Bag[] = [];

    private nextBag(): PieceType[] {
        let bag = PIECE_TYPES.slice();
        for (let i = bag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        bag.filter(piece => !this.bagInfo.length || this.bagInfo[0].allowsPiece(piece))
        if (this.bagInfo.length) {
            bag.slice(0, this.bagInfo[0].maxSize)
        }
        this.queue = this.queue.concat(bag);
        return bag;
    }

    public next(): PieceType {
        if (this.queue.length < 6) {
            this.bagInfo.splice(1)
            this.nextBag()
        }
        return this.queue.shift()!;
    }

    public queuePieces(): PieceType[] {
        if (this.queue.length < 6) {
            this.nextBag();
        }
        return this.queue.slice(0, 5);
    }

}

class Bag {

    private allowedPieces: PieceType[] = [];
    public maxSize: number;
    public bagChecks = [];

    constructor(pieces: PieceType[], size: number = 6) {
        this.allowedPieces = pieces
    }

    public allowsPiece(piece: PieceType): boolean {
        return this.allowedPieces.some(allowedPiece => allowedPiece === piece)
    }

    public validateBagCheck(bag: []) {
    }
}

const GenericBag = new Bag(PIECE_TYPES)

function readBagFile(data: string): Bag {
    return undefined;
}

class Controls {

    public left: string
    public right: string;
    public down: string;
    public rotateClockwise: string;
    public rotateCounterClockwise: string;
    public rotate180: string;
    public hold: string;
    public hardDrop: string;

    constructor(left: string,
                right: string,
                down: string,
                rotateClockwise: string,
                rotateCounterClockwise: string,
                rotate180: string,
                hold: string,
                hardDrop: string
    ) {
        this.left = left;
        this.right = right;
        this.down = down;
        this.rotateClockwise = rotateClockwise;
        this.rotateCounterClockwise = rotateCounterClockwise;
        this.rotate180 = rotate180;
        this.hold = hold;
        this.hardDrop = hardDrop;
    }

    public copy(): Controls {
        return new Controls(this.left, this.right, this.down, this.rotateClockwise, this.rotateCounterClockwise, this.rotate180, this.hold, this.hardDrop);
    }
}

const defaultControls =
    new Controls("ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "z", "x", "c", " ");

const alternativeControls =
    new Controls("j", "l", "k", "r", "w", "e", "i", " ");

class Game {

    public queue = new Queue();
    public currentPiece: Piece;

    public board: Mino[][] = [];
    public nextPieces: PieceType[] = [];

    public location: HTMLDivElement;
    public frameCounter: number = 0;

    public display: HTMLDivElement[][] = [];

    public gravity: number = 20;
    public gravityCounter: number = 0;

    public marginTime = 20;
    public marginCounter = 0;

    public holdPiece?: PieceType;
    public heldCurrentPieceAlready: boolean = false;

    public controls: Controls = currentControls;
    public holdPieceDisplay: HTMLDivElement[][] = [];

    public queueDisplay: HTMLDivElement[][] = [];

    public gameOver: boolean = false;
    public pieceCount = 0;

    public linesCleared = 0;
    public score = 0;

    public labelElement: HTMLParagraphElement;
    public gameStartInstant: number;

    public gamePaused: boolean = false;
    public topLabelElement: HTMLParagraphElement;


    constructor(location: HTMLDivElement, labelElement: HTMLParagraphElement, topLabelElement: HTMLParagraphElement) {
        this.board = new Array(22);
        for (let i = 0; i < 22; i++) {
            this.board[i] = new Array(10);
            for (let j = 0; j < 10; j++) {
                this.board[i][j] = Mino.None;
            }
        }
        this.currentPiece = new Piece(this.queue.next());
        this.nextPieces = this.queue.queuePieces();
        this.location = location;

        this.labelElement = labelElement;
        this.gameStartInstant = Date.now() / 1000;
        this.displayLabel();

        this.topLabelElement = topLabelElement;

        this.initializeDisplay();
        this.initializeControls();
        this.updateQueueDisplay();
        document.addEventListener("visibilitychange", () => {
            if (document.hidden && !this.gameOver) {
                this.gamePaused = true;
                this.topLabelElement.innerText = "Paused : Press any key to resume";
                this.mostRecentCall = undefined;
            }
        });
        setInterval(() => this.performTick(), 20);
    }


    public performTick() {
        if (this.gameOver || this.gamePaused) return;
        this.frameCounter++;
        if (!this.canShiftPiece(0, 1)) {
            this.marginCounter++;
            if (this.marginCounter >= this.marginTime) {
                this.nextPiece();
            }
        } else {
            this.gravityCounter++;
            if (this.gravityCounter >= this.gravity) {
                this.movePieceBecauseGravity()
                this.marginCounter--;
                if (this.marginCounter < 0) {
                    this.marginCounter = 0;
                }
            }
        }

        this.displayLabel();
    }

    private displayLabel() {
        this.labelElement.innerText = `Lines: ${this.linesCleared} Pieces: ${this.pieceCount} 
        Score: ${this.score} Time: ${this.secondsPlaying.toFixed(2)}`
    }

    private mostRecentCall: string = "";

    private displayTopLabel(text: string) {
        this.topLabelElement.innerText = text;
        this.mostRecentCall = text;

        setTimeout(() => {
            if (this.mostRecentCall === text) {
                this.topLabelElement.innerText = " ";
            }
        }, 300);
        // flash 3 times
        setTimeout(() => {
            if (this.mostRecentCall === text) {
                this.topLabelElement.innerText = text;
            }
        }, 600);
        setTimeout(() => {
            if (this.mostRecentCall === text) {
                this.topLabelElement.innerText = " ";
            }
        }, 900);
        setTimeout(() => {
            if (this.mostRecentCall === text) {
                this.topLabelElement.innerText = text;
            }
        }, 1200);
        setTimeout(() => {
            if (this.mostRecentCall === text) {
                this.topLabelElement.innerText = " ";
            }
        }, 1500);
    }

    private nextPiece() {
        let count = 0;
        for (let i = 0; i < 22; i++) {
            if (this.checkRowClear(i)) {
                count++;
            }
        }
        if (count > 0) {
            let scoreIncrease: number;
            let type: string;
            switch (count) {
                case 1:
                    scoreIncrease = 40;
                    type = "Single";
                    break;
                case 2:
                    scoreIncrease = 100;
                    type = "Double";
                    break;
                case 3:
                    scoreIncrease = 300;
                    type = "Triple";
                    break;
                case 4:
                    scoreIncrease = 1200;
                    type = "Tetris";
                    break;
            }
            // check for all clear
            if (this.board[21].every(mino => mino === Mino.None)) {
                scoreIncrease *= 1.5;
                scoreIncrease += 2500;
                type += " All Clear";
            }
            if (this.score + scoreIncrease > 20000 && this.score <= 20000) {
                type += " - 20K Score";
            }
            this.score += scoreIncrease;
            this.displayTopLabel(type);
        }

        if (this.gameOver) return;
        if (this.currentPiece.y < 1) {
            this.endGame();
            return;
        }
        this.pieceCount++;
        let x = this.score / 5000.0;
        this.gravity = Math.round(Math.pow(0.5, x) * 20);
        this.marginCounter = 0;
        this.gravityCounter = 0;
        this.currentPiece = new Piece(this.queue.next());
        this.nextPieces = this.queue.queuePieces();
        this.heldCurrentPieceAlready = false;

        this.updateQueueDisplay()
    }

    private checkRowClear(row: number): boolean {
        for (let i = 0; i < 10; i++) {
            if (this.board[row][i] === Mino.None) {
                return;
            }
        }
        this.board.splice(row, 1);
        let array = new Array(10);
        for (let i = 0; i < 10; i++) {
            array[i] = Mino.None;
        }
        this.linesCleared++;
        this.board.unshift(array);
        this.displayBoard();
        return true;
    }

    public canShiftPiece(
        _x: number,
        _y: number,
        minos: { x: number, y: number }[] =
            this.currentPiece.type.srsShapes.shape[this.currentPiece.rotation]
    ): boolean {
        let canMove = true;
        if (this.currentPiece.y >= 22) {
            canMove = false;
        }
        const minoLocations = this.currentPiece.minoLocations();
        minos.forEach(mino => {
            if (!canMove) {
                return;
            }
            let x = this.currentPiece.x + mino.x + _x;
            let y = this.currentPiece.y + mino.y + _y;
            let row = this.board[y];
            if (row === undefined) {
                canMove = false;
                return;
            }
            if (x < 0 || x > 9) {
                canMove = false;
                return;
            }
            if (minoLocations.some(location => location.x === x && location.y === y)) {
                return;
            }
            let cell = row[x];
            if (cell === undefined || (cell !== Mino.None && cell !== Mino.Shadow)) {
                canMove = false;
                return;
            }
        });
        return canMove;
    }

    private movePieceBecauseGravity() {
        this.currentPiece.y++;
        this.currentPiece.paintMinos(this.board);
        this.displayBoard();
        this.gravityCounter = 0;
    }

    get secondsPlaying(): number {
        return this.frameCounter / 50;
    }

    public updateHoldDisplay() {
        let minos: Mino[][] = [];
        if (this.holdPiece === undefined) {
            for (let i = 0; i < 3; i++) {
                minos[i] = [];
                for (let j = 0; j < 4; j++) {
                    minos[i].push(Mino.None);
                }
            }
        } else {
            minos = this.convertToCompactSize(this.holdPiece);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (minos[i][j] === Mino.None) {
                    this.holdPieceDisplay[i][j].style.backgroundColor = "#313131";
                } else {
                    this.holdPieceDisplay[i][j].style.backgroundColor = PIECE_TYPES[minos[i][j]].color;
                }
            }
        }
    }

    public updateQueueDisplay() {
        for (let i = 0; i < 5; i++) {
            let convertToCompactSize1 = this.convertToCompactSize(this.nextPieces[i]);
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 4; k++) {
                    if (convertToCompactSize1[j][k] === Mino.None) {
                        this.queueDisplay[i * 3 + j][k].style.backgroundColor = "#313131";
                    } else {
                        this.queueDisplay[i * 3 + j][k].style.backgroundColor = PIECE_TYPES[convertToCompactSize1[j][k]].color;
                    }
                }
            }
        }
    }

    public convertToCompactSize(pieceType: PieceType): Mino[][] {
        const minos = [];
        for (let i = 0; i < 3; i++) {
            minos[i] = [];
            for (let j = 0; j < 4; j++) {
                minos[i].push(Mino.None);
            }
        }
        if (pieceType === I) {
            for (let i = 0; i < 4; i++) {
                minos[1][i] = Mino.I;
            }
        } else if (pieceType.srsShapes.dimensions.width == 3) {
            pieceType.srsShapes.shape[0].forEach((location) => {
                minos[location.y][location.x] = pieceType.mino;
            });
        } else {
            minos[1][1] = Mino.O;
            minos[1][2] = Mino.O;
            minos[0][1] = Mino.O;
            minos[0][2] = Mino.O;
        }
        return minos;
    }

    public initializeControls() {
        document.addEventListener('keydown', (event) => {
            if (this.gameOver) {
                if (event.key == "Enter") {
                    // reset game
                    this.reset();
                }
                return;
            } else if (this.gamePaused) {
                this.gamePaused = false;
                this.displayTopLabel("Resumed");
                return;
            }
            let preventDefault = true;
            switch (event.key) {
                case this.controls.left:
                    this.movePieceLeft();
                    break;
                case this.controls.right:
                    this.movePieceRight();
                    break;
                case this.controls.rotateClockwise:
                    this.currentPiece.rotate(RotationDirection.Clockwise);
                    break;
                case this.controls.down:
                    this.movePieceDown();
                    break;
                case this.controls.hardDrop:
                    this.hardDrop();
                    break;
                case this.controls.hold:
                    this.holdCurrentPiece();
                    break;
                case this.controls.rotateCounterClockwise:
                    this.currentPiece.rotate(RotationDirection.CounterClockwise);
                    break;
                case this.controls.rotate180:
                    this.currentPiece.rotate(RotationDirection.Rotate180);
                    break;
                case "F4":
                    this.reset();
                    break;
                case "Escape":
                    this.gamePaused = true;
                    this.topLabelElement.innerText = "Paused : Press any key to resume";
                    this.mostRecentCall = undefined;
                    break;
                default:
                    preventDefault = false;
                    break;
            }
            if (preventDefault) {
                event.preventDefault();
            }
            this.currentPiece.paintMinos(this.board);
            this.displayBoard();
        });
    }

    public holdCurrentPiece() {
        if (this.heldCurrentPieceAlready) {
            return;
        }
        this.currentPiece.previousMinos.forEach((mino) => {
            this.board[mino.y][mino.x] = Mino.None;
        });
        let pieceType = this.holdPiece;
        if (pieceType == undefined) {
            pieceType = this.queue.next();
        }
        this.updateQueueDisplay();
        console.log("Holding " + pieceType.name);
        this.holdPiece = this.currentPiece.type;
        this.heldCurrentPieceAlready = true;
        this.currentPiece = new Piece(pieceType);

        this.updateHoldDisplay();
    }

    public initializeDisplay() {
        // create 21 x 10 board of divs representing minos
        const board = document.createElement("div");
        board.classList.add("board");
        // add 2 lines
        for (let i = 0; i < 2; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            const rowDisplay: HTMLDivElement[] = [];

            for (let j = 0; j < 4; j++) {
                const mino = document.createElement("div");
                mino.classList.add("mino");
                mino.classList.add("black-mino");
                row.appendChild(mino);
            }

            const mino1 = document.createElement("div");
            mino1.classList.add("mino");
            mino1.classList.add("black-mino");
            row.appendChild(mino1);
            for (let j = 0; j < 10; j++) {
                const mino = document.createElement("div");
                mino.classList.add("mino");
                mino.classList.add("black-mino");
                row.appendChild(mino);
                rowDisplay.push(mino);
            }
            board.appendChild(row);
            this.display.push(rowDisplay);
        }
        for (let i = 0; i < 20; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            const rowDisplay: HTMLDivElement[] = [];
            if (i < 3) {
                const holdDisplay = [];
                for (let j = 0; j < 4; j++) {
                    const mino = document.createElement("div");
                    mino.classList.add("mino");
                    row.appendChild(mino);
                    holdDisplay.push(mino);
                }
                this.holdPieceDisplay.push(holdDisplay);
            } else {
                for (let j = 0; j < 4; j++) {
                    const mino = document.createElement("div");
                    mino.classList.add("mino");
                    mino.classList.add("black-mino");
                    row.appendChild(mino);
                }
            }

            const mino1 = document.createElement("div");
            mino1.classList.add("mino");
            mino1.classList.add("black-mino");
            row.appendChild(mino1);
            for (let j = 0; j < 10; j++) {
                const mino = document.createElement("div");
                mino.classList.add("mino");
                row.appendChild(mino);
                rowDisplay.push(mino);
            }

            const mino2 = document.createElement("div");
            mino2.classList.add("mino");
            mino2.classList.add("black-mino");
            row.appendChild(mino2);

            const queueDisplayArray = [];
            for (let j = 0; j < 4; j++) {
                const mino = document.createElement("div");
                mino.classList.add("mino");
                mino.classList.add("black-mino");
                row.appendChild(mino);
                queueDisplayArray.push(mino);
            }
            this.queueDisplay.push(queueDisplayArray);
            board.appendChild(row);
            this.display.push(rowDisplay);
        }
        this.location.appendChild(board);
    }

    public displayBoard() {
        for (let i = 0; i < 22; i++) {
            for (let j = 0; j < 10; j++) {
                const minoEmptyColor = (i < 2) ? "black" : "#313131";
                if (this.board[i][j] === Mino.None) {
                    this.display[i][j].style.backgroundColor = minoEmptyColor;
                } else if (this.board[i][j] === Mino.Shadow) {
                    this.display[i][j].style.backgroundColor = "#818181";
                } else {
                    this.display[i][j].style.backgroundColor = PIECE_TYPES[this.board[i][j]].color;
                }
            }
        }
    }

    private endGame() {
        this.gameOver = true;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] !== Mino.None) {
                    this.board[i][j] = Mino.Shadow;
                }
            }
        }
        this.currentPiece.minoLocations().forEach((minoLocation) => {
            this.board[minoLocation.y][minoLocation.x] = Mino.Shadow
        });
        this.displayBoard();
        this.topLabelElement.innerHTML = "Game Over";
    }

    private movePieceLeft() {
        if (this.canShiftPiece(-1, 0)) {
            this.currentPiece.x--;
        }
        if (this.gravityCounter > 0) {
            this.gravityCounter--;
        }
    }

    private movePieceRight() {
        if (this.canShiftPiece(1, 0)) {
            this.currentPiece.x++;
        }
        if (this.gravityCounter > 0) {
            this.gravityCounter--;
        }
    }

    private movePieceDown() {
        if (this.canShiftPiece(0, 1)) {
            this.currentPiece.y++;
            this.gravityCounter = 0;
            this.score += 1;
        }
    }

    private hardDrop() {
        let counter = 0;
        while (this.canShiftPiece(0, 1)) {
            this.currentPiece.y++;
            counter++;
        }
        this.score += counter * 2;
        this.currentPiece.paintMinos(this.board);
        this.nextPiece();
    }

    public reset() {
        this.board = [];
        // make it 22 rows so that the pieces can spawn off the board
        for (let i = 0; i < 22; i++) {
            this.board.push([]);
            for (let j = 0; j < 10; j++) {
                this.board[i].push(Mino.None);
            }
        }
        this.queue = new Queue();
        this.linesCleared = 0;
        this.currentPiece = new Piece(this.queue.next());
        this.nextPieces = this.queue.queuePieces();

        this.gameOver = false;
        this.gravityCounter = 0;
        this.gravity = 20;
        this.frameCounter = 0;
        this.marginCounter = 0;
        this.holdPiece = undefined;
        this.pieceCount = 0;

        this.score = 0;

        this.heldCurrentPieceAlready = false;

        this.displayBoard();
        this.updateHoldDisplay()
        this.updateQueueDisplay();
    }
}

function debugPieceTypes() {
    PIECE_TYPES.forEach(pieceType => {
        console.log(pieceType.name);
        pieceType.srsShapes.shape.forEach((rotation) => {
            const shape = new Array(pieceType.srsShapes.dimensions.height);
            for (let i = 0; i < shape.length; i++) {
                shape[i] = new Array(pieceType.srsShapes.dimensions.width);
                for (let j = 0; j < shape[i].length; j++) {
                    shape[i][j] = false;
                }
            }
            rotation.forEach(mino => {
                shape[mino.y][mino.x] = true;
            });
            shape.forEach(row => {
                console.log(row.map(cell => cell ? "[]" : ". ").join(""));
            });
            console.log("\n");
        });
    });
}

let currentGame: Game;

const gameDiv = document.getElementById("tetris") as HTMLDivElement;
gameDiv.style.display = "none";

const startButton = document.getElementById("start-button") as HTMLButtonElement;
startButton.addEventListener("click", () => {
    startGame();
});

let currentControls: Controls = defaultControls.copy();

const controlButtons = document.getElementById("control-button") as HTMLDivElement;
let _controlDiv: HTMLDivElement;

controlButtons.addEventListener("click", (event) => {

    if (_controlDiv !== undefined && _controlDiv.style.display !== "none") {
        _controlDiv.style.display = "none";
        return;
    }

    _controlDiv = document.createElement("div");
    const listOfControls = ["left", "right", "down", "rotate cc", "rotate c", "rotate 180", "hard drop", "hold"];
    const divMap = {};
    listOfControls.forEach(control => {
        const controlDiv = document.createElement("div");
        divMap[control] = controlDiv;
        controlDiv.classList.add("control");
        controlDiv.innerText = control;
        controlDiv.addEventListener("click", () => {
            let works: boolean = true;
            document.addEventListener("keydown", (event) => {
                if (works) {
                    switch (control) {
                        case "left":
                            currentControls.left = event.key;
                            break;
                        case "right":
                            currentControls.right = event.key;
                            break;
                        case "down":
                            currentControls.down = event.key;
                            break;
                        case "rotate cc":
                            currentControls.rotateCounterClockwise = event.key;
                            break;
                        case "rotate c":
                            currentControls.rotateClockwise = event.key;
                            break;
                        case "rotate 180":
                            currentControls.rotate180 = event.key;
                            break;
                        case "hard drop":
                            currentControls.hardDrop = event.key;
                            break;
                        case "hold":
                            currentControls.hold = event.key;
                            break;
                    }
                    event.preventDefault();
                    works = false;
                    updateControls();
                }
            });
        });
        _controlDiv.appendChild(controlDiv);
    });

    function updateControls() {
        listOfControls.forEach(control => {
            let controlKey;
            switch (control) {
                case "left":
                    controlKey = currentControls.left;
                    break;
                case "right":
                    controlKey = currentControls.right;
                    break;
                case "down":
                    controlKey = currentControls.down;
                    break;
                case "rotate cc":
                    controlKey = currentControls.rotateCounterClockwise;
                    break;
                case "rotate c":
                    controlKey = currentControls.rotateClockwise;
                    break;
                case "rotate 180":
                    controlKey = currentControls.rotate180;
                    break;
                case "hard drop":
                    controlKey = currentControls.hardDrop;
                    break;
                case "hold":
                    controlKey = currentControls.hold;
                    break;
            }
            divMap[control].innerText = control + ": " + controlKey;
        });
    }

    updateControls();

    // create a button where people can reset to default controls
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.addEventListener("click", () => {
        // reset the controls
        currentControls = defaultControls.copy();
        updateControls();
    });
    _controlDiv.appendChild(resetButton);
    // create a button where people can set it to alternate controls
    const alternateButton = document.createElement("button");
    alternateButton.innerText = "Alternate";
    alternateButton.addEventListener("click", () => {
        currentControls = alternativeControls.copy();
        updateControls();
    });
    _controlDiv.appendChild(alternateButton);
    document.body.appendChild(_controlDiv);
});

const startingPage = document.getElementById("starting-page") as HTMLDivElement;

function startGame() {
    gameDiv.style.display = "block";
    if (_controlDiv !== undefined) {
        _controlDiv.style.display = "none";
    }
    startingPage.style.display = "none";
    currentGame = new Game(
        gameDiv,
        document.getElementById("label") as HTMLParagraphElement,
        document.getElementById("top-label") as HTMLParagraphElement,
    );
}

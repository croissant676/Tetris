var genericSrsCheck = {
    spawnRight: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: 0, y: -2 },
        { x: -1, y: -2 }
    ],
    rightSpawn: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 0, y: 2 },
        { x: 1, y: 2 }
    ],
    rightRep: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 0, y: 2 },
        { x: 1, y: 2 }
    ],
    repRight: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: 0, y: -2 },
        { x: -1, y: -2 }
    ],
    repLeft: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: -2 },
        { x: 1, y: -2 }
    ],
    leftRep: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: 2 },
        { x: -1, y: 2 }
    ],
    leftSpawn: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: 2 },
        { x: -1, y: 2 }
    ],
    spawnLeft: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: -2 },
        { x: 1, y: -2 }
    ]
};
var iChecks = {
    spawnRight: [
        { x: 0, y: 0 },
        { x: -2, y: 0 },
        { x: 1, y: 0 },
        { x: -2, y: -1 },
        { x: 1, y: 2 }
    ],
    rightSpawn: [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
        { x: -1, y: 0 },
        { x: 2, y: 1 },
        { x: -1, y: -2 }
    ],
    rightRep: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: 2, y: 0 },
        { x: -1, y: 2 },
        { x: 2, y: -1 }
    ],
    repRight: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: -2, y: 0 },
        { x: 1, y: -2 },
        { x: -2, y: 1 }
    ],
    repLeft: [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
        { x: -1, y: 0 },
        { x: 2, y: 1 },
        { x: -1, y: -2 }
    ],
    leftRep: [
        { x: 0, y: 0 },
        { x: -2, y: 0 },
        { x: 1, y: 0 },
        { x: -2, y: -1 },
        { x: 1, y: 2 }
    ],
    leftSpawn: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: -2, y: 0 },
        { x: 1, y: -2 },
        { x: -2, y: 1 }
    ],
    spawnLeft: [
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: 2, y: 0 },
        { x: -1, y: 2 },
        { x: 2, y: -1 }
    ]
};
var PieceType = /** @class */ (function () {
    function PieceType(name, color, code) {
        this.code = 0;
        this.name = name;
        this.color = color;
        this.code = code;
    }
    Object.defineProperty(PieceType.prototype, "mino", {
        get: function () {
            return this.code;
        },
        enumerable: false,
        configurable: true
    });
    PieceType.prototype.getRotationFor = function (startingRotation, endRotation) {
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
    };
    return PieceType;
}());
var I = new PieceType("I-piece (cyan)", "#00b6ff", 0);
var J = new PieceType("J-piece (blue)", "#0030ff", 1);
var L = new PieceType("L-piece (orange)", "#ffa600", 2);
var O = new PieceType("O-piece (yellow)", "#ffda00", 3);
var S = new PieceType("S-piece (green)", "#27ff00", 4);
var T = new PieceType("T-piece (purple)", "#b200ff", 5);
var Z = new PieceType("Z-piece (red)", "#ff2900", 6);
var EMPTY_PIECE_COLOR = "#363636";
var PIECE_TYPES = [I, J, L, O, S, T, Z];
I.srsShapes = {
    dimensions: { width: 4, height: 4 },
    shape: [
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
    ]
};
J.srsShapes = {
    dimensions: { width: 3, height: 3 },
    shape: [
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 1, y: 0 }, { x: 0, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
        [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
    ]
};
L.srsShapes = {
    dimensions: { width: 3, height: 3 },
    shape: [
        [{ x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
    ]
};
O.srsShapes = {
    dimensions: { width: 2, height: 2 },
    shape: [
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]
    ]
};
S.srsShapes = {
    dimensions: { width: 3, height: 3 },
    shape: [
        [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
    ]
};
T.srsShapes = {
    dimensions: { width: 3, height: 3 },
    shape: [
        [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
    ]
};
Z.srsShapes = {
    dimensions: { width: 3, height: 3 },
    shape: [
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 2 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
        [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
    ]
};
PIECE_TYPES.slice(1).forEach(function (pieceType) {
    pieceType.srsChecks = genericSrsCheck;
});
I.srsChecks = iChecks;
var Mino;
(function (Mino) {
    Mino[Mino["I"] = 0] = "I";
    Mino[Mino["J"] = 1] = "J";
    Mino[Mino["L"] = 2] = "L";
    Mino[Mino["O"] = 3] = "O";
    Mino[Mino["S"] = 4] = "S";
    Mino[Mino["T"] = 5] = "T";
    Mino[Mino["Z"] = 6] = "Z";
    Mino[Mino["None"] = 7] = "None";
    Mino[Mino["Shadow"] = 8] = "Shadow";
})(Mino || (Mino = {}));
var RotationDirection;
(function (RotationDirection) {
    RotationDirection["Clockwise"] = "clockwise";
    RotationDirection["CounterClockwise"] = "counterClockwise";
    RotationDirection["Rotate180"] = "180";
})(RotationDirection || (RotationDirection = {}));
var Piece = /** @class */ (function () {
    function Piece(type) {
        this.previousMinos = [];
        this.type = type;
        this.rotation = 0;
        this.x = 3;
        if (type == O) {
            this.x = 4;
        }
        this.y = 0;
    }
    Piece.prototype.rotate = function (rotationDirection) {
        var newRotation = this.rotation;
        if (rotationDirection === RotationDirection.Clockwise) {
            newRotation--;
        }
        else if (rotationDirection === RotationDirection.CounterClockwise) {
            newRotation++;
        }
        else if (rotationDirection === RotationDirection.Rotate180) {
            newRotation += 2;
        }
        newRotation %= 4;
        if (newRotation < 0) {
            newRotation += 4;
        }
        if (rotationDirection != RotationDirection.Rotate180) {
            var shape = this.type.srsShapes.shape[newRotation];
            var srsChecks = this.type.getRotationFor(this.rotation, newRotation);
            for (var i = 0; i < shape.length; i++) {
                var srsCheck = srsChecks[i];
                if (currentGame.canShiftPiece(srsCheck.x, srsCheck.y, shape)) {
                    this.x += srsCheck.x;
                    this.y += srsCheck.y;
                    this.rotation = newRotation;
                    return;
                }
            }
        }
        else {
            var shape = this.type.srsShapes.shape[newRotation];
            if (currentGame.canShiftPiece(0, 0, shape)) {
                this.rotation = newRotation;
                return;
            }
            for (var y_shift = -1; y_shift <= 1; y_shift++) {
                if (currentGame.canShiftPiece(0, y_shift, shape)) {
                    this.y += y_shift;
                    this.rotation = newRotation;
                    return;
                }
            }
            for (var x_shift = -1; x_shift <= 1; x_shift++) {
                if (x_shift == 0)
                    return;
                for (var y_shift = -1; y_shift <= 1; y_shift++) {
                    if (currentGame.canShiftPiece(x_shift, y_shift, shape)) {
                        this.x += x_shift;
                        this.y += y_shift;
                        this.rotation = newRotation;
                        return;
                    }
                }
            }
        }
    };
    Piece.prototype.minoLocations = function () {
        var _this = this;
        return this.type.srsShapes.shape[this.rotation].map(function (mino) {
            return { x: _this.x + mino.x, y: _this.y + mino.y };
        });
    };
    Piece.prototype.paintMinos = function (board) {
        var _this = this;
        this.previousMinos.forEach(function (location) {
            board[location.y][location.x] = Mino.None;
        });
        this.previousMinos = [];
        var shadowY = this.y;
        var _loop_1 = function () {
            var collides = false;
            this_1.type.srsShapes.shape[this_1.rotation].forEach(function (mino) {
                var row = board[shadowY + mino.y];
                if (row === undefined) {
                    collides = true;
                    return;
                }
                var cell = row[_this.x + mino.x];
                if (cell === undefined || cell !== Mino.None) {
                    collides = true;
                }
            });
            if (collides) {
                return "break";
            }
        };
        var this_1 = this;
        while (shadowY++ < 22) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        shadowY--;
        this.type.srsShapes.shape[this.rotation].forEach(function (mino) {
            var row = board[shadowY + mino.y];
            if (row === undefined) {
                return;
            }
            row[_this.x + mino.x] = Mino.Shadow;
            _this.previousMinos.push({ x: _this.x + mino.x, y: shadowY + mino.y });
        });
        this.type.srsShapes.shape[this.rotation].forEach(function (mino) {
            var row = board[_this.y + mino.y];
            if (row === undefined) {
                return;
            }
            row[_this.x + mino.x] = _this.type.mino;
            _this.previousMinos.push({ x: _this.x + mino.x, y: _this.y + mino.y });
        });
    };
    return Piece;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
        this.bagInfo = [];
    }
    Queue.prototype.nextBag = function () {
        var _a;
        var _this = this;
        var bag = PIECE_TYPES.slice();
        for (var i = bag.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [bag[j], bag[i]], bag[i] = _a[0], bag[j] = _a[1];
        }
        bag.filter(function (piece) { return !_this.bagInfo.length || _this.bagInfo[0].allowsPiece(piece); });
        if (this.bagInfo.length) {
            bag.slice(0, this.bagInfo[0].maxSize);
        }
        this.queue = this.queue.concat(bag);
        return bag;
    };
    Queue.prototype.next = function () {
        if (this.queue.length < 6) {
            this.bagInfo.splice(1);
            this.nextBag();
        }
        return this.queue.shift();
    };
    Queue.prototype.queuePieces = function () {
        if (this.queue.length < 6) {
            this.nextBag();
        }
        return this.queue.slice(0, 5);
    };
    return Queue;
}());
var Bag = /** @class */ (function () {
    function Bag(pieces, size) {
        if (size === void 0) { size = 6; }
        this.allowedPieces = [];
        this.bagChecks = [];
        this.allowedPieces = pieces;
    }
    Bag.prototype.allowsPiece = function (piece) {
        return this.allowedPieces.some(function (allowedPiece) { return allowedPiece === piece; });
    };
    Bag.prototype.validateBagCheck = function (bag) {
    };
    return Bag;
}());
var GenericBag = new Bag(PIECE_TYPES);
function readBagFile(data) {
    return undefined;
}
var Controls = /** @class */ (function () {
    function Controls(left, right, down, rotateClockwise, rotateCounterClockwise, rotate180, hold, hardDrop) {
        this.left = left;
        this.right = right;
        this.down = down;
        this.rotateClockwise = rotateClockwise;
        this.rotateCounterClockwise = rotateCounterClockwise;
        this.rotate180 = rotate180;
        this.hold = hold;
        this.hardDrop = hardDrop;
    }
    Controls.prototype.copy = function () {
        return new Controls(this.left, this.right, this.down, this.rotateClockwise, this.rotateCounterClockwise, this.rotate180, this.hold, this.hardDrop);
    };
    return Controls;
}());
var defaultControls = new Controls("ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "z", "x", "c", " ");
var alternativeControls = new Controls("j", "l", "k", "r", "w", "e", "i", " ");
var Game = /** @class */ (function () {
    function Game(location, labelElement, topLabelElement) {
        var _this = this;
        this.queue = new Queue();
        this.board = [];
        this.nextPieces = [];
        this.frameCounter = 0;
        this.display = [];
        this.gravity = 20;
        this.gravityCounter = 0;
        this.marginTime = 20;
        this.marginCounter = 0;
        this.heldCurrentPieceAlready = false;
        this.controls = currentControls;
        this.holdPieceDisplay = [];
        this.queueDisplay = [];
        this.gameOver = false;
        this.pieceCount = 0;
        this.linesCleared = 0;
        this.score = 0;
        this.gamePaused = false;
        this.mostRecentCall = "";
        this.board = new Array(22);
        for (var i = 0; i < 22; i++) {
            this.board[i] = new Array(10);
            for (var j = 0; j < 10; j++) {
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
        document.addEventListener("visibilitychange", function () {
            if (document.hidden && !_this.gameOver) {
                _this.gamePaused = true;
                _this.topLabelElement.innerText = "Paused : Press any key to resume";
                _this.mostRecentCall = undefined;
            }
        });
        setInterval(function () { return _this.performTick(); }, 20);
    }
    Game.prototype.performTick = function () {
        if (this.gameOver || this.gamePaused)
            return;
        this.frameCounter++;
        if (!this.canShiftPiece(0, 1)) {
            this.marginCounter++;
            if (this.marginCounter >= this.marginTime) {
                this.nextPiece();
            }
        }
        else {
            this.gravityCounter++;
            if (this.gravityCounter >= this.gravity) {
                this.movePieceBecauseGravity();
                this.marginCounter--;
                if (this.marginCounter < 0) {
                    this.marginCounter = 0;
                }
            }
        }
        this.displayLabel();
    };
    Game.prototype.displayLabel = function () {
        this.labelElement.innerText = "Lines: ".concat(this.linesCleared, " Pieces: ").concat(this.pieceCount, " \n        Score: ").concat(this.score, " Time: ").concat(this.secondsPlaying.toFixed(2));
    };
    Game.prototype.displayTopLabel = function (text) {
        var _this = this;
        this.topLabelElement.innerText = text;
        this.mostRecentCall = text;
        setTimeout(function () {
            if (_this.mostRecentCall === text) {
                _this.topLabelElement.innerText = " ";
            }
        }, 300);
        // flash 3 times
        setTimeout(function () {
            if (_this.mostRecentCall === text) {
                _this.topLabelElement.innerText = text;
            }
        }, 600);
        setTimeout(function () {
            if (_this.mostRecentCall === text) {
                _this.topLabelElement.innerText = " ";
            }
        }, 900);
        setTimeout(function () {
            if (_this.mostRecentCall === text) {
                _this.topLabelElement.innerText = text;
            }
        }, 1200);
        setTimeout(function () {
            if (_this.mostRecentCall === text) {
                _this.topLabelElement.innerText = " ";
            }
        }, 1500);
    };
    Game.prototype.nextPiece = function () {
        var count = 0;
        for (var i = 0; i < 22; i++) {
            if (this.checkRowClear(i)) {
                count++;
            }
        }
        if (count > 0) {
            var scoreIncrease = void 0;
            var type = void 0;
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
            if (this.board[21].every(function (mino) { return mino === Mino.None; })) {
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
        if (this.gameOver)
            return;
        if (this.currentPiece.y < 1) {
            this.endGame();
            return;
        }
        this.pieceCount++;
        var x = this.score / 5000.0;
        this.gravity = Math.round(Math.pow(0.5, x) * 20);
        this.marginCounter = 0;
        this.gravityCounter = 0;
        this.currentPiece = new Piece(this.queue.next());
        this.nextPieces = this.queue.queuePieces();
        this.heldCurrentPieceAlready = false;
        this.updateQueueDisplay();
    };
    Game.prototype.checkRowClear = function (row) {
        for (var i = 0; i < 10; i++) {
            if (this.board[row][i] === Mino.None) {
                return;
            }
        }
        this.board.splice(row, 1);
        var array = new Array(10);
        for (var i = 0; i < 10; i++) {
            array[i] = Mino.None;
        }
        this.linesCleared++;
        this.board.unshift(array);
        this.displayBoard();
        return true;
    };
    Game.prototype.canShiftPiece = function (_x, _y, minos) {
        var _this = this;
        if (minos === void 0) { minos = this.currentPiece.type.srsShapes.shape[this.currentPiece.rotation]; }
        var canMove = true;
        if (this.currentPiece.y >= 22) {
            canMove = false;
        }
        var minoLocations = this.currentPiece.minoLocations();
        minos.forEach(function (mino) {
            if (!canMove) {
                return;
            }
            var x = _this.currentPiece.x + mino.x + _x;
            var y = _this.currentPiece.y + mino.y + _y;
            var row = _this.board[y];
            if (row === undefined) {
                canMove = false;
                return;
            }
            if (x < 0 || x > 9) {
                canMove = false;
                return;
            }
            if (minoLocations.some(function (location) { return location.x === x && location.y === y; })) {
                return;
            }
            var cell = row[x];
            if (cell === undefined || (cell !== Mino.None && cell !== Mino.Shadow)) {
                canMove = false;
                return;
            }
        });
        return canMove;
    };
    Game.prototype.movePieceBecauseGravity = function () {
        this.currentPiece.y++;
        this.currentPiece.paintMinos(this.board);
        this.displayBoard();
        this.gravityCounter = 0;
    };
    Object.defineProperty(Game.prototype, "secondsPlaying", {
        get: function () {
            return this.frameCounter / 50;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.updateHoldDisplay = function () {
        var minos = [];
        if (this.holdPiece === undefined) {
            for (var i = 0; i < 3; i++) {
                minos[i] = [];
                for (var j = 0; j < 4; j++) {
                    minos[i].push(Mino.None);
                }
            }
        }
        else {
            minos = this.convertToCompactSize(this.holdPiece);
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (minos[i][j] === Mino.None) {
                    this.holdPieceDisplay[i][j].style.backgroundColor = "#313131";
                }
                else {
                    this.holdPieceDisplay[i][j].style.backgroundColor = PIECE_TYPES[minos[i][j]].color;
                }
            }
        }
    };
    Game.prototype.updateQueueDisplay = function () {
        for (var i = 0; i < 5; i++) {
            var convertToCompactSize1 = this.convertToCompactSize(this.nextPieces[i]);
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 4; k++) {
                    if (convertToCompactSize1[j][k] === Mino.None) {
                        this.queueDisplay[i * 3 + j][k].style.backgroundColor = "#313131";
                    }
                    else {
                        this.queueDisplay[i * 3 + j][k].style.backgroundColor = PIECE_TYPES[convertToCompactSize1[j][k]].color;
                    }
                }
            }
        }
    };
    Game.prototype.convertToCompactSize = function (pieceType) {
        var minos = [];
        for (var i = 0; i < 3; i++) {
            minos[i] = [];
            for (var j = 0; j < 4; j++) {
                minos[i].push(Mino.None);
            }
        }
        if (pieceType === I) {
            for (var i = 0; i < 4; i++) {
                minos[1][i] = Mino.I;
            }
        }
        else if (pieceType.srsShapes.dimensions.width == 3) {
            pieceType.srsShapes.shape[0].forEach(function (location) {
                minos[location.y][location.x] = pieceType.mino;
            });
        }
        else {
            minos[1][1] = Mino.O;
            minos[1][2] = Mino.O;
            minos[0][1] = Mino.O;
            minos[0][2] = Mino.O;
        }
        return minos;
    };
    Game.prototype.initializeControls = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            if (_this.gameOver) {
                if (event.key == "Enter") {
                    // reset game
                    _this.reset();
                }
                return;
            }
            else if (_this.gamePaused) {
                _this.gamePaused = false;
                _this.displayTopLabel("Resumed");
                return;
            }
            var preventDefault = true;
            switch (event.key) {
                case _this.controls.left:
                    _this.movePieceLeft();
                    break;
                case _this.controls.right:
                    _this.movePieceRight();
                    break;
                case _this.controls.rotateClockwise:
                    _this.currentPiece.rotate(RotationDirection.Clockwise);
                    break;
                case _this.controls.down:
                    _this.movePieceDown();
                    break;
                case _this.controls.hardDrop:
                    _this.hardDrop();
                    break;
                case _this.controls.hold:
                    _this.holdCurrentPiece();
                    break;
                case _this.controls.rotateCounterClockwise:
                    _this.currentPiece.rotate(RotationDirection.CounterClockwise);
                    break;
                case _this.controls.rotate180:
                    _this.currentPiece.rotate(RotationDirection.Rotate180);
                    break;
                case "F4":
                    _this.reset();
                    break;
                case "Escape":
                    _this.gamePaused = true;
                    _this.topLabelElement.innerText = "Paused : Press any key to resume";
                    _this.mostRecentCall = undefined;
                    break;
                default:
                    preventDefault = false;
                    break;
            }
            if (preventDefault) {
                event.preventDefault();
            }
            _this.currentPiece.paintMinos(_this.board);
            _this.displayBoard();
        });
    };
    Game.prototype.holdCurrentPiece = function () {
        var _this = this;
        if (this.heldCurrentPieceAlready) {
            return;
        }
        this.currentPiece.previousMinos.forEach(function (mino) {
            _this.board[mino.y][mino.x] = Mino.None;
        });
        var pieceType = this.holdPiece;
        if (pieceType == undefined) {
            pieceType = this.queue.next();
        }
        this.updateQueueDisplay();
        console.log("Holding " + pieceType.name);
        this.holdPiece = this.currentPiece.type;
        this.heldCurrentPieceAlready = true;
        this.currentPiece = new Piece(pieceType);
        this.updateHoldDisplay();
    };
    Game.prototype.initializeDisplay = function () {
        // create 21 x 10 board of divs representing minos
        var board = document.createElement("div");
        board.classList.add("board");
        // add 2 lines
        for (var i = 0; i < 2; i++) {
            var row = document.createElement("div");
            row.classList.add("row");
            var rowDisplay = [];
            for (var j = 0; j < 4; j++) {
                var mino = document.createElement("div");
                mino.classList.add("mino");
                mino.classList.add("black-mino");
                row.appendChild(mino);
            }
            var mino1 = document.createElement("div");
            mino1.classList.add("mino");
            mino1.classList.add("black-mino");
            row.appendChild(mino1);
            for (var j = 0; j < 10; j++) {
                var mino = document.createElement("div");
                mino.classList.add("mino");
                mino.classList.add("black-mino");
                row.appendChild(mino);
                rowDisplay.push(mino);
            }
            board.appendChild(row);
            this.display.push(rowDisplay);
        }
        for (var i = 0; i < 20; i++) {
            var row = document.createElement("div");
            row.classList.add("row");
            var rowDisplay = [];
            if (i < 3) {
                var holdDisplay = [];
                for (var j = 0; j < 4; j++) {
                    var mino = document.createElement("div");
                    mino.classList.add("mino");
                    row.appendChild(mino);
                    holdDisplay.push(mino);
                }
                this.holdPieceDisplay.push(holdDisplay);
            }
            else {
                for (var j = 0; j < 4; j++) {
                    var mino = document.createElement("div");
                    mino.classList.add("mino");
                    mino.classList.add("black-mino");
                    row.appendChild(mino);
                }
            }
            var mino1 = document.createElement("div");
            mino1.classList.add("mino");
            mino1.classList.add("black-mino");
            row.appendChild(mino1);
            for (var j = 0; j < 10; j++) {
                var mino = document.createElement("div");
                mino.classList.add("mino");
                row.appendChild(mino);
                rowDisplay.push(mino);
            }
            var mino2 = document.createElement("div");
            mino2.classList.add("mino");
            mino2.classList.add("black-mino");
            row.appendChild(mino2);
            var queueDisplayArray = [];
            for (var j = 0; j < 4; j++) {
                var mino = document.createElement("div");
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
    };
    Game.prototype.displayBoard = function () {
        for (var i = 0; i < 22; i++) {
            for (var j = 0; j < 10; j++) {
                var minoEmptyColor = (i < 2) ? "black" : "#313131";
                if (this.board[i][j] === Mino.None) {
                    this.display[i][j].style.backgroundColor = minoEmptyColor;
                }
                else if (this.board[i][j] === Mino.Shadow) {
                    this.display[i][j].style.backgroundColor = "#818181";
                }
                else {
                    this.display[i][j].style.backgroundColor = PIECE_TYPES[this.board[i][j]].color;
                }
            }
        }
    };
    Game.prototype.endGame = function () {
        var _this = this;
        this.gameOver = true;
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] !== Mino.None) {
                    this.board[i][j] = Mino.Shadow;
                }
            }
        }
        this.currentPiece.minoLocations().forEach(function (minoLocation) {
            _this.board[minoLocation.y][minoLocation.x] = Mino.Shadow;
        });
        this.displayBoard();
        this.topLabelElement.innerHTML = "Game Over";
    };
    Game.prototype.movePieceLeft = function () {
        if (this.canShiftPiece(-1, 0)) {
            this.currentPiece.x--;
        }
        if (this.gravityCounter > 0) {
            this.gravityCounter--;
        }
    };
    Game.prototype.movePieceRight = function () {
        if (this.canShiftPiece(1, 0)) {
            this.currentPiece.x++;
        }
        if (this.gravityCounter > 0) {
            this.gravityCounter--;
        }
    };
    Game.prototype.movePieceDown = function () {
        if (this.canShiftPiece(0, 1)) {
            this.currentPiece.y++;
            this.gravityCounter = 0;
            this.score += 1;
        }
    };
    Game.prototype.hardDrop = function () {
        var counter = 0;
        while (this.canShiftPiece(0, 1)) {
            this.currentPiece.y++;
            counter++;
        }
        this.score += counter * 2;
        this.currentPiece.paintMinos(this.board);
        this.nextPiece();
    };
    Game.prototype.reset = function () {
        this.board = [];
        // make it 22 rows so that the pieces can spawn off the board
        for (var i = 0; i < 22; i++) {
            this.board.push([]);
            for (var j = 0; j < 10; j++) {
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
        this.updateHoldDisplay();
        this.updateQueueDisplay();
    };
    return Game;
}());
function debugPieceTypes() {
    PIECE_TYPES.forEach(function (pieceType) {
        console.log(pieceType.name);
        pieceType.srsShapes.shape.forEach(function (rotation) {
            var shape = new Array(pieceType.srsShapes.dimensions.height);
            for (var i = 0; i < shape.length; i++) {
                shape[i] = new Array(pieceType.srsShapes.dimensions.width);
                for (var j = 0; j < shape[i].length; j++) {
                    shape[i][j] = false;
                }
            }
            rotation.forEach(function (mino) {
                shape[mino.y][mino.x] = true;
            });
            shape.forEach(function (row) {
                console.log(row.map(function (cell) { return cell ? "[]" : ". "; }).join(""));
            });
            console.log("\n");
        });
    });
}
var currentGame;
var gameDiv = document.getElementById("tetris");
gameDiv.style.display = "none";
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {
    startGame();
});
var currentControls = defaultControls.copy();
var controlButtons = document.getElementById("control-button");
var _controlDiv;
controlButtons.addEventListener("click", function (event) {
    if (_controlDiv !== undefined && _controlDiv.style.display !== "none") {
        _controlDiv.style.display = "none";
        return;
    }
    _controlDiv = document.createElement("div");
    var listOfControls = ["left", "right", "down", "rotate cc", "rotate c", "rotate 180", "hard drop", "hold"];
    var divMap = {};
    listOfControls.forEach(function (control) {
        var controlDiv = document.createElement("div");
        divMap[control] = controlDiv;
        controlDiv.classList.add("control");
        controlDiv.innerText = control;
        controlDiv.addEventListener("click", function () {
            var works = true;
            document.addEventListener("keydown", function (event) {
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
        listOfControls.forEach(function (control) {
            var controlKey;
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
    var resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.addEventListener("click", function () {
        // reset the controls
        currentControls = defaultControls.copy();
        updateControls();
    });
    _controlDiv.appendChild(resetButton);
    // create a button where people can set it to alternate controls
    var alternateButton = document.createElement("button");
    alternateButton.innerText = "Alternate";
    alternateButton.addEventListener("click", function () {
        currentControls = alternativeControls.copy();
        updateControls();
    });
    _controlDiv.appendChild(alternateButton);
    document.body.appendChild(_controlDiv);
});
var startingPage = document.getElementById("starting-page");
function startGame() {
    gameDiv.style.display = "block";
    if (_controlDiv !== undefined) {
        _controlDiv.style.display = "none";
    }
    startingPage.style.display = "none";
    currentGame = new Game(gameDiv, document.getElementById("label"), document.getElementById("top-label"));
}

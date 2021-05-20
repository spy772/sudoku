import { isItMine } from './Utility';

export class Game {

    constructor(status, rows, columns, minesPercent) {
        this._status = status;
        this._rows = rows;
        this._columns = columns;
        this._minesPercent = minesPercent;
        this.autoMinePlace();
        this.tileStatus();
    }

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }

    get rows() {
        return this._rows;
    }
    set rows(rows) {
        this._rows = rows;
    }

    get columns() {
        return this._columns;
    }

    set columns(columns) {
        this._columns = columns;
    }

    get minesPercent() {
        return this._minesPercent;
    }

    set minesPercent(minesPercent) {
        this._minesPercent = minesPercent;
    }

    autoMinePlace() {
        this._minesTotal = this._rows * this._columns * (this._minesPercent / 100);
        this._mines = [];
        for (let i = 0; i < this._minesTotal; i++) {
            var minesCoords = {
                x: Math.floor(Math.random() * this._rows),
                y: Math.floor(Math.random() * this._columns)
            }
            this._mines.push(minesCoords);
        }
    }

    get mines() {
        return this._mines;
    }


    tileStatus() {
        this._tiles = [];
        for (let i = 0; i < this._rows; i++) {
            this._tiles.push([]);
            for (let s = 0; s < this._columns; s++) {
                this._tiles[i].push('not clicked');
            }
        }
        // console.log(this._tiles);
    };

    get tiles() {
        return this._tiles;
    };

    victoryFlagCheck() {
        for (let i = 0; i < this._tiles.length; i++) {
            const tileArr = this._tiles[i];
            for (let s = 0; s < tileArr.length; s++) {
                if (!isItMine(this._mines, i, s) && tileArr[s] === 'flagged') {
                    return false;
                };
            };
        };
        return true;
    };

    unflag(x, y) {
        this._tiles[x][y] = 'not clicked';
    };

    flag(x, y) {
        this._tiles[x][y] = 'flagged';
        for (let i = 0; i < this._mines.length; i++) {
            let mineStatus = this._mines[i];
            if (this._tiles[mineStatus.x][mineStatus.y] != 'flagged') {
                return false;
            };
        };
        return this.victoryFlagCheck();
    };

    mined(x, y) {
        this._tiles[x][y] = 'mined';
    };

    calculate(x, y, mark) {
        let counter = 0;

        if (x != 0 && y != 0) {
            if (isItMine(this._mines, x - 1, y - 1)) {
                counter++;
            } else if (mark && this._tiles[x-1][y-1] === 'not clicked') {
                this.calculate(x-1, y-1);
            }
        }
        if (x != 0) {
            if (isItMine(this._mines, x - 1, y)) {
                counter++;
            } else if (mark && this._tiles[x-1][y] === 'not clicked') {
                this.calculate(x-1, y);
            }
        } 

        if (x != 0 && y != this._rows-1) {
            if (isItMine(this._mines, x - 1, y + 1)) {
                counter++;
            } else if (mark && this._tiles[x-1][y+1] === 'not clicked') {
                this.calculate(x-1, y+1);
            }
        }

        if (x != this._columns-1 && y != 0) {
            if (isItMine(this._mines, x + 1, y - 1)) {
                counter++;
            } else if (mark && this._tiles[x+1][y-1] === 'not clicked') {
                this.calculate(x+1, y-1);
            }
        }

        if (x != this._columns-1) {
            if (isItMine(this._mines, x + 1, y)) {
                counter++;
            } else if (mark && this._tiles[x+1][y] === 'not clicked') {
                this.calculate(x+1, y);
            }
        }

        if (x != this._columns-1 && y != this._rows-1) {
            if (isItMine(this._mines, x + 1, y + 1)) {
                counter++;
            } else if (mark && this._tiles[x+1][y+1] === 'not clicked') {
                this.calculate(x+1, y+1);
            }
        }

        if (y != 0) {
            if (isItMine(this._mines, x, y - 1)) {
                counter++;
            } else if (mark && this._tiles[x][y-1] === 'not clicked') {
                this.calculate(x, y-1);
            }
        }

        if (y != this._rows-1) {
            if (isItMine(this._mines, x, y + 1)) {
                counter++;
            } else if (mark && this._tiles[x][y+1] === 'not clicked') {
                this.calculate(x, y+1);
            }
        }

        console.log(counter);
        this._tiles[x][y] = `${counter}`;

        if (counter === 0 && !mark) {
            this.calculate(x, y, true) 
        };
    };
};

const settings = {
    rowCount: 8,
    colCount: 8,
    blackClass: "black-cell",
    whiteClass: "white-cell",
    containerElement: null,
    scaleX: null,
    scaleY: null
};

const player = {
    x: null,
    y: null,
    direction: null,

    setDirection(direction) {
        this.direction = direction;
    },

    init(startX, startY, startDirection) {
        this.x = startX;
        this.y = startY;
        this.direction = startDirection;
    },

    makeStep() {
        const nextPoint = this.getNextStepPoint();

        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() {
        const point = {
            x: this.x,
            y: this.y
        };

        switch (this.direction) {
            case "up":
                point.y--;
                break;
            case "right":
                point.x++;
                break;
            case "down":
                point.y++;
                break;
            case "left":
                point.x--;
                break;
        }

        return point;
    }
};

const game = {
    settings,
    containerElement: null,
    cellElements: null,
    scaleX: null,
    scaleY: null,

    pieces: {
         king: ["♔", "♚"] ,
         queen: ["♕", "♛"] ,
         rook: ["♖", "♜"] ,
         bishop: ["♗", "♝"] ,
         knight: ["♘", "♞"] ,
         pawn: ["♙", "♟"] 
    },

    playerOne: [
        'rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook',
        'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    ],

    playerTwo: [
        'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
        'rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook',
    ],

    run() {
        this.init();
        this.render();
        setInterval(() => {
            this.render();
        }, 1000);
    },

    init() {
        this.containerElement = this.settings.containerElement;
        this.scaleX = this.settings.scaleX;
        this.scaleY = this.settings.scaleY;

        this.containerElement.innerHTML = "";
        this.cellElements = [];

        this.initScales();
        this.initCells();
        this.initPieces();
    },

    initScales() {
        scaleX = document.createElement("table");
        this.scaleX.appendChild(scaleX);
        const trElem = document.createElement("tr");
        scaleX.appendChild(trElem);

        for (let i = 0; i < this.settings.colCount; i++) {
            const cell = document.createElement("td");
            cell.classList.add("label");
            cell.textContent = String.fromCharCode(65 + i);
            trElem.appendChild(cell);
        }

        scaleY = document.createElement("table");
        this.scaleY.appendChild(scaleY);
        for (let i = this.settings.rowCount - 1; i >= 0 ; i--) {
            const trElem = document.createElement("tr");
            const cell = document.createElement("td");
            cell.classList.add("label");
            cell.textContent = (i + 1).toString();
            trElem.appendChild(cell);
            scaleY.appendChild(trElem);
        }
    },
    initCells() {
        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement("tr");
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement("td");
                cell.classList.add('cell');
                cell.classList.add(
                    (row + col) % 2
                        ? this.settings.blackClass
                        : this.settings.whiteClass
                );
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    },

    initPieces() {
        beginFrom = 0;
        pieces = this.playerOne;
        for (let i = 0; i < this.playerOne.length; i++) {
            span = document.createElement('span');
            console.log(this.playerOne[i]);
            this.cellElements[beginFrom + i].textContent = this.pieces[this.playerOne[i]][0];
        }

        beginFrom = 48;
        pieces = this.playerOne;
        for (let i = 0; i < this.playerOne.length; i++) {
            span = document.createElement('span');
            console.log(this.playerOne[i]);
            this.cellElements[beginFrom + i].textContent = this.pieces[this.playerTwo[i]][1];
        }
    },
    render() {
        // let i = 0;
        // this.cellElements.forEach(cell => {
        // cell.style.backgroundColor = i++ % 2 ? this.settings.blackColor : this.settings.whiteColor;
        // });
    }
};

window.addEventListener("load", () => {
    settings.containerElement = document.querySelector("#chess");
    settings.scaleX = document.querySelector(".scaleX");
    settings.scaleY = document.querySelector(".scaleY");
    game.run();
});

let board = [
    ['','',''],
    ['','',''],
    ['','',''],
];

let players = ['X','O'];

let currentPlayer;
let available = [];

function setup() {
    createCanvas(400,400);
    frameRate(1);
    currentPlayer = random(players).length;
    for (let i = 0, i < 3, i++) {
        for (let j = 0, j <3, j++) {
            available.push([i,j]);
        }
    }
}

function equals3(a,b,c) {
    return (a==b, && b==c && a != '');
}

function checkWinner() {
    let winner = null;

    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board [i][2])) {
            winnder = board[i][0];
        }
    }
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[0][i], board [0][i])) {
            winnder = board[0][i];
        }
    }

//   for (let i = 0; i < 3; i++) {
        if (equals3(board[0][0], board[1][1], board [2][2])) {
            winnder = board[0][0];
        }
    }

        if (equalse(board[2][0], board[1][1], board [0][2])) {
            winner = board[2][0];
        }
}

    if (winner == null && available.length == 0) {
        return `tie`;   
    } else {
        return `winner`;
    }
}

function mousePressed() {
    if (currentPlayer == human) {
        let i = floor(mouseX / w);
        let j = floor(mouseY / h);

        if (board[i][j] == '') {
            board[i][j] == human;
            currentPlayer = ai;
            nextTurn();
        }
    }
}

function nextTurn () {
    let index = floor(random(available.length));
    let spot = available.splice(index, 1)[0];
    let i = spot[0];
    let j = spot[1];
    board[i][j] = players[currentPlayer];
    currentPlayer = (currentPlayer + 1) % players.length;
}

//function mousePressed() {
//    nextTurn();
//}

function draw () {
    background(255);
    let w = width / 3;
    let h = height / 3;

    line(w,0,w,height);
    line(w*2,0,w*2,height);
    line(h,0,width,h);
    line(h*2,0,width,h*2);

    for (let i = 0, i < 3, i++) {
        for (let j = 0, j <3, j++) {
        let x = w * i + w/2;
        let y = h * j + h/2;
        let spot = board[i][j];
        textSize(32);
        strokeWeight(4);
        if (spot == playes[1]) {
            noFill();
            ellipse(x,y,w/2)
        } else if *(spot== players[0]) {
            let xr = w/4;
            line(x - xr, y - xr, x + xr, y + xr);
            line(x + xr, y - xr, x - xr, y + xr);
        }
        text(spot, x, y);

        }
    }

    let result = checkWinner();
    if (result != null) {
        noloop();
        createP(result).style('color','#FFF').style('font-size','32pt');
        console.log(result);
    } else {
    nextTurn();
    }
}
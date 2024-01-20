const floaterEl = document.querySelector('.floater');
const containerEl = document.getElementById('container');

const messagesEl = document.querySelector('.messages')


const cellOne = document.getElementById('1-1');
const cellTwo = document.getElementById('1-2');
const cellThree = document.getElementById('1-3');
const cellFour = document.getElementById('2-1');
const cellFive = document.getElementById('2-2');
const cellSix = document.getElementById('2-3');
const cellSeven = document.getElementById('3-1');
const cellEight = document.getElementById('3-2');
const cellNine = document.getElementById('3-3');


// FLOATER CONTROLS

// REFERENCE TO BUTTONS
const xEl = document.querySelector('.x');
const oEl = document.querySelector('.o');
const playerTwoEl = document.querySelector('.player-two');
const computerEl = document.querySelector('.computer');

// MARKER SELECT BUTTONS
const xButt = () => {
    xEl.style.backgroundColor = 'green';
    oEl.style.backgroundColor = 'white';
    xEl.value = 1;
    oEl.value = '';
    human.marker = gameBoard.marker[0];
    computer.marker = gameBoard.marker[1];
    playerTwo.marker = gameBoard.marker[1];
    messagesEl.textContent = 'You selected X'
};

const oButt = () => {
    xEl.style.backgroundColor = 'white';
    oEl.style.backgroundColor = 'green';
    xEl.value = '';
    oEl.value = 1;
    human.marker = gameBoard.marker[1];
    computer.marker = gameBoard.marker[0];
    playerTwo.marker = gameBoard.marker[0];
    messagesEl.textContent = 'You selected O'
};


// OPPONENT SELECT BUTTONS
const playerTwoButt = () => {
    playerTwoEl.style.backgroundColor = 'green';
    computerEl.style.backgroundColor = 'white';
    playerTwo.alive = gameBoard.alive[0];
    computer.alive = gameBoard.alive[1];
    playerTwoEl.value = 1;
    computerEl.value = '';
    twoPlayerGame()
};
const computerButt = () => {
    playerTwoEl.style.backgroundColor = 'white';
    computerEl.style.backgroundColor = 'green';
    playerTwo.alive = gameBoard.alive[1];
    computer.alive = gameBoard.alive[0];
    playerTwoEl.value = '';
    computerEl.value = 1;
    compPlay()
};

// CONFIRM BUTTON
const readyButt = () => {
    if (xEl.value === '' && oEl.value === '') {
        alert ('Please select a marker!');
    } else if (computerEl.value === '' && playerTwoEl.value === '') {
        alert('Please select an opponent!');
    } else {
        floaterEl.style.display = 'none';
        containerEl.style.display = 'grid';
    }

    human.alive = gameBoard.alive[0];
};
// FLOATER CONTROLS END
// ========================
// ========================

const gameBoard = {
    board: [
        ['','',''],
        ['','',''],
        ['','',''],
    ],
    marker: ['X','O'],
    round: 0,
    player: ['human','player two','computer'],
    alive: [true, false]
};
// PLAYER CREATION FUNCTION
const createPlayer = (name, marker,alive) => {
    return { name,marker,alive };
};

// PLAYERS CREATED
const human = createPlayer(gameBoard.player[0],undefined,gameBoard.alive[1]);
const playerTwo = createPlayer(gameBoard.player[1],undefined,gameBoard.alive[1]);
const computer = createPlayer(gameBoard.player[2],undefined,gameBoard.alive[1]);

// ASSIGN OPPONENT


const winChecker = (board) => {
    for (let i = 0; i < 3; i++) {
        const a = gameBoard.board[i][0]
        const b = gameBoard.board[i][1]
        const c = gameBoard.board[i][2]

        if (a !== '' && a === b && b === c) {
            return 'win';
        }
    }

    for (let i = 0; i < 3; i++) {
        const a = gameBoard.board[0][i];
        const b = gameBoard.board[1][i];
        const c = gameBoard.board[2][i];

        if (a != '' && a === b && b === c) {
            return 'win';
        }
    }

    const a = gameBoard.board[0][0];
    const b = gameBoard.board[1][1];
    const c = gameBoard.board[2][2];

    if (a != '' && a === b && b === c) {
        return 'win';
    }

    const d = gameBoard.board[0][2];
    const e = gameBoard.board[1][1];
    const f = gameBoard.board[2][0];

    if (d != '' && d === e && e === f) {
        return 'win';
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const square = gameBoard.board[i][j];
            if (square === '') return undefined;
        }
    }

    return 'draw';

}

//ROUND ADDER
let nextRound = () => gameBoard.round++;
/////////////////////////////////////////
/////////////////////////////////////////

/////////////////////////////////////////
const playerTurn = () => {
    if (gameBoard.round === 0 || gameBoard.round === 2 || gameBoard.round === 4 || gameBoard.round === 6 || gameBoard.round === 8) {
        return true
    }
    return false
}
//COMPUTER AUTOMATICALLY PLAYING FUNCTION

const possibleMove = () => {
    let possible = [];
    for (let i = 0; i < gameBoard.board.length; i++) {
        for (let j = 0; j < gameBoard.board[0].length; j++) {
            if (gameBoard.board[i][j] === '') {
                possible.push([i,j]);
            }
        }
    }
    return possible
}

const rando = () => {
    let result = []
    let choice = Math.round(Math.random() * possibleMove());
    return result.push(choice)
}

console.table(possibleMove())
console.log(rando())







const compPlay = () => {
    cellOne.addEventListener('click', function() {
        if (gameBoard.board[0][0] === '' && playerTurn()) {
            gameBoard.board[0][0] = human.marker;
            cellOne.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellTwo.addEventListener('click', function() {
        if (gameBoard.board[0][1] === '' && playerTurn()) {
            gameBoard.board[0][1] = human.marker;
            cellTwo.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellThree.addEventListener('click', function() {
        if (gameBoard.board[0][2] === '' && playerTurn()) {
            gameBoard.board[0][2] = human.marker;
            cellThree.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellFour.addEventListener('click', function() {
        if (gameBoard.board[1][0] === '' && playerTurn()) {
            gameBoard.board[1][0] = human.marker;
            cellFour.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellFive.addEventListener('click', function() {
        if (gameBoard.board[1][1] === '' && playerTurn()) {
            gameBoard.board[1][1] = human.marker;
            cellFive.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellSix.addEventListener('click', function() {
        if (gameBoard.board[1][2] === '' && playerTurn()) {
            gameBoard.board[1][2] = human.marker;
            cellSix.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellSeven.addEventListener('click', function() {
        if (gameBoard.board[2][0] === '' && playerTurn()) {
            gameBoard.board[2][0] = human.marker;
            cellSeven.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellEight.addEventListener('click', function() {
        if (gameBoard.board[2][1] === '' && playerTurn()) {
            gameBoard.board[2][1] = human.marker;
            cellEight.textContent = human.marker
            nextRound()
            computerMove()
            nextRound()
        }
    })

    cellNine.addEventListener('click', function() {
        if (gameBoard.board[2][2] === '' && playerTurn()) {
            gameBoard.board[2][2] = human.marker;
            cellNine.textContent = human.marker
            nextRound()
            computerMove()
            
        }
    })
    
    
    
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////


const twoPlayerGame = () => {

    const ids = ['1-1','1-2','1-3','2-1','2-2','2-3','3-1','3-2','3-3'];
    ids.forEach((item) => {
        const button = document.getElementById(item)
        button.addEventListener('click', (e) => {
            const location = item.split('-')
        const y = parseInt(location[0]) -1;
        const x = parseInt(location[1]) -1;
        if (gameBoard.board[y][x] === '') {
            if (gameBoard.round === 0 || gameBoard.round === 2 || gameBoard.round === 4 || gameBoard.round === 6 || gameBoard.round === 8) {
                gameBoard.board[y][x] = human.marker
                button.textContent = human.marker
                nextRound()
                if (winChecker() === 'win') {
                    messagesEl.textContent = 'Player One Wins!!'
                    reset()
                } else if (winChecker() === 'draw') {
                    messagesEl.textContent = 'Draw'
                    reset()
                }
            } else {
                gameBoard.board[y][x] = playerTwo.marker
                button.textContent = playerTwo.marker
                nextRound()
                if (winChecker() === 'win') {
                    if (playerTwo.alive === true) {
                        messagesEl.textContent = playerTwo.name + ' Wins';
                        reset()
                        
                    } else if (computer.alive === true) {
                        messagesEl.textContent = computer.name + ' Wins'
                        reset()
                    }
                    
                } else if (winChecker() === 'draw') {
                    messagesEl.textContent = 'Draw'
                    reset()
                }
            }
            
        } else {
            return
        }
        })
    }) 
}

   
const reset = () => {
    gameBoard.board[0][0] = '';
    gameBoard.board[0][1] = '';
    gameBoard.board[0][2] = '';
    gameBoard.board[1][0] = '';
    gameBoard.board[1][1] = '';
    gameBoard.board[1][2] = '';
    gameBoard.board[2][0] = '';
    gameBoard.board[2][1] = '';
    gameBoard.board[2][2] = '';
    cellOne.textContent = ''
    cellTwo.textContent = ''
    cellThree.textContent = ''
    cellFour.textContent = ''
    cellFive.textContent = ''
    cellSix.textContent = ''
    cellSeven.textContent = ''
    cellEight.textContent = ''
    cellNine.textContent = ''
    human.marker = '' 
    computer.marker = ''
    playerTwo.marker = ''
    human.alive = gameBoard.alive[1];
    computer.alive = gameBoard.alive[1];
    playerTwo.alive = gameBoard.alive[1];
    computer.value = '';
    playerTwoEl.value = '';
    gameBoard.round = 0;
    playerTwoEl.style.backgroundColor = 'white';
    computerEl.style.backgroundColor = 'white';
    oEl.style.backgroundColor = 'white';
    xEl.style.backgroundColor = 'white';
    function transition() {
    floaterEl.style.display = 'grid';
    containerEl.style.display = 'none';
    }
    setTimeout(transition, 3000)
}
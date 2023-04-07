let gameBoard = [
    ['','',''],
    ['','',''],
    ['','',''],
];

let currentPlayer = 'X';
let count = 0;

function playerMove(cell){
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    
    if(gameBoard[row][col] === ''){
        gameBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        count++

        if(checkWinner()){
            document.getElementById('result').innerHTML =  `Player ${currentPlayer} WON the match`
            document.getElementById('playerTurn').innerHTML = `${currentPlayer}'s turn now` 
        }

        if(checkTie()){
            document.getElementById('result').innerHTML =  `It is a Tie!`
        }

        else{
            currentPlayer === 'X' ? currentPlayer = 'O': currentPlayer = 'X'

            document.getElementById('playerTurn').innerHTML = `${currentPlayer}'s turn now` 
        }
        
    }

}


function checkWinner () {
    // checking for rows 
    for(let i=0; i<3; i++){
        if(gameBoard[i][0] == currentPlayer 
            && gameBoard[i][1] == currentPlayer 
            && gameBoard[i][2] == currentPlayer){
                document.getElementById('newGame').innerHTML = 'Click on Restart for new game'
                return true
        }
    }
    // checking for columns
    for(let i=0; i<3; i++){
        if(gameBoard[0][i] == currentPlayer 
            && gameBoard[1][i] == currentPlayer 
            && gameBoard[2][i] == currentPlayer){
                document.getElementById('newGame').innerHTML = 'Click on Restart for new game'
                return true
        }
    }
    // Checking for diagonal 1
    if(gameBoard[0][0] === currentPlayer
        && gameBoard[1][1] === currentPlayer
        && gameBoard[2][2] === currentPlayer){
            document.getElementById('newGame').innerHTML = 'Click on Restart for new game'
            return true
    }
    // Checking for diagonal 2
    if(gameBoard[0][2] === currentPlayer
        && gameBoard[1][1] === currentPlayer
        && gameBoard[2][0] === currentPlayer){
            document.getElementById('newGame').innerHTML = 'Click on Restart for new game'
            return true
    }

}

function checkTie(){
    if(count == 9){
        return true
    }
    return false
}

function reset(){
    gameBoard = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
    
    currentPlayer = 'X';
    count = 0;
    
    let cells = document.getElementsByClassName('cell');
    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = ''
    }
    
    document.getElementById('result').innerHTML = ''
    document.getElementById('playerTurn').innerHTML = "'X' Turn"
}
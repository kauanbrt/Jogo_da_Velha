let squares = document.querySelectorAll(".square");
let startReset = document.getElementById("play");
let player = document.getElementById("player-time");

document.addEventListener('DOMContentLoaded', () => {
    
        startReset.addEventListener('click', () => {
        resetGame();
        alterPlayer();
        startReset.value = "Reset"
        stopGame = 0;
        });

        squares.forEach((square) => {
            square.addEventListener('click', handleClick);
    });
    
});

function handleClick(event){

    let square = event.target;
    let position = square.id;
    
    if(startReset.value == "Reset"){


        if(handleMove(position)){

            setTimeout(() => {
                
                if(playerTime == 0 && stopGame == 10){
                        updateSquare(position);
                        player.innerHTML = `<p id="player-style">Vitória de Player 1</p>`;
                        let p = document.getElementById("player-style");
                        p.style = "color: #4530ff";
                    }
                if(playerTime == 1 && stopGame == 10){
                        updateSquare(position);
                        player.innerHTML = `<p id="player-style">Vitória de Player 2</p>`;
                        let p = document.getElementById("player-style");
                        p.style = "color: #ff00bb";
                }
            }, 10);
        
        };

        setTimeout(() => {
            if(stopGame == 9){
                updateSquare(position);
                player.innerHTML = `<p id="player-style">Empate!</p>`;
                let p = document.getElementById("player-style");
                    p.style = "color: #fff";
            }
        }, 10);
        
        if(stopGame != 9 && stopGame != 10){
            updateSquare(position);
            alterPlayer();
        }

    }
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    if(symbol != ''){
        square.innerHTML = `<div class='${symbol}'></div>`;
    }
}

function alterPlayer(){

    if(playerTime == 0){
        player.innerHTML = `<p id="player-style">Vez de Player 1</p>`
        let p = document.getElementById("player-style");
        p.style = "color: #4530ff";

    }
    if(playerTime == 1){        
        player.innerHTML = `<p id="player-style">Vez de Player 2</p>`
        let p = document.getElementById("player-style");
        p.style = "color: #ff00bb";

    }
}

function resetGame(){
    
    squares.forEach((square) => {
        square.innerHTML = `<div class=''></div>`;
    });

    playerTime = 0;
    gameOver = false;
    board = ["", "", "", "", "", "", "", "", ""];
}
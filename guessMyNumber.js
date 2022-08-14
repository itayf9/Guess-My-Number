
let randomGuess = Math.floor((Math.random() * 100) + 1);

let score = 20;
let highScore = 0;

let isWin = false;
let isLose = false;

const UNKNOWN = "?";

document.querySelector(".check").addEventListener("click", function(){
    compareRes();
});

document.querySelector(".again").addEventListener("click", function () {
    resetGame();
});

document.addEventListener("keypress", function (event) {
    if (event.code === "Enter" ) {
        compareRes();
    }
})

function compareRes () {
    if (!isWin && !isLose) {
        const guessField = document.querySelector(".guess");

        const guesdNumber = Number(guessField.value);

        if (!guesdNumber) {
            document.querySelector(".message").innerHTML = "Enter a number.";
            return;
        }
    
        if (guesdNumber > randomGuess) {
            document.querySelector(".message").innerHTML = "Too high.";
            score --;
        } else if (guesdNumber < randomGuess) {
            document.querySelector(".message").innerHTML = "Too low.";
            score --;
        } else {
            winGame();
            return;
        }
    
        document.querySelector(".score").innerHTML = score;
    
        if (score === 0) {
            loseGame();
        }
    }
}

function loseGame () {
    isLose = true;
    document.querySelector(".message").innerHTML = "You've lost.";
}


function winGame () {
    isWin = true;
    document.querySelector(".message").innerHTML = "Good.";
    document.querySelector("body").style.background = "purple";
    document.querySelector(".number").innerHTML = randomGuess;
    document.querySelector(".highscore").innerHTML = Math.max(score , highScore);
}

function resetGame () {
    randomGuess = Math.floor((Math.random() * 100) + 1);
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").innerHTML = UNKNOWN;
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector(".guess").value = "";
    isWin = false;
    isLose =false;
    score = 20;
    document.querySelector(".score").innerHTML = score;
}
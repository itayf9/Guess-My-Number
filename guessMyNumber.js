
let randomGuess = Math.floor((Math.random() * 100) + 1);

document.querySelector(".score").innerHTML = randomGuess;

document.querySelector(".check").addEventListener("click", function(){
    const guessField = document.querySelector(".guess");
    const guesdNumber = Number(guessField.value);

    if (guesdNumber > randomGuess) {
        document.querySelector(".message").innerHTML = "Too high.";
    } else if (guesdNumber < randomGuess) {
        document.querySelector(".message").innerHTML = "Too low.";
    } else {
        document.querySelector(".message").innerHTML = "Good.";
        document.querySelector("body").style.background = "purple";
        document.querySelector(".number").innerHTML = randomGuess;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    resetGame();
});

function resetGame () {
    randomGuess = Math.floor((Math.random() * 100) + 1);
    document.querySelector("body").style.background = "#222";
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector(".guess").value = "";
}
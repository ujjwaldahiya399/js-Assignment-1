let  initialScore = 100;
let highScore = 0;
let generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max)+1;
}
let randomNumber = generateRandomNumber(100);
function reloadGame() {
    document.getElementById("guessId").value = "";
    document.querySelector('.number').textContent="?";
    randomNumber = generateRandomNumber(100);
}

function mainCheck() {
    let inputNumber = document.querySelector("#guessId").value;
    console.log(inputNumber)
    if(initialScore !== 0) {
        if(inputNumber>randomNumber) {
            document.querySelector(".message").textContent = "Your Guess is High!";
            initialScore--;
            document.querySelector(".score").textContent= initialScore;
        } else if (inputNumber<randomNumber) {
            document.querySelector(".message").textContent = "Your Guess is Low!";
            initialScore--;
            document.querySelector(".score").textContent= initialScore;
        } else {
            document.querySelector(".message").textContent = "Hurrah You Won !!";
            document.body.style.backgroundColor = "green";
            initialScore--;
            document.querySelector(".score").textContent= initialScore;
            document.querySelector('.number').textContent= randomNumber;
            highScore = initialScore;
            document.querySelector('.highscore').textContent = highScore;
            console.log(highScore,initialScore)
            document.querySelector(".check").style.visibility="hidden";
        }
    } else {
        document.querySelector(".message").textContent = "Game Over , Your score is 0";

    }
}
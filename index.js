let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let compPoints = document.getElementById("compScore");
let playerPoints = document.getElementById("playerScore");
let comp = document.getElementById("compChoice");
let choiceText = document.getElementById("choiceText");
let originTextContent = "Choose an option";

rock.addEventListener('click', function() {
    doRound("rock");
});

paper.addEventListener('click', function() {
    doRound("paper");
});

scissor.addEventListener('click', function() {
    doRound("scissor");
});

function doRound(choice) {
    let outcomes = {
        "rock": "scissor",
        "paper": "rock",
        "scissor": "paper"
    }
    let choices = ["rock", "paper", "scissor"];
    let compInput = Math.floor(Math.random() * 3);

    compInput = choices[compInput];

    switch(compInput) {
        case "rock":
            comp.textContent = "🪨";
            break;
        case "paper":
            comp.textContent = "🧻";
            break;
        case "scissor":
            comp.textContent = "✂️";
            break;
    }

    if(outcomes[choice] == compInput) {
        playerPoint();
    } else if(choice == compInput) {
        draw()
    } else {
        compPoint();
    }
}

function playerPoint() {
    let score = parseInt(playerPoints.textContent);
    score++;
    playerPoints.textContent = score;
    choiceText.textContent = "Player WINS";
    setTimeout(reset, 3000);
}

function compPoint() {
    let score = parseInt(compPoints.textContent);
    score++;
    compPoints.textContent = score;
    choiceText.textContent = "Computer WINS";
    setTimeout(reset, 3000);
}

function draw() {
    choiceText.textContent = "It was a DRAW";
    setTimeout(reset, 3000);
}

function reset() {
    choiceText.textContent = originTextContent;
    comp.textContent = "";
}
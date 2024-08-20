const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const compPoints = document.getElementById("compScore");
const playerPoints = document.getElementById("playerScore");
const comp = document.getElementById("compChoice");
const choiceText = document.getElementById("choiceText");
const originTextContent = "Choose an option";

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
    const outcomes = {
        "rock": "scissor",
        "paper": "rock",
        "scissor": "paper"
    }
    const choices = ["rock", "paper", "scissor"];
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
        givePoint(playerPoints, "Player");
    } else if(choice == compInput) {
        draw()
    } else {
        givePoint(compPoints, "Computer");
    }
}

function givePoint(winner, name) {
    let score = parseInt(winner.textContent);
    choiceText.textContent = `${name} WINS`;
    score++;
    winner.textContent = score;
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
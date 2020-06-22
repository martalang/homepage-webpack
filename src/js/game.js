const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
    winner: "",
}

const hands = [...document.querySelectorAll('.select img')];
const btnStart = document.querySelector('.start')

function playerChoice() {
    // .dataset.option, bo w HTMLu mamy data-option="papier" (analogicznie można zrobić data-color="red" i odwołać się .dataset.color)
    // console.log(this.dataset.option);
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
};

function computerChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function getResult(player, computer) {
    // remis
    if (player == computer) {
        game.winner = "remis";
        gameSummary.draws++;
    }
    // moje jest wygranko
    else if (player == "papier" && computer == "kamień" || player == "kamień" && computer == "nożyczki" || player == "nożyczki" && computer == "papier") {
        game.winner = "ja";
        gameSummary.wins++;
    }
    // komputera jest wygranko
    else {
        game.winner = "komputer";
        gameSummary.losses++;
    }
}

function viewResults(player, computer, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = computer;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector('.numbers>span').textContent = gameSummary.numbers;
    document.querySelector('.wins>span').textContent = gameSummary.wins;
    document.querySelector('.losses>span').textContent = gameSummary.losses;
    document.querySelector('.draws>span').textContent = gameSummary.draws;
}

function startGame() {
    if (!game.playerHand) return alert("Wybierz opcję");
    game.aiHand = computerChoice();
    gameSummary.numbers++;
    //console.log(game.playerHand + game.aiHand);
    getResult(game.playerHand, game.aiHand);
    viewResults(game.playerHand, game.aiHand, game.winner);
    endGame();
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}


hands.forEach(hand => {
    hand.addEventListener('click', playerChoice)
});

btnStart.addEventListener('click', startGame)
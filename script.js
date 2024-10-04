function getComputerChoice() {
  let options = ["rock", "paper", "scissors"]
  let computerChoice = options[Math.floor(Math.random() * options.length)]
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let resultMessage = "";
    
      if (humanChoice == "rock" && computerChoice == "paper") {
        resultMessage = "You Lose! Paper beats rock";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        resultMessage = "You lose! Scissors beats paper";
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultMessage = "You lose! Rock beats scissors";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        resultMessage = "You Win! Paper beats rock";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultMessage = "You Win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultMessage = "You Win! Rock beats scissors";
        humanScore++;
    } else {
        resultMessage = "Tie! Try again";
    }
    
    let resultBoard = document.createElement("div");
    let finishMessage = document.createElement("div");

    resultBoard.textContent = `
          ${resultMessage}
          Human Score: ${humanScore}
          Computer Score: ${computerScore}
        `;
    if (humanScore && computerScore === 5) {
        finishMessage.textContent = `${humanScore - computerScore >0 ? 'HUMAN' : 'MACHINE'} WINS!`
    }

    document.body.appendChild(resultBoard);
    document.body.appendChild(finishMessage);
  }

  // создал кнопки для выбора игрока
  let rockBTN = document.createElement("button");
  let paperBTN = document.createElement("button");
  let scissorsBTN = document.createElement("button");
  
  rockBTN.textContent = "Rock"
  rockBTN.addEventListener("click", () => playRound('rock', getComputerChoice()));
  
  paperBTN.textContent = "Paper"
  paperBTN.addEventListener("click", () => playRound('paper', getComputerChoice()));
  
  scissorsBTN.textContent = "Scissors"
  scissorsBTN.addEventListener("click", () => playRound('scissors', getComputerChoice()));
  
  document.body.appendChild(rockBTN);
  document.body.appendChild(paperBTN);
  document.body.appendChild(scissorsBTN);
  
// console.log()
const computerSelection = getComputerChoice();



// гениальная грязь
  // function playRound(human, computer) {
  //   const options = {'rock': 0, 'paper': 1, 'scissors': 2}
  //   if(!(human in options)) return 'Try Again!'
  //   const humanChoice = options[human], computerChoice = options[computer]
  //   const resultIndex = (computerChoice - humanChoice + 3) % 3
  //   const choices = [human, computer]
  //   if(resultIndex === 1) choices.reverse()
  //   const results = [, ['Lose', () => computerScore++], ['Win',() => humanScore++]]
  //   const [result, updateScore] = results[resultIndex] ?? []
  //   const formattedResult = resultIndex ? 
  //     `You ${result}! ${choices.map(v => 
  //       v.slice(0,1).toUpperCase() + v.slice(1)
  //     ).join(' beats ')}!` : 
  //     'Tie! Try again'
  //   return void updateScore?.() ?? formattedResult 
  // }

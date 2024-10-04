function getComputerChoice() {
  let options = ["rock", "paper", "scissors"]
  let computerChoice = options[Math.floor(Math.random() * options.length)]
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You Lose! Paper beats rock");
      computerScore++
      console.log("computer Score:" + computerScore);
    } else if (humanChoice == "paper" && computerChoice=="scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore++
      console.log("computer Score:" + computerScore);
    } else if (humanChoice == "scissors" && computerChoice=="rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++
      console.log("computer Score:" + computerScore);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You Win! Paper beats rock");
      humanScore++
      console.log("human Score:" + humanScore);
    } else if (humanChoice == "scissors" && computerChoice =="paper") {
      console.log("You Win! Scissors beats Paper");
      humanScore++
      console.log("human Score:" + humanScore);
    } else if (humanChoice == "rock" && computerChoice =="scissors") {
      console.log("You Win! Rock beats scissors");
      humanScore++
      console.log("human Score:" + humanScore);
    } else {
      console.log("Tie! Try again");
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection),console.log( humanScore, computerScore);
}

while (true) {
  playGame()
  if(Math.max(humanScore, computerScore) === 5) break
}
console.log(`${humanScore - computerScore > 0 ? 'HUMAN' : 'MACHINE'} WINS!`)


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
  
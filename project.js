//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. spin the slot machine
//5. check if th user win
//6. give user their winnings
//7. play again

/**function deposit() {
    return 1
}
*/
const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount:");
    const numberDespositAmount = parseFloat(depositAmount);

    if (isNaN(numberDespositAmount) || numberDespositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDespositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter a the number of lines to bet on (1-3):");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();

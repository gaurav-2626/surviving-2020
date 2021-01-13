const num_rows = 9;
const num_cols = 12;
let colors = ["#ff8266", "#87CEEB", "#fff673", "#98FB98"];
let players = [
  {
    id: 1,
    turn: true,
    finished: false,
    position: 1,
    money: 10000,
    skip: 0,
  },
  {
    id: 2,
    turn: false,
    finished: false,
    position: 1,
    money: 10000,
    skip: 0,
  },
  {
    id: 3,
    turn: false,
    finished: false,
    position: 1,
    money: 10000,
    skip: 0,
  },
  {
    id: 4,
    turn: false,
    finished: false,
    position: 1,
    money: 10000,
    skip: 0,
  },
];

/* 
{
  id: id of the cell,
  showContent: "The content to be displayed",
  hideContent: "Show only when you hover",
  changePosition: "+/- the number of positions",
  changeMoney: "+/- amount of money",
  rollDie: "boolean value. to roll or not to roll",
  checkMoney: "boolean value. Check if money >= 3k",
  condition: boolean,
  state: "array of the number of people in that cells"
  skipTurn: "integer value to skip turns"
}

*/

let cells = [
  {
    id: 1,
    showContent: "START",
    hideContent: "Begin here",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 2,
    showContent: "Collect Paycheck",
    hideContent: "Recieve $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 3,
    showContent: "Good News!",
    hideContent: "Recieve a bonus of $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 4,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 5,
    showContent: "Donate!",
    hideContent: "Donate $1000 to wildfire relief",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 6,
    showContent: "Overtime",
    hideContent: "Skip 1 turn and recieve $1k for your duties",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 7,
    showContent: "BEWARE",
    hideContent: "Pay fees for online classes",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 8,
    showContent: "Try your Luck",
    hideContent: "Roll the die to check your luck",
    changePosition: 10,
    changeMoney: 0,
    rollDie: true,
    checkMoney: false,
    condition: true,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 9,
    showContent: "Medical bills",
    hideContent: "Pay $2000",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 10,
    showContent: "Alone time",
    hideContent: "Skip 2 moves because you are in QUARANTINE",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 2,
    state: 0,
  },
  {
    id: 11,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 12,
    showContent: "Stock Market Crash",
    hideContent: "Lost $3000 in the stock market crash",
    changePosition: 0,
    changeMoney: -3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 13,
    showContent: "Get your Legacy money!",
    hideContent: "Recieve $10,000 as your inheritance",
    changePosition: 0,
    changeMoney: 10000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 14,
    showContent: "Alien Alert",
    hideContent: "Got abducted by Aliensss, skip one move",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 15,
    showContent: "BEWARE",
    hideContent: "Pay company bills",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 16,
    showContent: "Good News!",
    hideContent: "Work from home bonus of $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 17,
    showContent: "FINE!",
    hideContent: "Pay $1000 for not wearing a mask",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 18,
    showContent: "Stimulus Cheque",
    hideContent: "Recieve $5000 from Government",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 19,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 20,
    showContent: "Happy Birthday",
    hideContent: "Recieve $3000 as your present",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 21,
    showContent: "Medical bills",
    hideContent: "Pay $2000",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 22,
    showContent: "NETFLIX",
    hideContent: "Skip turn because you're binging",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 23,
    showContent: "Increased online sales",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 24,
    showContent: "Increased Overtime",
    hideContent: "Receive $1000 and skip a turn",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 25,
    showContent: "Donate!",
    hideContent: "Donate $1000 to frontline workers",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 26,
    showContent: "Mask fine!",
    hideContent: "Fine for not wearing your mask!",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 27,
    showContent: "You're sick!",
    hideContent: "You got sick. Skil turn.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 3,
  },
  {
    id: 28,
    showContent: "Goto!",
    hideContent: "You go to 40 if you have the money!",
    changePosition: 12,
    changeMoney: 0,
    rollDie: false,
    checkMoney: true,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 29,
    showContent: "Won an MLH Hack",
    hideContent: "You receive $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 30,
    showContent: "You got your dividend!",
    hideContent: "You receive $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 31,
    showContent: "You lost moneyy!!",
    hideContent: "Lol. Pay $4k now",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 32,
    showContent: "Paycheck!",
    hideContent: "You get $4k. Spend wisely!",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 33,
    showContent: "Alien Alert!",
    hideContent: "You got abducted by aliens!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 1,
  },
  {
    id: 34,
    showContent: "Money Money!",
    hideContent: "Bonus babyy. $2000!",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 35,
    showContent: "Pay rent!",
    hideContent: "Pay your rest. $2k down!",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 36,
    showContent: "Pay interest!",
    hideContent: "Pay your interest. $1k down!",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 37,
    showContent: "Overtime!",
    hideContent: "Work more. Play less!",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 1,
  },
  {
    id: 38,
    showContent: "Go back!",
    hideContent: "Go back 8 spaces!",
    changePosition: -8,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 39,
    showContent: "Pay Cut",
    hideContent: "Lost $1000. Salary Reduced. ",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 40,
    showContent: "Won an MLH Hack",
    hideContent: "You receive $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 41,
    showContent: "Receive stimulus from govt.",
    hideContent: "You receive $5000",
    changePosition: 0,
    changeMoney: 5000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 42,
    showContent: "Biggest Loss :(",
    hideContent: "You lost $4000 becaouse of some work problems.",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 43,
    showContent: "Insurance cost",
    hideContent: "You have to pay $1000",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 44,
    showContent: "Lukcy Guy!! Inherit money.",
    hideContent: "You received  $10000",
    changePosition: 0,
    changeMoney: 10000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 45,
    showContent: "Alone time",
    hideContent: "You have to stay in Quarantine.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 2,
  },
  {
    id: 46,
    showContent: "Pay Rent !",
    hideContent: "You have to pay rent $2000.",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 47,
    showContent: "Put on your Mask.",
    hideContent: "You got a fine of $1000",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 48,
    showContent: "You are doing good.",
    hideContent: "You got a good job. Received $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 49,
    showContent: "Salary got reduced.",
    hideContent: "You lose $1000.",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 50,
    showContent: "Happy Birthday !",
    hideContent: "You receive $3000",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 51,
    showContent: "Netflix time !",
    hideContent: "Skip by 1 turn.",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 1,
  },
  {
    id: 52,
    showContent: "Stock Market Crashed.",
    hideContent: "You lose $3000",
    changePosition: 0,
    changeMoney: -3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 53,
    showContent: "Check your luck.",
    hideContent: "Go back 5 steps.",
    changePosition: -5,
    changeMoney: 0,
    rollDie: false,
    checkMoney: true, //if < 5K go back 5 steps.
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 54,
    showContent: "Lucky Guy!! Inherit money.",
    hideContent: "You received  $10000",
    changePosition: 0,
    changeMoney: 10000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 55,
    showContent: "Collect Paycheck",
    hideContent: "Recieve $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 56,
    showContent: "Good News!",
    hideContent: "Recieve a bonus of $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 57,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 58,
    showContent: "Donate!",
    hideContent: "Donate $1000 to wildfire relief",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 59,
    showContent: "Overtime",
    hideContent: "Skip 1 turn and recieve $1k for your duties",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 60,
    showContent: "BEWARE",
    hideContent: "Pay fees for online classe",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 61,
    showContent: "Try your Luck",
    hideContent: "Roll the die to check your luck",
    changePosition: 10,
    changeMoney: 0,
    rollDie: true,
    checkMoney: false,
    condition: true,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 62,
    showContent: "Medical bills",
    hideContent: "Pay $2000",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 63,
    showContent: "Alone time",
    hideContent: "Skip 2 moves because you are in QUARANTINE",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 2,
    state: 0,
  },
  {
    id: 64,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 65,
    showContent: "Stock Market Crash",
    hideContent: "Lost $3000 in the stock market crash",
    changePosition: 0,
    changeMoney: -3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 66,
    showContent: "Get your Legacy money!",
    hideContent: "Recieve $10,000 as your inheritance",
    changePosition: 0,
    changeMoney: 10000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 67,
    showContent: "Alien Alert",
    hideContent: "Got abducted by Aliensss, skip one move",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 68,
    showContent: "BEWARE",
    hideContent: "Pay company bills",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 69,
    showContent: "Good News!",
    hideContent: "Work from home bonus of $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 70,
    showContent: "FINE!",
    hideContent: "Pay $1000 for not wearing a mask",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 71,
    showContent: "Stimulus Cheque",
    hideContent: "Recieve $5000 from Government",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 72,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 73,
    showContent: "Happy Birthday",
    hideContent: "Recieve $3000 as your present",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 74,
    showContent: "Medical bills",
    hideContent: "Pay $2000",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 75,
    showContent: "NETFLIX",
    hideContent: "Skip turn because you're binging",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 76,
    showContent: "Increased online sales",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 77,
    showContent: "Increased Overtime",
    hideContent: "Receive $1000 and skip a turn",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: 0,
  },
  {
    id: 78,
    showContent: "Donate!",
    hideContent: "Donate $1000 to frontline workers",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 79,
    showContent: "Mask fine!",
    hideContent: "Fine for not wearing your mask!",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 80,
    showContent: "You're sick!",
    hideContent: "You got sick. Skil turn.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 3,
  },
  {
    id: 81,
    showContent: "Goto!",
    hideContent: "You go to 40 if you have the money!",
    changePosition: 12,
    changeMoney: 0,
    rollDie: false,
    checkMoney: true,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 82,
    showContent: "Won an MLH Hack",
    hideContent: "You receive $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 83,
    showContent: "You got your dividend!",
    hideContent: "You receive $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 84,
    showContent: "You lost moneyy!!",
    hideContent: "Lol. Pay $4k now",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 85,
    showContent: "Paycheck!",
    hideContent: "You get $4k. Spend wisely!",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 86,
    showContent: "Alien Alert!",
    hideContent: "You got abducted by aliens!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 1,
  },
  {
    id: 87,
    showContent: "Money Money!",
    hideContent: "Bonus babyy. $2000!",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 88,
    showContent: "Pay rent!",
    hideContent: "Pay your rest. $2k down!",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 89,
    showContent: "Pay interest!",
    hideContent: "Pay your interest. $1k down!",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 90,
    showContent: "Overtime!",
    hideContent: "Work more. Play less!",
    changePosition: 0,
    changeMoney: 1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 1,
  },
  {
    id: 91,
    showContent: "Go back!",
    hideContent: "Go back 8 spaces!",
    changePosition: -8,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 92,
    showContent: "Pay Cut",
    hideContent: "Lost $1000. Salary Reduced. ",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 93,
    showContent: "Won an MLH Hack",
    hideContent: "You receive $4000",
    changePosition: 0,
    changeMoney: 4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 94,
    showContent: "Receive stimulus from govt.",
    hideContent: "You receive $5000",
    changePosition: 0,
    changeMoney: 5000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 95,
    showContent: "Biggest Loss :(",
    hideContent: "You lost $4000 becaouse of some work problems.",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 96,
    showContent: "Insurance Premimum",
    hideContent: "You lost $1000",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 97,
    showContent: "Lucky Guy!! Inherit money.",
    hideContent: "You received  $10000",
    changePosition: 0,
    changeMoney: 10000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 98,
    showContent: "Alone time",
    hideContent: "You have to stay in Quarantine.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 2,
  },
  {
    id: 99,
    showContent: "Pay Rent !",
    hideContent: "You have to pay rent $2000.",
    changePosition: 0,
    changeMoney: -2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 100,
    showContent: "Put on your Mask.",
    hideContent: "You got a fine of $1000",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 101,
    showContent: "You are doing good.",
    hideContent: "You got a good job. Received $2000",
    changePosition: 0,
    changeMoney: 2000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 102,
    showContent: "Salary got reduced.",
    hideContent: "You lose $1000.",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 103,
    showContent: "Happy Birthday !",
    hideContent: "You receive $3000",
    changePosition: 0,
    changeMoney: 3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 104,
    showContent: "VACCINE!",
    hideContent: "You got the vaccine! You win!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
  {
    id: 105,
    showContent: "Check your luck.",
    hideContent: "Go back 5 steps.",
    changePosition: -5,
    changeMoney: 0,
    rollDie: false,
    checkMoney: true, //if < 5K go back 5 steps.
    condition: false,
    state: 0,
    skipTurn: 0,
  },
  {
    id: 106,
    showContent: "DIE!",
    hideContent: "You died and lost the game",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },

  {
    id: 107,
    showContent: "Stock Market Crashed.",
    hideContent: "You lose $3000",
    changePosition: 0,
    changeMoney: -3000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: 0,
    skipTurn: 0,
  },

  {
    id: 108,
    showContent: "END",
    hideContent: "YOU ARE AT THE END!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: 0,
  },
];

let turn = 0;
let finished = 0;
let colorPalatte = ["#00FA9A", "#00BFFF", "#FFA500", "#DC143C", "#FFFF00"];

const executeTask = (currentPosition) => {
  let currentCell = document.querySelector(`#cell${currentPosition}`);
  let currentPlayer = document.querySelector(
    `#cell${currentPosition} #p${turn}`
  );
  let message = "";
  let title = "";
  if (cells[currentPosition - 1].condition) {
    if (cells[currentPosition - 1].rollDie) {
      let newValue = Math.floor(Math.random() * 6) + 1;
      title += `Dice rolled again : ${newValue}`;
      if (newValue % 2) {
        players[turn].position += 1;
        players[turn].position =
          players[turn].position >= 108 ? 108 : players[turn].position;
        message = "Dice value is ODD. Jump to next cell.</br>";
      } else {
        players[turn].position += cells[currentPosition - 1].changePosition;
        players[turn].position =
          players[turn].position >= 108 ? 108 : players[turn].position;
        message = `Dice value is ODD. Move ${
          cells[currentPosition - 1].changePosition
        } cells ahead.</br>`;
      }
      message += `Player ${turn + 1} jumped to Cell no. ${
        players[turn].position
      }</br>`;
    } else if (cells[currentPosition - 1].checkMoney) {
      title += "Are you rich?";
      if (players[turn].money < 3000) {
        players[turn].position += 1;
        players[turn].position =
          players[turn].position >= 108 ? 108 : players[turn].position;
        message = "Players doesn't have enough money. Jump to next cell.</br>";
      } else {
        players[turn].position += cells[currentPosition - 1].changePosition;
        players[turn].position =
          players[turn].position >= 108 ? 108 : players[turn].position;
        message = `Congratulations, You have worked hard. Move ${
          cells[currentPosition - 1].changePosition
        } cells ahead.</br>`;
      }
      message += `Player ${turn + 1} jumped to Cell no. ${
        players[turn].position
      }</br>`;
    }
  } else {
    title += "Card task executed";
    if (cells[currentPosition - 1].changePosition) {
      players[turn].position += cells[currentPosition - 1].changePosition;
      players[turn].position =
        players[turn].position >= 108 ? 108 : players[turn].position;
      message += `Player ${turn + 1} jumped to Cell no. ${
        players[turn].position
      }</br>`;
    }
    if (cells[currentPosition - 1].changeMoney) {
      players[turn].money += cells[currentPosition - 1].changeMoney;
      message += `Player ${turn + 1} now has $${players[turn].money}</br>`;
    }
    if (cells[currentPosition - 1].skipTurn) {
      players[turn].skip += cells[currentPosition - 1].skipTurn;
      if (players[turn].skip === 1) {
        message = `Player ${turn + 1} cannot move for ${
          players[turn].skip
        } turn</br>`;
      } else {
        message = `Player ${turn + 1} cannot move for ${
          players[turn].skip
        } turns</br>`;
      }
    }
  }

  if (players[turn].position === 108) {
    players[turn].finished = true;
    players[turn].skip = Number.POSITIVE_INFINITY;
    finished++;

    let playerCard = document.querySelector(`.players #player${turn}`);
    playerCard.style.backgroundColor = "white";
    playerCard.style.color = "black";
    playerCard.style.boxShadow = `10px 20px 30px ${colors[turn]}`;
  }

  // display this on modal
  document.querySelector("#dice-modal-title").textContent = title;
  document.querySelector("#dice-modal-message").innerHTML = message;

  // switch buttons (Lets Go -> End Turn)
  document.querySelector("#task-button").style.display = "none";
  document.querySelector("#end-turn").style.display = "block";
  // move actual player to new spot
  currentCell.removeChild(currentPlayer);
  cells[currentPosition - 1].state--;
  if (cells[currentPosition - 1].state === 0) {
    currentCell.textContent = cells[currentPosition - 1].showContent;
  }
  let nextCell = document.querySelector(`#cell${players[turn].position}`);
  if (cells[players[turn].position - 1].state === 0) {
    nextCell.textContent = "";
  }
  nextCell.appendChild(currentPlayer);
  cells[players[turn].position - 1].state++;
  // change money amount in dashboard
  let playerCard = document.querySelector(`.players #player${turn} .amount`);
  playerCard.textContent = "$" + `${players[turn].money}`;

  if (finished === 4) {
    // display the result button
    document.querySelector(".result-button").style.display = "block";
    return;
  }

  // changing turns
  turn = (turn + 1) % 4;

  while (players[turn].skip != 0) {
    players[turn].skip--;
    turn = (turn + 1) % 4;
  }

  showTurn();
};

const getWinner = () => {
  let winnerId = 0;
  let maxMoney = 0;
  players.forEach((player) => {
    if (player.money > maxMoney) {
      maxMoney = player.money;
      winnerId = player.id;
    }
  });
  return winnerId;
};

const showResults = () => {
  // showing the task on the cell
  let winner = getWinner();
  document.querySelector(
    "#result-modal-title"
  ).textContent = `Player ${winner} WON`;

  document.querySelector("#result-modal-message").innerHTML = `
    Player 1 has $${players[0].money}</br>
    Player 2 has $${players[1].money}</br>
    Player 3 has $${players[2].money}</br>
    Player 4 has $${players[3].money}</br>
  `;

  document.querySelector("#reset-button").onclick = () => {
    window.location.reload();
  };

  $("#result-modal").modal("show");
};

const changePlace = (diceValue) => {
  let currentPosition = players[turn].position;
  let currentPlayer = document.querySelector(
    `#cell${currentPosition} #p${turn}`
  );
  let currentCell = document.querySelector(`#cell${currentPosition}`);
  currentCell.removeChild(currentPlayer);
  cells[currentPosition - 1].state--;
  if (cells[currentPosition - 1].state === 0) {
    currentCell.textContent = cells[currentPosition - 1].showContent;
  }

  let nextPosition = currentPosition + diceValue;
  if (nextPosition >= 108) {
    nextPosition = 108;
    players[turn].finished = true;
    players[turn].skip = Number.POSITIVE_INFINITY;
    finished++;
    // only highlight the player who has finished
    let playerCard = document.querySelector(`.players #player${turn}`);
    playerCard.style.backgroundColor = "white";
    playerCard.style.color = "black";
    playerCard.style.boxShadow = `10px 20px 30px ${colors[turn]}`;
  }

  let nextCell = document.querySelector(`#cell${nextPosition}`);
  if (cells[nextPosition - 1].state === 0) {
    nextCell.textContent = "";
  }
  nextCell.appendChild(currentPlayer);
  cells[nextPosition - 1].state++;
  players[turn].position = nextPosition;

  // showing the task on the cell
  document.querySelector(
    "#dice-modal-title"
  ).textContent = `Dice rolled : ${diceValue}`;

  document.querySelector("#dice-modal-message").innerHTML = `
    Player ${turn + 1} moved to Cell no. ${nextPosition}</br>
    ${cells[nextPosition - 1].hideContent}
  `;

  document.querySelector("#task-button").onclick = () => {
    executeTask(nextPosition, turn);
  };

  if (players[turn].finished) {
    document.querySelector("#task-button").style.display = "none";
    document.querySelector("#end-turn").style.display = "block";
    if (finished === 4) {
      // display the result button
      document.querySelector(".result-button").style.display = "block";
      return;
    }
    // changing turns
    turn = (turn + 1) % 4;

    while (players[turn].skip != 0) {
      players[turn].skip--;
      turn = (turn + 1) % 4;
    }

    showTurn();
  } else {
    document.querySelector("#task-button").style.display = "block";
    document.querySelector("#end-turn").style.display = "none";
  }

  $("#dice-modal").modal("show");
};

const showTurn = () => {
  let playersCard = document.querySelectorAll(".player");

  playersCard.forEach((playerCard) => {
    let index = Number.parseInt(playerCard.id[6]);
    if (index === turn) {
      playerCard.style.backgroundColor = colors[index];
      playerCard.style.color = "white";
    } else {
      playerCard.style.backgroundColor = "white";
      playerCard.style.color = "black";
    }
  });
};

const rollDice = () => {
  let value = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".img1")
    .setAttribute("src", "assets/dice/dice" + value + ".png");
  changePlace(value);
};

const startGame = () => {
  showTurn();
  document.querySelector(".result-button").style.display = "none";
  let startCell = document.getElementById(`cell1`);
  startCell.textContent = "";

  for (let i = 0; i < 4; i++) {
    let player = document.createElement("div");
    player.setAttribute("id", `p${i}`);

    player.style.backgroundColor = colors[i];
    player.style.height = "20px";
    player.style.margin = "4px";
    player.style.borderRadius = "10%";
    player.style.border = "black 1px solid";

    startCell.appendChild(player);
  }
  cells[0].state = 4;
};

const makecells = () => {
  let board = document.querySelector(".board-rows");
  for (let r = 1; r <= num_rows; r += 1) {
    let ri = document.createElement("div");
    ri.className = "row";
    ri.setAttribute("id", `row${r}`);
    for (let c = 1; c <= num_cols; c += 1) {
      let ci = document.createElement("div");
      let cellId = 12 * (r - 1) + c;
      if (r % 2 == 0) {
        cellId = 12 * r - c + 1;
      }
      ci.className = "col-1 cell";
      ci.setAttribute("id", `cell${cellId}`);
      ci.textContent = `${cells[cellId - 1].showContent}`;

      const randomColor = Math.floor((Math.random() * 100) % 5);
      ci.style.backgroundColor = colorPalatte[randomColor];

      ri.appendChild(ci);
    }
    board.appendChild(ri);
  }
  document.getElementById("cell1").style.backgroundColor = "#7CFC00";
  document.getElementById("cell108").style.backgroundColor = "#7CFC00";
};

const makePopovers = () => {
  for (let r = 1; r <= num_rows; r += 1) {
    for (let c = 1; c <= num_cols; c += 1) {
      let cellId = 12 * (r - 1) + c;
      if (r % 2 == 0) {
        cellId = 12 * r - c + 1;
      }
      let ci = document.querySelector(`#cell${cellId}`);
      ci.setAttribute("data-bs-toggle", "popover-hover");
      ci.textContent = `${cells[cellId - 1].showContent}`;

      const randomColor = Math.floor((Math.random() * 100) % 5);
      document.getElementById(`cell${cellId}`).style.backgroundColor =
        colorPalatte[randomColor];

      $('[data-bs-toggle="popover-hover"]').popover({
        html: true,
        trigger: "hover",
        placement: "top",
        content: `${cells[cellId - 1].hideContent}`,
        delay: { show: 0, hide: 20 },
        title: "What will happen",
      });
    }
  }
  document.getElementById(`cell1`).style.backgroundColor = "#7CFC00";
  document.getElementById(`cell108`).style.backgroundColor = "#7CFC00";
  document.getElementById(`cell1`).style.fontFamily = "Hana";
  document.getElementById(`cell108`).style.fontFamily = "Hana";
  document.getElementById(`cell1`).style.fontSize = "22px";
  document.getElementById(`cell108`).style.fontSize = "32px";
};

function togglePopup(name) {
  var popup = document.getElementById(name);
  popup.classList.toggle("show");
}
// Music Code
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

// Make the board and start the game
makecells();
makePopovers();
startGame();

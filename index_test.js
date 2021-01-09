const num_rows = 9;
const num_cols = 12;

let players = [
  {
    id: 1,
    turn: true,
    finished: false,
    position: 1,
    money: 1000,
  },
  {
    id: 2,
    turn: false,
    finished: false,
    position: 1,
    money: 1000,
  },
  {
    id: 3,
    turn: false,
    finished: false,
    position: 1,
    money: 1000,
  },
  {
    id: 4,
    turn: false,
    finished: false,
    position: 1,
    money: 1000,
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
  condition: "",
  state: "array of the number of people in that cells"
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
    state: []
  },
  {
    id: 2,
    showContent: "Collect Paycheck",
    hideContent: "Recieve $4000",
    changePosition: 0,
    changeMoney:4000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 3,
    showContent: "Good News!",
    hideContent: "Recieve a bonus of $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 4,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
   {
    id: 5,
    showContent: "Donate!",
    hideContent: "Donate $1000 to wildfire relief",
    changePosition: 0,
    changeMoney:-1000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
  },
   {
    id: 7,
    showContent: "BEWARE",
    hideContent: "Pay fees for online classe",
    changePosition: 0,
    changeMoney: -4000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
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
    state: []
  },
   {
    id: 10,
    showContent: "QUARANTINE",
    hideContent: "Skip 2 moves because you are in QUARANTINE",
    changePosition: 0,
    changeMoney: 0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 2,
    state: []
  },
  {
    id: 11,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
  },
  {
    id: 13,
    showContent: "Get your Inheritance!",
    hideContent: "Recieve $10,000 as your inheritance",
    changePosition: 0,
    changeMoney:10000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 14,
    showContent: "Alien Abduction",
    hideContent: "Got abducted by Aliensss, skip one move",
    changePosition: 0,
    changeMoney:0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: []
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
    state: []
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
    state: []
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
    state: []
  },
  {
    id: 18,
    showContent: "Government Stimulus",
    hideContent: "Recieve $5000 from Government",
    changePosition: 0,
    changeMoney: 3000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 19,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 20,
    showContent: "BIRTHDAY",
    hideContent: "Recieve $3000 as your present",
    changePosition: 0,
    changeMoney:3000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
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
    state: []
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
    state: []
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
    state: []
  },
  {
    id: 25,
    showContent: "Donate!",
    hideContent: "Donate $1000 to frontline workers",
    changePosition: 0,
    changeMoney:-1000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 3
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 31,
    showContent: "You lost moneyyyy!!",
    hideContent: "Lol. Pay $4k now",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 33,
    showContent: "Alien Adduction!",
    hideContent: "You got abducted by aliens!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 1
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 1
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 43,
    showContent: "Insurance Premimum",
    hideContent: "You lost $1000",
    changePosition: 0,
    changeMoney: -1000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 45,
    showContent: "Quarantine",
    hideContent: "You have to stay in Quarantine.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 2
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 1
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 55,
    showContent: "Collect Paycheck",
    hideContent: "Recieve $4000",
    changePosition: 0,
    changeMoney:4000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 56,
    showContent: "Good News!",
    hideContent: "Recieve a bonus of $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 57,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
   {
    id: 58,
    showContent: "Donate!",
    hideContent: "Donate $1000 to wildfire relief",
    changePosition: 0,
    changeMoney:-1000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
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
    state: []
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
    state: []
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
    state: []
  },
   {
    id: 63,
    showContent: "QUARANTINE",
    hideContent: "Skip 2 moves because you are in QUARANTINE",
    changePosition: 0,
    changeMoney: 0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 2,
    state: []
  },
  {
    id: 64,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
  },
  {
    id: 66,
    showContent: "Get your Inheritance!",
    hideContent: "Recieve $10,000 as your inheritance",
    changePosition: 0,
    changeMoney:10000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 67,
    showContent: "Alien Abduction",
    hideContent: "Got abducted by Aliensss, skip one move",
    changePosition: 0,
    changeMoney:0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 1,
    state: []
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
    state: []
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
    state: []
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
    state: []
  },
  {
    id: 71,
    showContent: "Government Stimulus",
    hideContent: "Recieve $5000 from Government",
    changePosition: 0,
    changeMoney: 3000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 72,
    showContent: "Recieve Dividend",
    hideContent: "Recieve $2000",
    changePosition: 0,
    changeMoney:2000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
  },
  {
    id: 73,
    showContent: "BIRTHDAY",
    hideContent: "Recieve $3000 as your present",
    changePosition: 0,
    changeMoney:3000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: []
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
    state: []
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
    state: []
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
    state: []
  },
  {
    id: 78,
    showContent: "Donate!",
    hideContent: "Donate $1000 to frontline workers",
    changePosition: 0,
    changeMoney:-1000, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 3
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 84,
    showContent: "You lost moneyyyy!!",
    hideContent: "Lol. Pay $4k now",
    changePosition: 0,
    changeMoney: -4000,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 86,
    showContent: "Alien Adduction!",
    hideContent: "You got abducted by aliens!",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 1
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 1
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 98,
    showContent: "Quarantine",
    hideContent: "You have to stay in Quarantine.",
    changePosition: 0,
    changeMoney: 0,
    rollDie: false,
    checkMoney: false,
    condition: false,
    state: [],
    skipTurn : 2
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
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
    state: [],
    skipTurn : 0
  },
  {
    id: 104,
    showContent: "VACCINE!",
    hideContent: "You got the vaccine! You win!",
    changePosition: 0,
    changeMoney:0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: [],
    skipTurn : 0
  },
  {
    id: 106,
    showContent: "DIE!",
    hideContent: "You died and lost the game",
    changePosition: 0,
    changeMoney:0, 
    rollDie: false,
    checkMoney: false,
    condition: false,
    skipTurn: 0,
    state: []
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
    state: [],
    skipTurn : 0
  },


{
  id: 108,
  showContent: "END",
  hideContent: "YOU WIN!",
  changePosition: 0,
  changeMoney:0, 
  rollDie: false,
  checkMoney: false,
  condition: false,
  skipTurn: 0,
  state: []
}
    
];

let turn = 0;
let finished = 0;



const newPath = (position,turn) => {
  currentCell   = cells[position-1];
  currentPlayer = players[turn];
  //console.log(players[turn].money);
  let newPosition = position + currentCell.changePosition;
  players[turn].money += currentCell.changeMoney;
  //console.log(currentCell.changeMoney + " " + players[turn].money);
  let tag = document.querySelector(`.players #player${turn} .amount`);
  tag.textContent = "$" + `${players[turn].money}`;
  return newPosition;
};


const changePlace = (turn, diceValue) => {
  let currentPlayer = players[turn];
  let currentPosition = currentPlayer.position;

  //some query to remove the pointer from cell
  let cell = document.getElementById(`cell${currentPosition}`);
  cell.textContent = `${currentPosition}`;

  //some query to add pointer to next cell
  let nextPosition = currentPosition + diceValue;
  nextPosition = newPath(nextPosition,turn);
  if (nextPosition > 108) {
    nextPosition = 108;
    players[turn].finished = true;
    //add turn finished query
    let playersCard = document.getElementById(`player${turn}`);
    finished++;
  }

  console.log(nextPosition);
  cell = document.getElementById(`cell${nextPosition}`);
  cell.textContent = `Player${turn}`;

  players[turn].position = nextPosition;
};



const showTurn = (turn) => {
  let playersCard = document.querySelectorAll(".player");

  playersCard.forEach((playerCard) => {
    let index = Number.parseInt(playerCard.id[6]);
    if (index === turn) {
      playerCard.style.backgroundColor = "#eb4034";
      playerCard.style.color = "white";
    } else {
      playerCard.style.backgroundColor = "white";
      playerCard.style.color = "black";
    }
  });
};

const rollDice = () => {
  let value = Math.floor(Math.random() * 6) + 1;

  document.querySelector(
    "#dice-modal-title"
  ).textContent = `Dice Rolled : ${value}`;

  document.querySelector("#dice-modal-message").textContent = `Player ${turn +
    1} moved to Cell no. ${players[turn].position + value}`;

  $("#dice-modal").modal("show");
  changePlace(turn, value);
  turn = (turn + 1) % 4;
  showTurn(turn);
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
      ci.textContent = cellId;
      ci.className = "col-1 cell";
      ci.setAttribute("id", `cell${cellId}`);
      ri.appendChild(ci);
    }
    board.appendChild(ri);
  }
};

const cellcontents = () => {
  let board = document.querySelector(".board-rows");
  for (let r = 1; r <= num_rows; r += 1) {
    for (let c = 1; c <= num_cols; c += 1) {
      let cellId = 12 * (r - 1) + c;
      if (r % 2 == 0) {
        cellId = 12 * r - c + 1;
      }
      ci = document.querySelector('#' + `cell${cellId}`);
      ci.innerHTML = `<div class=\"cellContents popup\" onmouseover=\"myFunction(\'myPopup${cellId}\')\"> ${cells[cellId-1].showContent}<span class=\"popuptext\" id=\"myPopup${cellId}\">${cells[cellId-1].hideContent}</span></div>`;
      console.log(ci, cells[cellId-1].showContent);
    }
  }
};

function myFunction(name) {
  var popup = document.getElementById(name);
  popup.classList.toggle("show");
}

makecells();
showTurn(0);
cellcontents();

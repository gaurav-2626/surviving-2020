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
  }
];

let turn = 0;
let finished = 0;

const changePlace = (turn, diceValue) => {
  let currentPlayer = players[turn];
  let currentPosition = currentPlayer.position;

  //some query to remove the pointer from cell
  let cell = document.getElementById(`cell${currentPosition}`);
  cell.textContent = `${currentPosition}`;

  //some query to add pointer to next cell
  let nextPosition = currentPosition + diceValue;
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

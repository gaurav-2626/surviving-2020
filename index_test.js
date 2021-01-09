const num_rows = 8;
const num_cols = 12;

const makecells = () => {
  let board = document.querySelector(".board-rows");
  for (let r = 1; r <= num_rows; r += 1) {
    let ri = document.createElement("div");
    ri.className = "row";
    ri.setAttribute("id", `row${r}`);
    for (let c = 1; c <= num_cols; c += 1) {
      let ci = document.createElement("div");
      ci.className = "col-1 cell";
      ci.setAttribute("id", `cell${c}`);
      ri.appendChild(ci);
    }
    board.appendChild(ri);
  }
};

makecells();

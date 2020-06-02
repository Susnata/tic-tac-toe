const gameBoardEl = document.getElementById("game-board");
const gameStatusEl = document.getElementById("game-status");
let count = 0, turn = "O"; let occupiedCellList = [];
const turnX = "X", turnO = "O";

function playBtnClick() {
  this.classList.add("hide");
  gameStatusEl.textContent = "Game started";
  gameBoardEl.addEventListener("mouseover", handleMouseOver);
  gameBoardEl.addEventListener("mouseout", handleMouseOut);
  gameBoardEl.addEventListener("click", handleClick);
}

function handleMouseOver(e) {
  const targetElement = e.target;
  const cellId = targetElement.dataset.id;
  if (cellId && (!occupiedCellList.includes(cellId))) {
    targetElement.classList.add("show");
    if (turn === "O") {
      targetElement.textContent = turnX;
    } else {
      targetElement.textContent = turnO;
    }
    e.stopPropagation();
  }
}

function handleMouseOut(e) {
  const targetElement = e.target;
  const cellId = targetElement.dataset.id;
  if (cellId && (!occupiedCellList.includes(cellId))) {
    targetElement.textContent = "";
    targetElement.classList.remove("show");
    e.stopPropagation();
  }
}

function handleClick(e) {
  const targetElement = e.target;
  const cellId = targetElement.dataset.id;
  if (cellId && (!occupiedCellList.includes(cellId))) {
    occupiedCellList.push(cellId);
    targetElement.removeEventListener("click", handleClick);
    console.log("I have been already clicked");
    targetElement.classList.remove("show");
    if (turn === "O") {
      targetElement.textContent = turnX;
      turn = "X";
    } else {
      targetElement.textContent = turnO;
      turn = "O";
    }
    count++;
    if (count >= 9) {
      gameStatusEl.textContent = "Game over!"
    }
    e.stopPropagation();
  }
}

const playBtnEl = document.getElementById("play");
playBtnEl.addEventListener("click", playBtnClick);




















const boxElements = document.getElementsByClassName("box");
const gameBoardEl = document.getElementById("game-board");
const gameStatusEl = document.getElementById("game-status");
let count = 0, turn = "O"; let occupiedCellList = [];
const turnX = "X", turnO = "O";
//let firstPlayer;

function playBtnClick() {
  // console.log(this);
  this.classList.add("hide");
  gameStatusEl.textContent = "Game started";
  // for (let el of boxElements) {
  // console.log(el);
  gameBoardEl.addEventListener("mouseover", handleMouseOver);

  gameBoardEl.addEventListener("mouseout", handleMouseOut);

  gameBoardEl.addEventListener("click", handleClick);
  // }
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



















    // if (turn >= 5) {
    //   switch (true) {
    //     case turnSequence[0] === turnSequence[1] && turnSequence[1] === turnSequence[2]:
    //     case turnSequence[0] === turnSequence[3] && turnSequence[3] === turnSequence[6]:
    //     case turnSequence[0] === turnSequence[4] && turnSequence[4] === turnSequence[8]:
    //       gameStatusEl.textContent = "Player " + turnSequence[0] + " Wins";
    //       break;
    //     case turnSequence[1] === turnSequence[4] && turnSequence[4] === turnSequence[7]:
    //       gameStatusEl.textContent = "Player " + turnSequence[1] + " Wins";
    //       break;
    //     case turnSequence[2] === turnSequence[4] && turnSequence[4] === turnSequence[6]:
    //     case turnSequence[2] === turnSequence[5] && turnSequence[5] === turnSequence[8]:
    //       gameStatusEl.textContent = "Player " + turnSequence[2] + " Wins";
    //       break;
    //     case turnSequence[3] === turnSequence[4] && turnSequence[4] === turnSequence[5]:
    //       gameStatusEl.textContent = "Player " + turnSequence[3] + " Wins";
    //       break;
    //     case turnSequence[6] === turnSequence[7] && turnSequence[7] === turnSequence[8]:
    //       gameStatusEl.textContent = "Player " + turnSequence[6] + " Wins";
    //   }

    // }
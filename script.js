const boxElements = document.getElementsByClassName("box");
const gameStatusEl = document.getElementById("game-status");
let turn = 0; let turnSequence = [];
const turnX = "X", turnO = "O";
//let firstPlayer;

function handleMouseOver(e) {
  const targetElement = e.target;
  targetElement.classList.add("show");
  if (turn % 2 === 0) {
    targetElement.textContent = turnX;
  } else {
    targetElement.textContent = turnO;
  }
}

function handleMouseOut(e) {
  const targetElement = e.target;
  targetElement.textContent = "";
  targetElement.classList.remove("show");
}

function handleClick(e) {
  const targetElement = e.target;
  targetElement.removeEventListener("mouseover", handleMouseOver);
  targetElement.removeEventListener("mouseout", handleMouseOut);
  targetElement.classList.remove("show");
  if (turn % 2 === 0) {
    targetElement.textContent = turnX;
    turnSequence.push(turnX);
  } else {
    targetElement.textContent = turnO;
    turnSequence.push(turnO);
  }
  turn++;
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
  if (turn >= 9) {
    gameStatusEl.textContent = "Game over!"
  }
  targetElement.removeEventListener("click", handleClick);

}

const playButton = document.getElementById("play");

playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  gameStatusEl.textContent = "Game started";
  for (let el of boxElements) {
    // console.log(el);
    el.addEventListener("mouseover", handleMouseOver);

    el.addEventListener("mouseout", handleMouseOut);

    el.addEventListener("click", handleClick);
  }

})




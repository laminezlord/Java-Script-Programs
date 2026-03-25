const prompt = require("prompt-sync")();

console.log("Welcome to X and O game");

// board with numbers
let board = [
            "1","2","3",
            "4","5","6",
            "7","8","9"
            ];

// first input
let currentPlayer = prompt("Enter X or O: ");

if (currentPlayer !== "X" && currentPlayer !== "O" && currentPlayer !== "x" && currentPlayer !== "o") {
  console.log("Invalid choice!");
  process.exit();
}

let gameRunning = true;

// win patterns
let winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

while (gameRunning) {

  // show board
  console.log(`
 ${board[0]} | ${board[1]} | ${board[2]}
---------
 ${board[3]} | ${board[4]} | ${board[5]}
---------
 ${board[6]} | ${board[7]} | ${board[8]}
`);

  let move = prompt(`Player ${currentPlayer}, enter index (1-9): `);
  let index = Number(move) - 1;

  // validate move
  if (index < 0 || index > 8 || board[index] === "X" || board[index] === "O") {
    console.log("Invalid move! Try again.");
    continue;
  }

  // update board
  board[index] = currentPlayer;

  // check winner
  let won = false;
  for (let pattern of winPatterns) {
    let [a,b,c] = pattern;
    if (board[a] === currentPlayer &&
        board[b] === currentPlayer &&
        board[c] === currentPlayer) {
      won = true;
    }
  }

  if (won) {
    console.log(`
 ${board[0]} | ${board[1]} | ${board[2]}
---------
 ${board[3]} | ${board[4]} | ${board[5]}
---------
 ${board[6]} | ${board[7]} | ${board[8]}
`);
    console.log(`🎉 Player ${currentPlayer} wins!`);
    break;
  }

  // check draw
  if (!board.includes("1") && !board.includes("2") && !board.includes("3") &&
      !board.includes("4") && !board.includes("5") && !board.includes("6") &&
      !board.includes("7") && !board.includes("8") && !board.includes("9")) {
    console.log("It's a draw!");
    break;
  }

  // switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
// PROGRAM STRUCTURE

// ******************************** 1. Looping a triangle

for (let line = "#"; line.length < 8; line += "#") console.log(line);

// ******************************** 2. FizzBuzz

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// ******************************** 3. Chessboard

function makeBoard(size = 8) {
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board += (x + y) % 2 == 0 ? " " : "#";
    }
    board += "\n";
  }
  return board;
}

console.log(makeBoard());

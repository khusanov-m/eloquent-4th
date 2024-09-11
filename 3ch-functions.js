// FUNCTIONS

// ******************************** 1. Minimum

function min(a, b) {
  return a < b ? a : b;
}

// ******************************** 2. Recursion

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

// ******************************** 3. Bean counting

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ch) counted += 1;
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

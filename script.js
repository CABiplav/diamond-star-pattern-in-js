function createPattern(height) {
  let n = (height + 1) / 2;

  for (let i = 1; i < n + 1; i++) {
    let countDash = n - i;
    let countStar = 2 * i - 1;

    x = " ".repeat(countDash) + "*".repeat(countStar) + " ".repeat(countDash);
    console.log(x);
  }
  for (let j = n + 1; j < height + 1; j++) {
    let countDash = j - n;
    let countStar = 4 * n - 2 * j - 1;

    x = " ".repeat(countDash) + "*".repeat(countStar) + " ".repeat(countDash);
    console.log(x);
  }
}

createPattern(15);

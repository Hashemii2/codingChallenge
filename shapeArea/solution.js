//the straightforward solution is:

function shapeArea(n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2);
}

//but I want to write another solution step by step

function shapeArea(n) {
  let currentResult = 0;
  let previousRessult = 1;

  for (let i = 1; i <= n; i++) {
    let previousIndex = i - 1;

    currentResult = previousRessult + previousIndex * 4;
    previousRessult = currentResult;
  }

  return result;
}

console.log(shapeArea(3));

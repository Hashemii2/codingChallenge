//the straight solution is:

function shapeArea(n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2);
}

//but I want to write another solution step by step

function shapeArea(n) {
  let result = 0;
  let numBefore = 1;

  for (let i = 1; i <= n; i++) {
    let Indexbefore = i - 1;

    result = numBefore + Indexbefore * 4;
    numBefore = result;
  }

  return result;
}

console.log(shapeArea(3));

function rowsRearranging(matrix) {
  let sortedMatrix = matrix
    .map((arr) => arr.sort((a, b) => b - a))
    .sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2]);

  return sortedMatrix.every((arr, idx) =>
    arr.every(
      (num, jdx) =>
        idx == sortedMatrix.length - 1 || num > sortedMatrix[idx + 1][jdx]
    )
  );
}

var matrix1 = [
  [2, 7, 1],
  [0, 2, 0],
  [1, 3, 1],
];

let matrix2 = [
  [6, 4],
  [2, 2],
  [4, 3],
];

console.log(rowsRearranging(matrix1)); //false
console.log(rowsRearranging(matrix2)); //true

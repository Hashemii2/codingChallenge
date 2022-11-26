function crossingSum(matrix, a, b) {
  return [...matrix[a], ...matrix.map((num) => num[b])].reduce(
    (pre, curr) => pre + curr,
    -matrix[a][b]
  );
}

console.log(
  crossingSum(
    [
      [1, 1],
      [3, 3],
      [1, 1],
      [2, 2],
    ],
    3,
    0
  )
);

function boxesPacking(length, width, height) {
  if (length.length == 1) return true;
  if (length.every((num, i, arr) => num == arr[0])) return false;

  const matrix = Array.from({ length: width.length }, (_, idx) => [
    length[idx],
    width[idx],
    height[idx],
  ])
    .map((box) => box.sort((a, b) => b - a))
    .sort((a, b) => b[0] - a[0]);

  return matrix.every((arr, idx) =>
    matrix
      .slice(idx, idx + 2)
      .every((boxes, jdx1, arr1) =>
        boxes.every(
          (num, jdx2, arr2) =>
            jdx1 == arr1.length - 1 || num > arr1[jdx1 + 1][jdx2]
        )
      )
  );
}

console.log(boxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2])); // true

console.log(boxesPacking([1, 1], [1, 1], [1, 1])); //false

console.log(boxesPacking([3, 1, 2], [3, 1, 2], [3, 2, 1])); //false

console.log(boxesPacking([2], [3], [4])); //true

console.log(boxesPacking([5, 7, 4, 1, 2], [4, 10, 3, 1, 4], [6, 5, 5, 1, 2])); //true

console.log(boxesPacking([6, 4], [5, 3], [4, 5])); //true

console.log(boxesPacking([6, 3], [5, 4], [4, 5])); //true

console.log(boxesPacking([6, 3], [5, 5], [4, 4])); //true

console.log(boxesPacking([883, 807], [772, 887], [950, 957])); //true

console.log(boxesPacking([6, 5], [5, 3], [4, 4])); //true

console.log(boxesPacking([4, 10, 3, 1, 4], [5, 7, 4, 1, 2], [6, 5, 5, 1, 2])); //true

console.log(boxesPacking([10, 8, 6, 4, 1], [7, 7, 6, 3, 2], [9, 6, 3, 2, 1])); //true
console.log(
  boxesPacking(
    [30, 62, 101, 57, 68, 92, 86, 69, 81, 53],
    [92, 114, 100, 70, 106, 106, 40, 30, 45, 86],
    [118, 80, 73, 78, 49, 34, 64, 38, 25, 78]
  )
); //false

console.log(
  boxesPacking(
    [634, 609, 589, 619, 644],
    [650, 602, 570, 648, 593],
    [633, 581, 595, 588, 577]
  )
); //false

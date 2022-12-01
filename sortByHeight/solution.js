function sortByHeight(a) {
  let sortedNum = a
    .slice()
    .filter((num) => num != -1)
    .sort((a, b) => a - b);

  return Array.from({ length: a.length }, (_, i) =>
    a[i] == -1 ? -1 : sortedNum.shift()
  );
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[-1, 150, 160, 170, -1, -1, 180, 190]

console.log(sortByHeight([-1, -1, -1, -1, -1])); //[-1, -1, -1, -1, -1]

console.log(sortByHeight([4, 2, 9, 11, 2, 16])); //[2, 2, 4, 9, 11, 16]

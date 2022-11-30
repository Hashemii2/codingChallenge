function deleteDigit(n) {
  const digit = [...`${n}`].map(
    (num, idx, arr) => +arr.filter((_, i) => idx != i).join``
  );

  return Math.max(...digit);
}

console.log(deleteDigit(1001)); //101
console.log(deleteDigit(10)); //1

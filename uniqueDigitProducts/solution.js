function uniqueDigitProducts(a) {
  return a.reduce(
    (pre, val) => (
      pre.add([...`${val}`].reduce((multy, value) => multy * value, 1)), pre
    ),
    new Set()
  ).size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23])); //3

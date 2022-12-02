function digitDifferenceSort(a) {
  return a
    .reduce(
      (pre, val, idx) => (
        pre.push([
          val,
          idx,
          Math.max(...[...`${val}`]) - Math.min(...[...`${val}`]),
        ]),
        pre
      ),
      []
    )
    .sort((a, b) => a[2] - b[2] || b[1] - a[1])
    .map((arr) => arr[0]);
}

console.log(digitDifferenceSort([152, 23, 7, 887, 243]));
//[7, 887, 23, 243, 152]

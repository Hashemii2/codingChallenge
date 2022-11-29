function obtainMaxNumber(arr) {
  const set = new Set(arr);

  if (arr.length == set.size) return Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    let lastIndex = arr.lastIndexOf(arr[i]);
    let firstIndex = arr.indexOf(arr[i]);

    if (firstIndex != lastIndex) {
      let value = arr[lastIndex] + arr[firstIndex];
      arr.unshift(value);

      arr.splice(lastIndex + 1, 1);
      arr.splice(firstIndex + 1, 1);
    }
  }
  return obtainMaxNumber(arr);
}

console.log(obtainMaxNumber([2, 4, 8, 1, 1, 15]));

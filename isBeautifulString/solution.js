function isBeautifulString(str) {
  return [...'abcdefghijklmnopqrstuvwxyz'].every(
    (char, idx, arr) =>
      str.split(char).length >= str.split(arr[idx + 1]).length ||
      idx == arr.length
  );
}

console.log(isBeautifulString('bbc')); //false
console.log(isBeautifulString('aaabbcc')); //true
console.log(isBeautifulString('jweiaz')); //false

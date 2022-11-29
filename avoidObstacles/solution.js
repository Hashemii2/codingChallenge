function avoidObstacles(arr) {
  for (let i = 2; i <= Math.max(...arr) + 1; i++) {
    let falg = arr.every((num) => num % i);

    if (falg) return i;
  }
}

console.log(avoidObstacles([1, 4, 10, 6, 2])); //7
console.log(avoidObstacles([5, 3, 6, 7, 9])); //4
console.log(avoidObstacles([2, 3])); //4

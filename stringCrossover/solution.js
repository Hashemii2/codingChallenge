function stringsCrossover(arr, result) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let res = loopy(arr[i], arr[j], result);
      if (res) count++;
    }
  }

  return count;
}

function loopy(str1, str2, result) {
  let size = 0;
  let len = Math.min(str2.length, str1.length, result.length);

  for (let i = 0; i < len; i++) {
    if (str1[i] == result[i] || str2[i] == result[i]) {
      size++;
    }
  }

  return size == result.length;
}

console.log(
  stringsCrossover(
    [
      'ccdacfbfa',
      'babbaecda',
      'baecbccea',
      'cdfbbfcce',
      'dfdffdadb',
      'aefacedec',
      'cbacefffe',
      'bfcfefedb',
      'aeeaababe',
      'cefcbccce',
    ],
    'dfdffdadb'
  )
);

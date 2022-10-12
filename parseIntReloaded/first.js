function parseInt(string) {
  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  let result1 = 0;
  let result2 = 0;

  let num = { hundred: 100, thousand: 1000, million: 1000000 };

  let splitedSting = string.toLowerCase().split(' ');

  if (splitedSting.length == 1 && !splitedSting[0].includes('-')) {
    if (obj[splitedSting[0]] != undefined) {
      return obj[splitedSting[0]];
    } else {
      return num[splitedSting[0]];
    }
  }

  let nonFlatArray = splitedSting.map((word) => {
    return word.includes('-') ? word.split('-') : word;
  });

  flaten(nonFlatArray).map((word) => {
    if (num[word]) {
      if (result1 == 0) result1 = 1;
      result1 *= num[word];
      if (result1 >= 1000) {
        result2 = result1;
        result1 = 0;
      }
    } else if (obj[word]) {
      result1 += obj[word];
    }
  });

  return result1 + result2;
}

function flaten(nonFlatArray) {
  return nonFlatArray.reduce(
    (prev, curr) => prev.concat(Array.isArray(curr) ? flaten(curr) : curr),
    []
  );
}

const res = parseInt('two hundred thousand');
console.log(res);

function buildPalindrome(str) {
  let toAdd = '';
  let newStr = str;

  for (let i = 0; i < str.length; i++) {
    if (isPalindrome(newStr)) return newStr;

    let char = str[i];
    toAdd = char + toAdd;
    newStr = str + toAdd;
  }
}

function isPalindrome(str) {
  return str == str.split('').reverse().join``;
}

console.log(buildPalindrome('abcdc')); // abcdcba
console.log(buildPalindrome('ababab')); // abababa
console.log(buildPalindrome('caaaacbac')); // caaaacbacabcaaaac

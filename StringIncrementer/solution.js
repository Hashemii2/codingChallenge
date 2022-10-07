function incrementString(string) {
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let position = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (num.includes(string[i])) position++;
    else {
      break;
    }
  }

  let index = string.length - position;

  let numPart = string.slice(index);
  let strPart = string.slice(0, index);

  let numInc = Number(numPart) + 1;

  if (lengthIsNotEqual(numInc, numPart) && isZeroTheLast(strPart)) {
    strPart = string.slice(0, index - 1);
  }

  return strPart + numInc;
}

function isZeroTheLast(strPart) {
  return strPart[strPart.length - 1] == '0';
}

function lengthIsNotEqual(numInc, numPart) {
  return String(numInc).length != numPart.length;
}

//Test Case
incrementString('foobar00999');
incrementString('foobar999');
incrementString('foobar001');
incrementString('foo');

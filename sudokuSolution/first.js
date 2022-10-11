function validSolution(board) {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let list = [];
  let isValid = true;

  board.map((row) =>
    number.map((item) => {
      !row.includes(item) ? (isValid = false) : '';
    })
  );

  //3*3
  if (isValid) {
    let first = [];
    let second = [];
    let third = [];

    for (let i = 0; i < board.length; ) {
      let jj = 0;

      while (jj < 3) {
        first.push(...board[i].slice(0, 3));
        second.push(...board[i].slice(3, 6));
        third.push(...board[i].slice(6));
        jj++;
        i++;
      }

      number.map((item) => {
        if (
          !first.includes(item) ||
          !second.includes(item) ||
          !third.includes(item)
        ) {
          isValid = false;
        }
      });

      first = [];
      second = [];
      third = [];
    }
  }

  //Column
  if (isValid) {
    for (let i = 0; i < board.length; i++) {
      board.map((num) => {
        list.push(num[num.length - 1]);
        num.length--;
      });

      number.map((item) => {
        if (!list.includes(item)) {
          isValid = false;
          return;
        }
      });

      list = [];
    }
  }

  return isValid;
}

const res = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]);

console.log(res);

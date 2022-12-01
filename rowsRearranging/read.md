Task

Given a rectangular matrix of integers, check if it is possible to
rearrange its rows in such a way that all its columns become strictly
increasing sequences (read from top to bottom).

Note, that you should not rearrange the elements of rows.

Example

For

matrix = [[6, 4], 
[2, 2], 
[4, 3]]```the output should be`true`.

It can rearrange to:

[[2, 2], [4, 3] [6, 4]] 2,4,6 and 2,3,4 all are the strictly increasing
sequence

For

matrix = [[2, 7, 1], [0, 2, 0], [1, 3, 1]]``` the output should be false;

It can not rearrange to a strictly increasing sequences

Input/Output

[input] 2D integer array matrix
A 2-dimensional array of integers.

Constraints:

1 ≤ matrix.length ≤ 20,
1 ≤ matrix[0].length ≤ 10,
-300 ≤ matrix[i][j] ≤ 300.

[output] a boolean value

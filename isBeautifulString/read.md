Task

A string is said to be beautiful if "b" occurs in it no more times
than "a"; "c" occurs in it no more times than "b"; etc.

Given a string s, check whether it is beautiful.

Example

For s = "bbbaacdafe", the output should be true;

a b c d e f g ... z
| | | | | | | |
3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0
It's so beautiful ;-)

For s = "aabbb", the output should be false;

a b c d ... z
| | | | |
2 < 3 > 0 ≥ 0 ... ≥0
It's not beautiful ;-)

For s = "bbc", the output should be false.

a b c d ... z
| | | | |
0 < 2 > 1 > 0 ... ≥0
It's not beautiful ;-)

Input/Output

[input] string s A string of lowercase letters.
Constraints: 3 ≤ inputString.length ≤ 50.
[output] a boolean value

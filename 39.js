// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }
  return res;
}

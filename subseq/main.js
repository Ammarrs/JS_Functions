// checks if the string is a sub sequence of another string
function subseq(string, element) {
  for (let i = 0; i < element.length; i++) {
    for(let j = 0; j < string.length; j++) {
      if (string[j] === element[i]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
  }
  return flag
}
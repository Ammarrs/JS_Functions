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

function myInclude(string, search) {
  if(string.length < search.length) {
    return false;
  }
  let substring = "";
  for(let i=0; i< search.length; i++) {
    substring += string[i];
    // console.log(substring);
  }

  if(substring === search) {
    return true;
  } else {
    return myInclude(string.slice(1), search)
  }
}





console.log(myInclude("mohamedammar", "a")) // true
console.log(myInclude("mohamedammar", "amr")) // false
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
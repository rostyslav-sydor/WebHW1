function reverseString1(string){
  return str.split("").reverse().join("");
}

function reverseString2(string){
  var newStr = '';
  for (var i = string.length - 1; i >= 0; i--)
    newStr += string[i];
  return newStr;
}

function reverseString3(string){
  newStr = ''
  for (var i = string.length - 1; i >= 0; newStr += string[i--]) { }
  return newStr;
}


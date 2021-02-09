// Main function
function accum(s) {
  let result = [];
  for (let i in s) {
    result.push(format(s[i], i));
  }
  return result.join("-");
}

// Healper function
function format(char, index) {
  let str = '';

  str += char.toUpperCase();
  for (let j = 0; j < index; j++) {
    str += char.toLowerCase();
  }
  
  return str;
}

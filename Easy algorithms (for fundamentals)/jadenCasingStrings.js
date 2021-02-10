function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};
function jadenCase(str) {
  str = str.split(" ");
  let resultStr = []; 
  for (let elem of str) {
    elem = capitalize(elem);
    resultStr.push(elem);
  }
  return resultStr.join(" ");
};

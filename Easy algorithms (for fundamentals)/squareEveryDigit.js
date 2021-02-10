function squareDigits(num){
  let numStr = num.toString();
  let resultNum = "";
  for (let digit of numStr) {
    resultNum += (Number(digit) * Number(digit)).toString();
  }
  resultNum = Number(resultNum);
  return resultNum;
}

function XO(str) {
  str = str.toLowerCase();
  let exes = ohs = 0;
  for (let char of str) {
    if (char === 'x') {exes++;}
    if (char === 'o') {ohs++;}
  }
  return exes === ohs;
}

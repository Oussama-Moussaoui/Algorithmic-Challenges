function getMiddle(str) {
  let midIndex = Math.round(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(midIndex - 1, midIndex + 1);
  } else {
    return str[midIndex - 1];
  }
}

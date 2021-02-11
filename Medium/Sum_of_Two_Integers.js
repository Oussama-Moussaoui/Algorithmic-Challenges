var getSum = function(a, b) {
    let sum = a ^ b;
    let carry = a & b;
    switch(carry) {
      case 0:
        return sum;
        break;
      default:
        carry = carry << 1;
        return getSum(sum, carry);
    }
};

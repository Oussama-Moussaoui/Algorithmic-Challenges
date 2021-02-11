var xorOperation = function(n, start) {
    let nums = [];
    let result;
    for (let i = 0; i < n; i++) {
        nums.push(start + 2*i);
        switch (i) {
            case 0:
                result = nums[0]; break;
            default:
                result = result ^ nums[i];
        }
    }
    return result;
};

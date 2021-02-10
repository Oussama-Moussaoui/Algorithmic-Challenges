var runningSum = function(nums) {
    let sumNums = [];
    for (let i = 0; i < nums.length; i++) {
        let sumNum = 0;
        for (let j = 0; j <= i; j++) {
            sumNum += nums[j];
        }
        sumNums.push(sumNum);
    }
    return sumNums;
};

var maxSubArray = function(nums) {
    let sum=0;
    let max=-10001;
    
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
        if(max<sum)
            max=sum
        if(sum<0)
            sum=0;
    }

    return max

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
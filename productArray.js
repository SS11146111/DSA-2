var productExceptSelf = function(nums) {
    
    let prefix = [];
    let suffix = [];
    let answer = [];

    prefix[0] = 1;
    suffix[nums.length-1] = 1;
   
    for(let i =1; i<nums.length; i++)
    {
        prefix[i] = prefix[i-1]*nums[i-1];
    }
    
    for(let i=nums.length-2; i>=0; i--)
    {
        suffix[i] = suffix[i+1]*nums[i+1];
    }

    for(let i=0;i<nums.length;i++)
    {
        answer.push(prefix[i]*suffix[i])
    }
    
    return answer;

};

const result = productExceptSelf([-1,1,0,-3,3])
console.log(result)
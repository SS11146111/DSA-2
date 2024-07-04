var sortColors = function(nums) {

    let zeros=0;
    let ones=0;
    let twos=nums.length-1
    let temp;

    while(ones<=twos)
    {
        
        if(nums[ones] == 0)
        {
            temp = nums[ones];
            nums[ones] = nums[zeros];
            nums[zeros] = temp;
            zeros++;
            ones++;

        }

        else if(nums[ones] == 2)
        {
            temp = nums[ones];
            nums[ones] = nums[twos];
            nums[twos] = temp;
            twos--;
        }

        else
        {
            ones++;
        }
        

    }

    console.log(nums)
};
sortColors([1,2,0])
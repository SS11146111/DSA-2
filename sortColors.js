var sortColors = function(nums) {

    let l = 0
    let temp;
    let r = nums.length-1

    for(let i=0; i<r;)
    {
        if(nums[i]==2)
        {
            temp = nums[i];
            nums[i] = nums[r];
            nums[r] = temp;
            r--;
            i++;
            console.log(nums);
            console.log(r);
        }
    }

};
sortColors([2,0,2,1,1,0])
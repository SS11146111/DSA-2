var threeSum = function(nums) {
    let n = nums.length
     let result = []
     for(let i=0;i<n;i++)
         {
             let swapped = false;
     
             for(let j=0;j<n-i-1;j++)
                 {
                     if(nums[j]>nums[j+1])
                         {
                             temp = nums[j];
                             nums[j] = nums[j+1];
                             nums[j+1] = temp;
                             swapped = true;
                         }
                 }
             if(swapped == false)
                 break;
         }
 
     for(let i=0; i<n-2; i++)
         {
             if (i > 0 && nums[i] === nums[i - 1]) {
                 continue;
             }
             let j = i+1;
             let k=n-1;
             while(j<k)
                 {
                     let x = nums[i]+nums[j]+nums[k];
                     if(x<0)
                         j++
                     else if(x>0)
                         k--
                     else
                     {
                         result.push([nums[i],nums[j],nums[k]])
                         j++;
                         k--;
                         while (j < k && nums[j] == nums[j - 1]) 
                         {
                             j++;
                         }
                         while (j < k && nums[k] === nums[k + 1]) 
                         {
                             k++;
                         }
 
                     }
                 }
         }
    
     return result
 };

const result = threeSum([-2,0,0,2,2])
console.log(result)
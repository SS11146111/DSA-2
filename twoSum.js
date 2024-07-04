var twoSum = function(nums, target) {
  
  let visited = new Map();
  let pair = [];

  for (let i=0; i<nums.length; i++)
  {
      if (visited.has(target-nums[i])) 
      {
          pair[0] = visited.get(target-nums[i]);
          pair[1] = i;
          return pair;
      }
      visited.set(nums[i],i);
  }
};
const result = twoSum([3,2,4],6)
console.log(result)
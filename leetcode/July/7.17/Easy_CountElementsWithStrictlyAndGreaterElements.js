/**
 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
    const min = Math.min(...nums);
      const max = Math.max(...nums);
      let minNum=0;
      let maxNum=0;
      if(min==max){
          return 0
      }
      for(let i=0;i<nums.length ;i++){
          if(nums[i]===min)minNum++;
          if(nums[i]===max)maxNum++;
      }
      return nums.length-minNum-maxNum
  };
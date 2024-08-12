export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let [left, right] = [i + 1, nums.length - 1];

    while (left < right) {
      const threeSum = nums[i] + nums[left] + nums[right];

      if (threeSum > 0) right--;
      else if (threeSum < 0) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }

  return res;
}

const result = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(result);

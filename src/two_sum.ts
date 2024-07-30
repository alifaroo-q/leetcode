export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (current + nums[j] === target) return [i, j];
    }
  }

  return [];
}

const result = twoSum([2, 7, 11, 15], 18);

console.log(result);

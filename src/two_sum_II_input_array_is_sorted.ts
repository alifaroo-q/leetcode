export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff) + 1, i + 1];
    map.set(nums[i], i);
  }

  return [];
}

const result = twoSum([2, 7, 11, 15], 18);

console.log(result);

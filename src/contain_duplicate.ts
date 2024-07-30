export function containsDuplicate(nums: number[]): boolean {
  const map: { [index: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) return true;
    map[nums[i]] = nums[i];
  }

  return false;
}

const result = containsDuplicate([1, 2, 3, 1]);

console.log(result);

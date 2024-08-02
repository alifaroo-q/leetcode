export function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
}

const result = longestConsecutive([100, 4, 200, 1, 3, 2]);

console.log(result);

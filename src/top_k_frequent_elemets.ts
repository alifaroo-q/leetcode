export function topKFrequent(nums: number[], k: number): number[] {
  const mp = new Map<number, number>();

  for (let num of nums) {
    if (mp.has(num)) {
      mp.set(num, mp.get(num)! + 1);
    } else {
      mp.set(num, 1);
    }
  }

  return Array.from(mp.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((val) => val[0]);
}

const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);

console.log(result);

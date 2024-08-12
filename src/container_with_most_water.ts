export function maxArea(height: number[]): number {
  let [left, right] = [0, height.length - 1];
  let mArea = 0;

  while (left < right) {
    const cArea = (right - left) * Math.min(height[left], height[right]);
    mArea = Math.max(cArea, mArea);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return mArea;
}

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log(result);

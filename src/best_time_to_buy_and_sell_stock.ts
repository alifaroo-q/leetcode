export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let [left, right] = [0, 1];

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else left = right;
    right++;
  }

  return maxProfit;
}

const result = maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]);

console.log(result);

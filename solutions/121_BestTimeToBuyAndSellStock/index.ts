// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Time complexity: O(n)
// Space complexity: O(1)
export function maxProfit(prices: number[]): number {
  let curMin: number = Infinity;
  let profit: number = 0;
  for (const n of prices) {
    profit = Math.max(profit, n - curMin);
    curMin = Math.min(curMin, n);
  }
  return profit;
}

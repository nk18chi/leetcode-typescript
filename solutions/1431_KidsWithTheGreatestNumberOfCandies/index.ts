// 1431_KidsWithTheGreatestNumberOfCandies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// Time complexity: O(n)
// Space complexity: O(1)
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const _max = Math.max(...candies);
  return candies.map((candy) => _max <= candy + extraCandies);
}

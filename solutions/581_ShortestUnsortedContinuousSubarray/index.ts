// 581. Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

// Time complexity: O(nlogn)
// Space complexity: O(n)
export function findUnsortedSubarray(nums: number[]): number {
  const ans: number[] = [...nums].sort((a, b) => a - b);
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left < right) {
    if (nums[left] !== ans[left] && nums[right] !== ans[right]) {
      break;
    }
    if (nums[left] === ans[left]) {
      left++;
    }
    if (nums[right] === ans[right]) {
      right--;
    }
  }

  return left < right ? right - left + 1 : 0;
}

// copy the array and then it will be sorted by ascending.
// declare two pointers that start from the first element and the last element
// check if the number at same index of those arrays are equal. if so, move next elements until two pointets are at the same position
// return right pointer - left pointer + 1 if right is greater than left. othewise return 0

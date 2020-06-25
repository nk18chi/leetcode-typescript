// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

// Floyd's cycle detection
// fast pointer move two, slow pointer move one
// fast: 1->2->3->4->5->7->3->4
// slow: 1->2->3->4
// if both are at the same poisition, slow position change to 0 and fast move one
// fast: 5->7->3
// slow: 1->2->3
// return 3

// Time complexity: O(n)
// Space complexity: O(1)
export function findDuplicate(nums: number[]): number {
  let fast: number = nums[nums[0]];
  let slow: number = nums[0];
  while (fast !== slow) {
    fast = nums[nums[fast]];
    slow = nums[slow];
  }
  slow = 0;
  while (fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
}

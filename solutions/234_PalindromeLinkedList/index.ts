// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/

import { ListNode } from "../../data_structure/listNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function isPalindrome(head: ListNode | null): boolean {
  const arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let left: number = 0;
  let right: number = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// convert the given linked list into the array
// by using two pointer, check if the array is palindrome or not
// the left pointer starts from zero indez and moce right by one step, the right pointer starts from the last index and move left by one
// proceed this until left's index is graeter than right's

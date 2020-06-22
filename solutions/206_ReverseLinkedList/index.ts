// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

import { ListNode } from "../../data_structure/listNode";

// iteratively
// Time complexity: O(n)
// Space complexity: O(1)
export function reverseList(head: ListNode | null): ListNode | null {
  let a: ListNode | null = null;
  let b: ListNode | null = head;
  while (b !== null) {
    const tmp: ListNode | null = b.next;
    b.next = a;
    [a, b] = [b, tmp];
  }
  return a;
}

// recursively
// Time complexity: O(n)
// Space complexity: O(n)
export function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let node: ListNode | null = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return node;
}

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

import { ListNode } from "../../data_structure/listNode";

// Time complexity: O(mn)
// Space complexity: O(1)
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res: ListNode = new ListNode(0);
  let cur: ListNode = res;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2!.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2!.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return res.next;
}

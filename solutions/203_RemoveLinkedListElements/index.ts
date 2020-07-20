// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/

import { ListNode } from "../../data_structure/listNode";

// Time complexity: O(n)
// Space complexity: O(1)
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const res: ListNode = new ListNode(0);
  let cur: ListNode = res;
  while (head) {
    if (head.val !== val) {
      cur.next = head;
      cur = cur.next;
    } else {
      cur.next = null;
    }
    head = head.next;
  }

  return res.next;
}

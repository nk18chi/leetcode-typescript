export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createListNode(arr: number[]): ListNode | null {
  const l = arr.length;
  if (l === 0 || arr[0] === null) return null;

  const result = new ListNode(arr[0]);
  let head = result;
  for (const n of arr.slice(1)) {
    head.next = new ListNode(n);
    head = head.next;
  }
  return result;
}

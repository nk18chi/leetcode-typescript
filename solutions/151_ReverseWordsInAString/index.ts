// 151. Reverse Words in a String
// https://leetcode.com/problems/queue-reconstruction-by-height/

// Time complexity: O(nlogn)
// Space complexity: O(1)
export function reconstructQueue(people: number[][]): number[][] {
  people.sort(([h1, k1], [h2, k2]) => h2 - h1 || k1 - k2);
  const queue: number[][] = [];
  for (const p of people) {
    queue.splice(p[1], 0, p);
  }
  return queue;
}

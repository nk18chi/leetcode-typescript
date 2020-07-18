// 210. Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/

// Time complexity: O(V+E)
// Space complexity: O(V+E)
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const indegree: { [key: number]: number } = {};
  const nextMap: { [key: number]: number[] } = {};
  for (let i = 0; i < numCourses; i++) {
    indegree[i] = 0;
    nextMap[i] = [];
  }
  for (const [i, j] of prerequisites) {
    indegree[i] = indegree[i] || 0;
    indegree[i]++;
    nextMap[j] = nextMap[j] || [];
    nextMap[j].push(i);
  }

  const queue: number[] = [];
  const res: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i]) continue;
    queue.push(i);
  }

  while (queue.length > 0) {
    const n = queue.shift()!;
    res.push(n);
    if (!nextMap[n]) continue;
    for (const nxt of nextMap[n]) {
      indegree[nxt]--;
      if (indegree[nxt] === 0) {
        queue.push(nxt);
      }
    }
  }
  return res.length === numCourses ? res : [];
}

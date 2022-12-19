// 721. Accounts Merge
// https://leetcode.com/problems/accounts-merge/description/

// Time complexity: O(MNlogMN)
// Space complexity: O(MN)
export function accountsMerge(accounts: string[][]): string[][] {
  const names: { [key: string]: string } = {};
  const connections: { [key: string]: Set<string> } = {};
  for (const account of accounts) {
    for (let i = 1; i < account.length; i++) {
      names[account[i]] = account[0];
      if (!connections[account[1]]) connections[account[1]] = new Set();
      if (!connections[account[i]]) connections[account[i]] = new Set();
      connections[account[1]].add(account[i]);
      connections[account[i]].add(account[1]);
    }
  }
  const seen: Set<string> = new Set();
  let index = -1;
  let res: string[][] = [];
  const dfs = (email: string) => {
    if (seen.has(email)) return;
    seen.add(email);
    while (res.length < index + 1) res.push([]);
    res[index].push(email);
    for (const nxt of connections[email]) {
      dfs(nxt);
    }
  };
  Object.keys(connections).forEach((key) => {
    if (!seen.has(key)) index += 1;
    dfs(key);
  });
  res = res.map((r) => {
    const arr = [names[r[0]]];
    arr.push(...r.sort());
    return arr;
  });
  return res;
}

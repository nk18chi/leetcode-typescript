// 211. Add and Search Word - Data structure design
// https://leetcode.com/problems/add-and-search-word-data-structure-design/

import { TrieNode } from "../../data_structure/trieNode";

// Time complexity: O(26(m) * n)
// Space complexity: O(m * n)
export class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur: TrieNode = this.root;
    for (const w of word) {
      if (!(w in cur.children)) {
        cur.children[w] = new TrieNode();
      }
      cur = cur.children[w];
    }
    cur.isEnd = true;
  }

  search(word: string, cur: TrieNode = this.root): boolean {
    if (word.length === 0) return cur.isEnd;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === ".") {
        for (const child in cur.children) {
          if (this.search(word.slice(i + 1), cur.children[child])) return true;
        }
      } else {
        if (word[i] in cur.children) {
          return this.search(word.slice(i + 1), cur.children[word[i]]);
        }
      }
      return false;
    }
    return false;
  }
}

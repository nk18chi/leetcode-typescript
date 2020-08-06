export class TrieNode {
  children: { [key: string]: TrieNode };
  isEnd: boolean;
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

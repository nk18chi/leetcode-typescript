import { WordDictionary } from "./index";

const assert = require("assert");

describe("#WordDictionary", () => {
  it(`test1`, () => {
    const wd = new WordDictionary();
    wd.addWord("bad");
    wd.addWord("dad");
    wd.addWord("mad");
    assert.deepStrictEqual(wd.search("pad"), false);
    assert.deepStrictEqual(wd.search("bad"), true);
    assert.deepStrictEqual(wd.search(".ad"), true);
    assert.deepStrictEqual(wd.search("b.."), true);
  });
});

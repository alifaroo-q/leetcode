function groupAnagrams(strs: string[]): string[][] {
  const mp = new Map<string, string[]>();

  for (let str of strs) {
    let word = str;
    word = word.split("").sort().join("");
    if (mp.has(word)) {
      mp.get(word)?.push(str);
    } else {
      mp.set(word, [str]);
    }
  }

  return Array.from(mp.values());
}

const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

console.log(result)
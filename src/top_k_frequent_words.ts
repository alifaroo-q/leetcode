export function topKFrequent(words: string[], k: number): string[] {
  const count = new Map<string, number>();
  const freq = Array.from({ length: words.length + 1 }, (): string[] => []);

  for (const word of words) {
    if (count.has(word)) count.set(word, count.get(word)! + 1);
    else count.set(word, 1);
  }

  for (const item of count) {
    freq[item[1]].push(item[0]);
  }

  let result = [];

  for (let i = freq.length - 1; i > 0; i--) {
    if (freq[i].length > 0) result.push(freq[i].sort());
  }

  return result.flat().slice(0, k);
}

const result = topKFrequent(
  ["i", "love", "leetcode", "i", "love", "coding"],
  2
);

console.log(result);

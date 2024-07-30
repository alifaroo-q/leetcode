export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}

const result = isAnagram("anagram", "nagaram");

console.log(result);

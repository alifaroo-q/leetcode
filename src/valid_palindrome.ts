export function isPalindrome(s: string): boolean {
  const isAlphaNum = (s: string): boolean => {
    if (s >= "a" && s <= "z") return true;
    if (s >= "0" && s <= "9") return true;
    return false;
  };

  let left = 0;
  let right = s.length - 1;
  s = s.toLowerCase();

  while (left <= right) {
    if (!isAlphaNum(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNum(s[right])) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) return false;
    else {
      left++;
      right--;
    }
  }

  return true;
}
const result = isPalindrome("pop");

console.log(result);

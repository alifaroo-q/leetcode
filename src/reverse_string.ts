export function reverse_string(str: string): string {
  return str.split("").reverse().join("");
}

const result = reverse_string("ali");

console.log(result);
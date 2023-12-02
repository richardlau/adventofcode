import { readFileSync } from 'node:fs';

const digit = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
const value = {
  '1': 1, 'one': 1,
  '2': 2, 'two': 2,
  '3': 3, 'three': 3,
  '4': 4, 'four': 4,
  '5': 5, 'five': 5,
  '6': 6, 'six': 6,
  '7': 7, 'seven': 7,
  '8': 8, 'eight': 8,
  '9': 9, 'nine': 9,
}
const input = readFileSync('input1.txt', { encoding: 'utf8' });
let sum = 0;
for (const line of input.trim().split('\n')) {
  const digits = [...line.matchAll(digit)];
  sum += value[digits[0][0]] * 10 + value[digits[digits.length-1][0]];
}
console.log(sum);

import { readFileSync } from 'node:fs';

const firstDigit = /^[^\d]*(\d)/;
const lastDigit = /(\d)[^\d]*$/;
const input = readFileSync('input1.txt', { encoding: 'utf8' });
let sum = 0;
for (const line of input.trim().split('\n')) {
  const first = firstDigit.exec(line);
  const second = lastDigit.exec(line);
  sum += Number(`${first[1]}${second[1]}`);
}
console.log(sum);

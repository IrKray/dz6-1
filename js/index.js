let f1 = 1;
let f2 = 1;
let n = parseFloat(prompt('Enter n:'));
for (let i = 3; i <= n; i++) {
  let fNext = f1 + f2;
  f1 = f2;
  f2 = fNext;
}
alert(f2);
  
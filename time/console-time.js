
function counter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
console.time('duration of counter');
counter(5);
console.timeEnd('duration of counter')

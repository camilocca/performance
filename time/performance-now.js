const performance = require('perf_hooks');


function counter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
let begin = performance.performance.now();
counter(5);
let end = performance.performance.now();

let duration = end - begin;

console.log("this code is running in " + duration + "ms");

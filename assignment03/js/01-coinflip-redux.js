let coinFlip;
let n;
n = parseInt(prompt(" Enter the number of iterations"));
for (i = 0; i < n; i++) {
  let coinFlip = Math.round(Math.random());
  //window.console.log(coinFlip);
  if (coinFlip === 0) {
    window.console.log("Heads");
  } else  {
    window.console.log("Tails");
  }
}

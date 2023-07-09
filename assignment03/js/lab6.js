let investment;
let rate;
let years = 0;
let futureValue;

// do {
//   investment = parseFloat(prompt("Enter amount as XXXX.xx"));
//   alert("Investment should be a number");

// } while (isNaN(investment));

// rate = parseFloat(prompt("Enter rate of interest per annum in %"));

do {
  investment = parseFloat(prompt("Enter amount as XXXX.xx"));
  if (!isNaN(investment)) {
    break;
  } else {
    alert("Investment should be a number");
    continue;
  }
} while (isNaN(investment));

do {
  rate = parseFloat(prompt("Enter rate of interest per annum in %"));
  if (rate < 0 && rate > 10) {
    alert("Rate should be between 0 and 10");
    continue;
  } else {
    break;
  }
} while (rate > 0 && rate <= 10);

do {
  years = parseFloat(prompt("Enter number of years"));
  if (years > 0 && years < 30) {
    break;
  } else alert("Years should be between 1 and 29");
  //  continue;
} while (years > 0 && years < 30);

futureValue = investment;
for (let i = 0; i < years; i++) {
  futureValue += futureValue * (rate / 100);
}

document.write(`Future Value: ${futureValue.toFixed()} <br>`);
document.write(`Investment: ${investment.toFixed()} <br>`);
document.write(`Rate: ${rate.toFixed()}% <br>`);
document.write(`Years: ${years.toFixed()} <br>`);

let miles;
let gallons;
let mps;
let again = "y";
do {
  miles = parseFloat(prompt("Enter miles"));
  gallons = parseFloat(prompt("Enter gallons"));
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mps = miles / gallons;
    alert(mps.toFixed());
  } else {
    window.alert("One of both entries are invalid");
  }

  do {
    again = prompt("Repeat entries? (y or n)", "y");
    if (again !== "y" && again !== "n") {
      alert("Please  Enter valid entry");
      continue;
    }
  } while (again !== "y" && again !== "n");
} while (again === "y");

window.alert("You have existed from this applications");

let n = parseInt(prompt("Enter no for countdown"));

if(isNaN(n)){
    alert("Invalid input. Please enter a valid number."); 
}
for( let i = n; i >=0 ; i--){
    window.document.write(`${i} <br>`)
}


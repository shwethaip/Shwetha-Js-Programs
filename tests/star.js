let rows = 5;
for (let i = 1; i <= rows; i++) {
    let rowContent = '*';
   
    for (let j = 1; j <= rows-i ; j++) {
        rowContent += '*';
    }
 
    console.log(rowContent); // Printed 
}
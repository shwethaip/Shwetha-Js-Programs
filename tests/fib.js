// Fibonacci series
function fib(n) {
    // Validation
    if (!Number.isInteger(n) || n <= 0) {
        console.log("Invalid input. Enter a positive integer");\
        console.log("-".repeat(25));
        return;
    }
    // Initial values
    let a = 0;
    let b = 1;
    let sum = 0;

    console.log(a);
    sum += a;

    if (n > 1) {
        console.log(b);
        sum += b;
    }

    // Generate the remaining Fibonacci numbers
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        console.log(temp);

        sum += temp;
        a = b;
        b = temp;
    }

    // Print the nth Fibonacci number and sum
    let nth = (n === 1) ? a : b;

    console.log(`${n}th Fibonacci number is: ${nth}`);
    console.log("Sum: " + sum);
    console.log("-".repeat(25));
}

fib(0);
fib(1);
fib(2);
fib(3);
fib(4);

//Recursion practice problems

// 1 - Power
/* Write a function called power which accepts a base and an exponent. The function should return the
power of the bases to the exponent. This function should mimic the functionality of Math.pow() - do 
not worry about negative bases and exponents. 
Ex: power(2,0) -> 1
Ex: power(2,2) -> 4
Ex: power(2,4) -> 16
*/

function power(base, exp){
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp-1);
}

// 2 - Factorial
/* Write a function factorial which accepts a number and returns the factorial of that number. A
factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is
equal to 24, because 4*3*2*1 equals 24. Factorial zero is always 1.
Ex: factorial(1) -> 1
Ex: factorial(2) -> 2
Ex: factorial(4) -> 24
Ex: factorial(7) -> 5040
*/

function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num-1);
}


// 3 - productOfArray
/* Write a function called productOfArray which takes in an array of numbers and returns the product 
of them all. 
Ex: productOfArray([1,2,3]) -> 6
Ex: productOfArray([1,2,3,10]) -> 60
*/

function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// 4 - recursiveRange
/* Write a function called recursiveRange which accepts a number and adds up all the number from 0
to the number passed to the function
Ex: recursiveRange(6) -> 21
Ex: recursiveRange(10) -> 55
*/

function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num -1);
}

//5 - fibonacci
/* Write a function called fib which accepts a number and returns the nth number in the Fibonacci
sequence. Recall that the Fibonacci sequence is the sequence of whole numbers which starts with 1 and 1,
and where every number thereafter is equal to the sum of the previous two numbers.
Ex: fib(4) -> 3
Ex: fib(10) -> 55
Ex: fib(28) -> 317811
Ex: fib(35) -> 9227465
*/

function fib(n){
    if(n <= 2){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

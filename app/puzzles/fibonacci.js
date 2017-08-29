/**
 * Fibonacci sequence is a series of numbers where each one is the addition of previous 2 numbers.
 * 1,2,3,5,8,13,21,34,55,89,144 ...
 *
 * write a function to return the sum of all even numbers up to given fibonacci number.
 * eg.
 *
 * fibonacciSum(10) = 2 + 8 = 10
 */

 var FibonacciSum = function(x) {
   var a = 1, b = 2, c = 3, sum =0;

   while(b < x){
     // console.log(a + "," + b + "," + c);
     if(b % 2 == 0){ sum += b; }
     a = b;
     b = c;
     c = a + b;
   }

   return sum;
 }

 export default FibonacciSum;

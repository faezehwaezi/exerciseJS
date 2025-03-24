// 1. FizzBuzz (Advanced Version) 

// Write a function `fizzBuzz(n)` that prints numbers from `1` to `n`, but:  
// - If the number is divisible by **3**, print `"Fizz"`.  
// - If the number is divisible by **5**, print `"Buzz"`.  
// - If the number is divisible by **both 3 and 5**, print `"FizzBuzz"`.  
// - Otherwise, print the number.  

// js
// function fizzBuzz(n) {
//    // Your code here
// }
// fizzBuzz(20);
function fizzBuzz(n){
    let result = "";
    for(let i = 1 ; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result = "fizzBuzz";
        }
        else if(i % 3 === 0){
            result = "fizz";
        }
        else if (i % 5 === 0){
            result = "Buzz";
        }
    }
    return result;
}
console.log(fizzBuzz(5));




// 2. Custom Map Function 
// Create a function `myMap` that mimics the behavior of JavaScript's `.map()` method.  
// It should take an array and a callback function as arguments and return a **new array** with the transformed values.

// js
// function myMap(array, callback) {
//    // Your code here
// }

// const numbers = [1, 2, 3, 4, 5];
// const squared = myMap(numbers, num => num * num);
// console.log(squared); // Output: [1, 4, 9, 16, 25]

function myMap(array) {
    let newarray = array.map((item) => {
        return item * item ;
    })
    return newarray;
}

console.log(myMap([1, 2, 3, 4, 5]));



// 3. Palindrome Checker  
// Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forward and backward).  
// Ignore spaces and capitalization.  

// function isPalindrome(str) {
//    // Your code here
// }

// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("hello"));   // false

function isPalindrome(str){
    
    str = str.toLowerCase();
    let newstr = str.split("").reverse().join("");
    return newstr === str ? true : false ;

}
console.log(isPalindrome("Wow")) ;
console.log(isPalindrome("hello")) ;

// 4. Debounce Function 
// Implement a debounce function. It should delay the execution of a function until after a specified time has passed.  

// js
// function debounce(func, delay) {
//     // Your code here
// }

// const logMessage = () => console.log("User stopped typing...");
// const debouncedFunction = debounce(logMessage, 2000);

// // Call multiple times quickly
// debouncedFunction();
// debouncedFunction();
// debouncedFunction(); // Only this one should execute after 2s




// 5. Deep Clone an Object
// Write a function `deepClone(obj)` that creates a deep copy of a nested object **without using `JSON.parse(JSON.stringify(obj))`**.  

// function deepClone(obj) {
//    // Your code here
// }

// const original = { a: 1, b: { c: 2, d: 3 } };
// const copy = deepClone(original);
// copy.b.c = 42;

// console.log(original.b.c); // Should still be 2




// 6. Promise-based Delay Function
// Create a function `delay(ms)` that returns a promise, which resolves after `ms` milliseconds.

// js
// function delay(ms) {
//    // Your code here
// }

// delay(2000).then(() => console.log("Executed after 2 seconds"));
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log("شروع");

delay(2000).then(() => {
    console.log("بعد از 2 ثانیه");
});


// 7. LRU Cache (Least Recently Used Cache) 
// Implement an LRU Cache class with the following methods:  
// - `put(key, value)`: Adds a new key-value pair to the cache. If the cache is full, remove the least recently used key.  
//  `get(key)`: Returns the value for the key if it exists, otherwise `-1`. 


// class LRUCache {
//     constructor(capacity) {
//        // Your code here
//     }
    
//     get(key) {
//         // Your code here
//     }
    
//     put(key, value) {
//         // Your code here
//     }
// }

// const cache = new LRUCache(2);
// cache.put(1, "A");
// cache.put(2, "B");
// console.log(cache.get(1)); // "A"
// cache.put(3, "C"); // Removes key 2
// console.log(cache.get(2)); // -1



// 8. Throttle Function
// Write a function `throttle(func, limit)` that ensures a function is called at most **once every X milliseconds**.

// js
// function throttle(func, limit) {
//    // Your code here
// }

// const expensiveCall = () => console.log("Throttled Call");
// const throttledFunction = throttle(expensiveCall, 2000);

// throttledFunction();
// throttledFunction();
// throttledFunction(); // Only the first one should execute immediately




//************************************************** */

// const student = {
//     name : "mohsen",
//     age : 24,
//     courses: [course1 , "css" , "js"],
//     address : {
//         city : "Tehran",
//         country : "IRAN"
//     }
// }
// console.log(student)

function student1 (name,age,courses,city,country){
    return{
    nmae:name ,
    age : age ,
    courses : courses,
    address:{
        city: city ,
        country : country
    }
    };
    
}
const course1 = ["html","js"]
const student2 = student1("faezeh",25,[course1],"mashhad","iran");
console.log(student2);


//function odd and even

function oddeven (array){

    let evenarray =[];
    let oddarray =[];

    for(let i of array){
        if(i % 2 == 0){
            evenarray.push(i);
        }
        else{
           oddarray.push(i);
        }
    }
    return [evenarray , oddarray];
}
console.log(oddeven([3,5,2,12,50,82,31,14]));
console.log(oddeven([2,4,6,8,10]));







//sum = ()=>{}
// console.log(sum(4,5))
//FUNCTION -
//FUNCTION *
//calculator

function calculator(num1 , num2 , operator){
    let result;
    if (operator === "*"){
        result  = num1 * num2;
    }
    else if ( operator === "+"){
        result =num1 + num2;
    }
    else if ( operator === "/"){
        result = num1 / num2;
    }
    else if ( operator === "-"){
        result = num1 - num2;
    }
    else{
        console.log("invalid operator")
    }
    return result;
}

console.log(calculator(-3,2,"-"));


//  ********* change into function from ex exercises ***************
// Write a program that negates a boolean variable and prints the result.

// answer
// let late = true
// console.log(late)

// if(!late){
//     console.log("no it is not late")
// }else(console.log("it is late"))


// answer with function
function chanenegat(boolean){
  
    return !boolean ;
}
console.log(chanenegat(false)) ;




// Exercise 1: Logical Operators
// Write a program that checks if a number is between 10 and 50 (inclusive).
// Write a program that checks if a number is less than 10 or greater than 50.

// let num = window.prompt("enter your number")
// console.log(typeof num)
// if ( num>=10 && num<=50){
//     console.log("number is between 10 and 50")
// }else if(num<10 || num>50) {
//     console.log(num ,"num")
// }else(console.log("invali num"))


// answer with function
function check(num){

    if (num>=10 && num<=50)
        return "number is between 10 and 50" ;
    if (num<10 || num>50)
        return "num is ...." ;
    else return "invali num" ;

}
console.log(check(10)) ;
console.log(check(1)) ;
console.log(check("h")) ;
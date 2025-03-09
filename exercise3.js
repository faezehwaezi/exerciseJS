// Exercise 1: Logical Operators
// Write a program that checks if a number is between 10 and 50 (inclusive).
// Write a program that checks if a number is less than 10 or greater than 50.
let num = window.prompt("enter your number")
if ( num>=10 && num<=50){
    console.log("number is between 10 and 50")
}else if(num<10 || num>50) {
    console.log(num ,"num")
}else(console.log("invali num"))


// Write a program that negates a boolean variable and prints the result.
let late = true
console.log(late)

if(!late){
    console.log("no it is not late")
}else(console.log("it is late"))



// Exercise 2: Comparison Operators
// Declare a variable x = "10". Compare it with 10 using == and ===, then log the results.
let x = "10"
if(x == 10){
    console.log("==  is true")
}else if(x === 10){
    console.log("=== is true")
}
// Check if 20 is not equal to "20" using != and !==.
let y = 20
if(y != "20"){
    console.log("!= true ")
}else if(y !== "20"){
    console.log("!== true")
}else{
    console.log("nooooooooo")
}



// Exercise 3: Mathematical Operators
// Write a program that takes a number and:
// number = number * 5
// Multiplies it by 5
// Adds 10
// Divides by 2
// Subtracts 3
// Logs the final result
let number = window.prompt(console.log("enter number plz"))
number = number * 5;
number = number + 10;
number = number / 2;
number = number - 3;
console.log("number is : ",number)





// Declare a variable num = 10. Using shorthand operators (+=, -=, *=, /=, %=, **=), perform the following operations and log the result each time:
// Add 5
// Multiply by 3
// Divide by 2
// Find the remainder when divided by 4
// Raise to the power of 2
let number2 = window.prompt(console.log("enter number2 plz"))
number2 += 5;
number2 *= 3;
number2 /= 2;
number2 %= 4;
number2 **= 2;
console.log("number2 is",number2)


// Exercise 4: Operator Precedence
// What will be the output of the following expressions? Predict the result before running them:

console.log(res = 5 + 2 * 3)
11

console.log(res = (5 + 2) * 3) ;
21
console.log(res = 10 / 2 + 3 * 4 - 1);
17
console.log(res = 2 ** 3 + 4 / 2)
10
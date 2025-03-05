// 1. If Condition: input = 10 output = pos , input=0 output = zero
// Write a program that checks if a given number is positive, negative, or zero.
const i = -11;
if(i > 0){
    console.log("positive");
}
else if (i < 0){
    console.log("negative")

}else{
    console.log("zero")
}

// 2. While Loop:
// Write a program that prints numbers from 1 to 10 using a while loop.
let j = 1;
while(j <= 10){
    console.log(j)
    j++
}

// 3. Do-While Loop:
// Write a program that prints numbers from 10 to 1 using a do-while loop.
let k = 10
do{
    console.log(k)
    k-- ;
}
while(k>=1)

// 4. For Loop (Nested):
// Write a program that prints the following pattern using nested for loops:
// *
// **
// ***
// ****
// *****
for( let m=1 ; m <= 1 ; m++){

    for(let n=0 ; n<5 ; n++){
        console.log("*",n)
    }
}

// 5. Even & Odd Numbers:
// Write a program that prints even numbers from 1 to 20 and odd numbers from 1 to 20.
for(let b =1 ; b <= 20 ; b++ ){
    if(b % 2 == 0){
        console.log(b)
    }
}
for(let c =1 ; c <= 20 ; c++ ){
    if(c % 2 == 1){
        console.log(c)
    }
} 



// 6. Loop Through an Array:
// Write a program that takes an array ["apple", "banana", "cherry"] and prints each element using a for loop.
const fruits =["apple", "banana", "cherry"]
for(let item in fruits){
    console.log(fruits[item])
}

// 7. Break & Continue:
// Print numbers from 1 to 10 but stop when the number 5 is reached.
// Print numbers from 1 to 10 but skip number 5.
for(let y = 1 ; y <= 10 ; y++){
    console.log(y)
    if(y == 5){
        break
    }
}


for(let y = 1 ; y <= 10 ; y++){
    if(y == 5){
        continue
    } 
    console.log(y)
}
// 8. For-in & For-of Loops:
// Create an object {name: "Sara", age: 25, city: "Tehran"} and print its properties using a for-in loop.
const obj ={
    name : "sara",
    age : 25 ,
    city : "tehran"
}
for( let properties in obj){
    console.log(properties)
}

// Create an array ["cat", "dog", "rabbit"] and print its elements using a for-of loop.
const array5 =["cat", "dog", "rabbit"]
for( let elements of array5){
    console.log(elements)
}


// 9. String Iteration:
// Write a program that prints each character of "JavaScript" using a for-of loop.
const str = "JavaScript"
for(let ch of str){
    console.log(ch)
}


//[4,2,6,8,2,1,7,6,3,9] ==> a+b = 10 count: 4: (4,6)(8,2)(7,3)(9,1)

// {(())}  true
//{{})}   false
//{}{}()  true
//((())  false

// {()()}
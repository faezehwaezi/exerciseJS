// 1- Find Prime Numbers in an Array
// Given an array of numbers, use a loop to find prime numbers and store them in a new array
// let numbers = [2, 3, 4, 7, 10, 13, 17, 20, 23, 29];

function isPrime(num){
    if(num < 2) {
        return false
    }
    for(let i=2 ; i<=Math.sqrt(num) ; i++){
        if (num % i == 0) return false
    }
    return true
}

let number= [2, 3, 4, 7, 10, 13, 17, 20, 23, 29] 
const prime = number.filter(isPrime)
console.log("prime : "+prime)

console.log("**********************************");

// 2- Replace Even Numbers with "EVEN" and Odd Numbers with "ODD"  
//  Transform an array so that even numbers are replaced with `"EVEN"` and odd numbers with `"ODD"`.  

let numbers = [3, 8, 15, 22, 7, 10, 19];
let numbers2 = numbers.map((item) => {
    return item % 2 === 0 ? "evevn" : "odd" ;
})
console.log(numbers2);

console.log("**********************************");

// 3- Find the Longest Word in an Array
// Given an array of words, find the longest word.  

let words = ["apple", "banana", "strawberry", "kiwi", "watermelon"];
let maxitem = "";
for(let item of words){
     if(item.length > maxitem.length ) {
        maxitem = item;
     }  
}
console.log(maxitem);


// solution with forEach
words.forEach((itemarray)=>{
    let maxitem = "";
    if(itemarray.length > maxitem.length){
        maxitem = itemarray;
    }
})
console.log(maxitem);


// 4- Reverse Each Word in an Array  
// Given an array of words, return a new array where each word is reversed.  
let wordss = ["hello", "world", "JavaScript", "coding"];
let my = [];
let fainal = [];

for(let word of wordss){

    my = word.split("").reverse();
    fainal.push(my.join(""))
}
console.log(fainal);



// 5- Count the Occurrences of Each Letter in a String
// Given a string, count how many times each letter appears.  
let str = "javascript";
str = str.split("");
console.log(str);
let count = 0 ;
for ( let i = 0 ; i < str.length ; i++) {
    
    if (str[i] === str[i+1]){
        count = count +1 ;        
    }
}




// 6-
//  Filter Objects by a Specific Key Value
//  Given an array of people, filter those whose age is greater than 25.
 const people = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 28 },
    { name: "Reza", age: 30 },
    { name: "Nina", age: 24 }
];
let peaple2 = people.filter((info) => {
    
    return info.age > 25 ;
    
})
console.log(peaple2);



// 7-
// let numbers = [2, 4, 5, 7, 8, 4, 9, 10, 5];
// Find the First Duplicate in an Array 
// Find the first repeating number in an array.  


 

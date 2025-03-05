// ### **Exercise: JavaScript Basics**  



// 1. **Create an object** named `student` with the following properties:  
//    - `name`: Your name  
//    - `age`: Your age  
//    - `courses`: An array containing 3 programming languages you're interested in  
//    - `address`: An object with `city` and `country` 
let student = {
    name : "faezeh",
    age : 25 ,
    courses : ["html","css","js"],
    address : {
        city : "mashhad",
        country : "iran"
    }

};
console.log(student);



// 2. **Modify the object:**  
//    - Add a new property `email` to the `student` object 
student.email= "faezeh@gmail.com"
console.log(student); 
//    - Change the `city` value in `address` 
student.address.city = "shiraz" 



// 3. **Array Operations:**  
//    - Create an array `numbers` with values `[10, 20, 30, 40, 50]`  
let myaray = [10,20,30,40,50];
console.log(myaray); 
//    - Add `60` to the end of the array  
myaray.push(60);
console.log(myaray);
//    - Remove the first element from the array  
myaray.shift()
console.log(myaray);
//    - Find the index of `30` 
console.log(myaray.indexOf(30))





// 5. **String Manipulation:**  
//    - Create a string `sentence = "JavaScript is awesome!"`
const str =   "JavaScript is awesome!"
//    - Convert it to uppercase  
console.log(str.toUpperCase())
//    - Find the length of the string  
console.log(str.length)
//    - Replace `"awesome"` with `"powerful"`  
console.log(str.replace("awesome","powerfull"))



// let email1 = "mohsenesarvari1379@gmail.com";
let email1 = "mohsenesarvari1379@gmail.com";
// moh...@gmail.com
console.log(`${email1.substring(0,3)}...${email1.substring(18,28)}`)




// input : 
// const obj1 = {
//     name : "mohsen",
//     lname : "sarvari",
//     age : 20
// }
const obj1 ={
    name : "mohsen",
    lname : "sarvari",
    age : 20
}
console.log(obj1)
// output : 
// const newObj = {
//     mohsen : "name",
//     sarvari : "lname",
//     20 : "age"
// }
let newObj = {};
for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        newObj[obj1[key]] = key;
    }
}

console.log(newObj);
//--------------console.log(`${obj1.value}:${obj1.key}`)
//-------------- const mewobj = obj1.replace(key,value);
//-------------- console.log(mewobj);


// 4. **Loops & Conditions:** 
//      - add [80,60] to numbers 
//    - Loop through `numbers` and print only the even numbers  
//     
//    - Check if `[80,60]` is in the array, and if it is, print `"Found array"`  





// 5. str = mohsen nan  mohsen wedaj  efoijseo  654161  mohsen.
const str8 = mohsen nan  mohsen wedaj  efoijseo  654161  mohsen
// output : mohsen repeated : 3
for
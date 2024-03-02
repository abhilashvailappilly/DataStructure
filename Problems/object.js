// let details = {
//     name:"abhilash",
//     age:20,
//     "key":true,
//     welcome:function (){
//         console.log(this.name)
//     }
// }
// details.place = 'Tpr'
// console.log(details)

const { access } = require("fs");

// delete details.place
// console.log(details)
// console.log(details.welcome)
// details.welcome()

let details2 = {
    name: "abhilash",
    age: 20,
    key: true
};

console.log(Object.values(details2))
console.log(Object.keys(details2))
console.log(Object.entries(details2))

// Big - O 
// insert =0(1)
// remove = o(1)
// access = O(1)
// remove - O(1)
// search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)

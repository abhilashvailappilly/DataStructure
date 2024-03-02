// const { types } = require("util")

const { mainModule } = require("process")

// map is an unordered collection of key-value generateKeyPairSync. 
// Both key and values can be of any data types 
// Maps are iterable ,They can be used with a for of loop

// Map Vs Objects 

// key in objects can be string or special symbols In maps it can be of any typpes
// objects has a prototypes and may contain a few deffault key .Map doesnot contain any keys by default
// Maps are iterable objects are not
// Sixe is defaulty availble for map by using size property
// OObject can store unctions

const map = new Map([['a',1],['b',2]])

map.set('c',3)
map.delete('a')
map.clear()
console.log(map.size)

console.log(map.has('a'))
for(const [key,value] of map){
    console.log(`${key} : ${value}`)
}
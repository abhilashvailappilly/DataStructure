// // Set vs Array

// array can conntain duplicate wheras sets cannnot
// insertion order is maintained but it is not the case with sets
// Searching and delting an elemnt inn the set is faster

const set = new Set([1,2,3])

set.add(4)
set.delete(1)

console.log(set)
console.log(set.size)
set.clear
console.log(set)
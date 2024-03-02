class HashTable {
    constructor() {
        this.table = {}
        this.size = 0
    }
   
    // Time complexity is linerar O(n)
    set(key ){
        this.table[key] = (this.table[key] ?? 0) +1
      
        
    }

  getTable(){
    return this.table
  }
   
}

const hashTable = new HashTable()
hashTable.set(0)
hashTable.set(1)
hashTable.set(4)
hashTable.set(4)
hashTable.set(2)
hashTable.set(1)
hashTable.set(2)
// hashTable.set(3)

let obj = hashTable.getTable()
console.log(obj)
let n = Object.keys(obj).length
console.log("ssadfa",Object.keys(obj).length)
// const maxKey = Object.keys(obj).filter((key) => {
//     console.log(obj[key]);
//     return obj[key] > n/3;
// });

// const maxKey = Object.keys(obj).filter((a)=>{
//     console.log(obj[a])
//     if(obj[a] >= n/3){
//         return a
//     }
// });
// const maxKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

const maxKey = Object.keys(obj).reduce((currentKey, nextKey) => {
    return obj[currentKey] < obj[nextKey] ? currentKey : nextKey;
});
// hashTable.print()
console.log(maxKey)

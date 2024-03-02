class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0;
        for ( let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    // Time complexity is linerar O(n)
    set(key , value){
        const index = this.hash(key)
        // this.table[index] = value
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] =[[key,value]]
        } else{
            const sameKeyItem = bucket.find(item=>item[0] === key)
            // console.log(sameKeyItem)
            if(sameKeyItem){
                sameKeyItem[1] = value
            } else{
                bucket.push([key,value])
            }   
        }
    }

    // Time complexity is linerar O(n)
    get(key){
        const index = this.hash(key)
        // return this.table[index]
        let bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    
    // Time complexity is linerar O(n)
    remove(key){
        const index = this.hash(key);
        //  this.table[index] = undefined
        let bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    print(){
        for(let i =0 ; i < this.table.length ; i++){
          if( this.table[i]){
            console.log(i , " " ,this.table[i])
          }
        }
        
    }
}

const hashTable = new HashTable(50)
hashTable.set("name",'abhilash')
hashTable.set("age",'20')
hashTable.set('place','chemmappilly')
hashTable.set('mane','thrisur')
hashTable.print()
console.log(hashTable.get('name'))
console.log(hashTable.get('mane'))
hashTable.remove('name')
hashTable.set('mane','thriprayar')
hashTable.print()

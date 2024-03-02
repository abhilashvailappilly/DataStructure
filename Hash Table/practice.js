class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size;

    }
    hash(key){
        let total = 0;
        for (let i = 0 ; i <key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        } else{
            const sameKeyItem = bucket.find(item =>item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push[key,value]
            }
        }
    }

    print(){
        console.log(this.table)
        for( let i =0 ;i < this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}

const table = new hashTable(10)
table.set('name','Abhilash')
table.set('Place','chemmappilly')
table.print()
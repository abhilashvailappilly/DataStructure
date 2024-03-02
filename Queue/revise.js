class Stack{
    constructor(){
        this.items = []
        this.count = 0;
    }
    push(element){
        this.items[this.count] = element
        this.count++
        return 

    }
    pop(){
        if(this.size !=0){
            let deletedElement = this.items[this.count-1]
            this.count--
            return deletedElement
        }
    }
    peek(){
        return this.items[this.count-1]
    }
    print(){
        let str =''
        console.log(this.items)
        for( let i =0 ; i<this.count ; i++){
            str += this.items[i]+' '
        }
        return str
    }
}
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.print())
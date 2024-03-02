class Stack{
    constructor(){
        this.value = [];
        this.count =0
    }

    push(element){
        this.value[this.count] = element
        console.log(` ${element} added to ${this.count} position`)
        this.count++
        return 
    }

    pop(){
       if( this.count == 0){
        return undefined 
       } 
       let deleteElement = this.value[this.count-1]
       this.count--
       return deleteElement
    }
    peek(){
        if(this.count == 0){
            return undefined;
        }
        console.log(`Top element is ${this.value[this.count-1]}`)
        return this.value[this.count -1]
    }
    // check stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : "Stack is not empty")
        return this.count == 0
    }
    print(){
        if(this.isEmpty()){
            return 
        }
        let str = ""
        for ( let i =0 ; i <this.count ; i++){
            str += this.value[i] + " "
        }
        return str
    }
    clear(){
        this.value = []
        this.count = 0;
        console.log("Stack cleared")
        return this.value
    }
}

let stack = new Stack()
stack.isEmpty()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

let deleted = stack.pop()
console.log(deleted)
stack.push(10)
stack.peek()
stack.isEmpty()
let st = stack.print()
console.log(st)
stack.clear()
console.log(stack.print())

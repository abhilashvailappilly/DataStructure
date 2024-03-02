class Node {
    constructor(value) {
        this.value = value
        this.next = null 
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail = null;
        this.size =0;
    }
    isEmpty() {
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    prepend(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeFromFront(){
        if(this.isEmpty()){
            console.log("List is empty")
            return null 
        }
        let curr = this.head
        this.head = curr.next
        this.size--;
        return curr.value

    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail= null
        } else{
            let prev = this.head
            while(prev.next !==this.tail){
                prev = prev.next
            }
            prev.next = null
           this.tail = prev
        }
        this.size--
        return curr
    }

insertBeforeAndAfterValue(value,before,after){
    if(this.isEmpty()){
        return null
    }
    let curr = this.head
    let prev = null;
    const node = new Node(before)
    const node2 = new Node(after)

    while(curr!=null && curr.value != value){
        prev = curr
        curr = curr.next
    }
    if(curr===null){
        console.log("No elements found")
        return null 
    }
    //Insert before the value
    if(prev){

        prev.next = node
    }
    if(prev == null){
        this.head =node
    }
    node.next = curr

    // Insert After the value
      node2.next =curr.next
       curr.next =node2
       if(node2.next == null){
        this.tail = node2
       }
    return


    
}
}
const list = new LinkedList()
list.prepend(209)
list.append(206) 
list.append(207) 
list.append(208) 
list.append(209) 
list.append(210) 
list.print()
console.log(list.removeFromFront())
console.log(list.removeFromEnd())
list.print()
list.insertBeforeAndAfterValue(209,99,88)
list.print()
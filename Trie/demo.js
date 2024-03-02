class TrieNode {
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let  node  = this.root
        
        for ( let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd =true
    }
    search(word){
        let node = this.root
        for (let char of word){
            if(!node.children[char]){
                return false 
            }
            node = node.children[char]
        }
        return true
    }
    delete(word){
        this.deleteRecursive(this.root,word,0)
    }
    deleteRecursive(node ,word,index){
        if(!node){
            return node 
        }
        if(index === word.length){
            if(node.isEnd){
                node.isEnd = false;
            }
            if(Object.keys(node.children).length===0){
                node = null
            }
            return node
        }
        node.children[word[index]] = this.deleteRecursive(node.children[word[index]] ,word,index+1)

        if(Object.keys(node.children).length === 0 && !node.isEnd){
            node = null
        }
        return node;
    }
}

// Example usage:
let trie = new Trie();

trie.insert("apple");  
trie.insert("app");
console.log(trie.search("apple"));   // Output: true
// console.log(trie.root.children);   // Output: true
trie.delete("apple");
console.log(trie.search("apple"));   // Output: false
console.log(trie.search("app"));   // Output: false
class TrieNode{
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
        let node = this.root
        for(let char of word){
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root

        for (let char of word){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    delete(word){
        this.deleteRecursive(this.root,word,0)
    }
    deleteRecursive(node, word, index) {
        if (!node) {
            return node;
        }

        if (index === word.length) {
            // If the end of the word is reached, mark isEndOfWord as false
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }

            // If the current node has no other children, it can be safely deleted
            if (Object.keys(node.children).length === 0) {
                node = null;
            }

            return node;
        }

        // Recursively delete the next character in the word
        node.children[word[index]] = this.deleteRecursive(node.children[word[index]], word, index + 1);
        // console.log(node.children);   // Output: true

        // If the current node has no other children and is not the end of another word, it can be safely deleted
        if (Object.keys(node.children).length === 0 && !node.isEndOfWord) {
            node = null;
        }

        return node;
    }
}

let trie = new Trie()
trie.insert("Abhilash")
trie.insert("Abhi")
console.log(trie.search("Abhilash"))
trie.delete("Abhilash");
console.log(trie.search("Abhilash"))
console.log(trie.search("Abhi"))
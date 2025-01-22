class trieNode {
    constructor() {
      this.children = {}; 
      this.isEndOfWord = false; 
    }
  }
  
  class Trie {
    constructor() {
      this.root = new trieNode(); 
    }

    /////////insert////////////////
  
    insert(word) {
      let node = this.root;
  
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new trieNode(); 
        }
        node = node.children[char]; 
      }
      node.isEndOfWord = true; 
    }
 /////search//////////
    search(word){
        let node = this.root

        for(let char of word){
           if(!node.children[char]){
            return false
           }
           node = node.children[char]
        }
        return  node.isEndOfWord 
    }

//////////////////remove node///////////////////
    remove( word,node = this.root,depth = 0) {
        if (!node) {
          return false;
        }
    
        if (depth == word.length) {
          if (!node.isEndOfWord) {
            return false;
          }
    
          node.isEndOfWord = false;
    
          return Object.keys(node.children).length === 0;
        }
    
        const char = word[depth];
        const shouldRemoveChild = this.remove( word, node.children[char], depth + 1);
    
        if (shouldRemoveChild) {
          delete node.children[char];
        }
    
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }

      /////////autoCompletion///////
  
    autoCompletion(prefix){
        let node = this.root

        for(let char of prefix){
          if(!node.children[char]){
            return []
          }
          node = node.children[char]
        }

        const collections = (node, currentWord, word)=>{
          if(node.isEndOfWord){
            word.push(currentWord)
          }

          for(let char in node.children){
            collections(node.children[char],currentWord+char,word)
          }
        }

        const suggestion = []
        collections(node ,prefix, suggestion)
        return suggestion

    }

      
    print() {
      const traverse = (node, prefix) => {
        if (node.isEndOfWord) {
          console.log(prefix); 
        }
        for (const char in node.children) {
          traverse(node.children[char], prefix + char); 
        }
      };
  
      traverse(this.root, ""); 
    }
  }
  

  const trie = new Trie();
  


  trie.insert("weeek");
  trie.insert("eek");
  trie.insert("weak");


  console.log("Words in Trie:");


  trie.remove('weeek')

  trie.print();


  console.log("autoCompletion Words in Trie:");

  console.log(trie.autoCompletion('e'))

 


  
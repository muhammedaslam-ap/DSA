
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(value){
        this.root = new Node(value)
    }
    
    insert(value){
        let curr = this.root
        let newNode = new Node(value)
        while(true){
            if(value < curr.value){
                if(curr.left==null){
                    curr.left = newNode
                    return
                }
                curr = curr.left
            }else if(value > curr.value){
                if(curr.right === null){
                    curr.right = newNode
                    return
                }
                curr = curr.right
            }else{
                return
            }
        }
    }
    
    
    search(value){
        let curr = this.root
        while(curr){
            if(value === curr.value){
                return true
            }else if(value < curr.value){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
    
    findMin(node){
        while(node.left){
            node = node.left
        }
        
        return node.value
    }
    
    
    removeNode(value , node = this.root){
        if(!node){
            return null
        }
        
        while(true){
            if(value<node.value){
                node.left = this.removeNode(value,node.left)
            }else if(value>node.value){
                node.right = this.removeNode(value,node.right)
            }else{
                if(!node.right && !node.left){
                    return null
                }
                
                if(!node.left){
                    return node.right
                }
                
                if(!node.right){
                    return node.right
                }
                
                let min = this.findMin(node.right)
                node.value = min
                node.right = this.removeNode(min,node.right)
            }
            
            return node
        }
    }
    
    inOrder(node = this.root ,result = []){
        if(!node)return result
        this.inOrder(node.left,result)
        result.push(node.value)
        this.inOrder(node.right,result)
        return result
    }
    
    preOrder(node = this.root , result = []){
        if(!node)return result
        result.push(node.value)
        this.preOrder(node.left , result)
        this.preOrder(node.right , result)
        return result
    }
    
    postOrder(node = this.root , result = []){
        if(!node)return result
        this.preOrder(node.left,result)
        this.preOrder(node.right,result)
        result.push(node.value)
        return result
    }
    
    
}



let b = new BinarySearchTree(50)


console.log('------BINARY TREE-------')
b.insert(30)
b.insert(50)
b.insert(20)
b.insert(40)
b.insert(60)


b.removeNode(20)

console.log(b.inOrder())

console.log(b.preOrder())

console.log(b.postOrder())



console.log(b.search(30))


class Graph{
    constructor(){
        this.adjecentList = {}
    }
    
    addVertex(vertex){
        if(!this.adjecentList[vertex] ){
            this.adjecentList[vertex] = new Set()
        }
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjecentList[vertex1]){
            this.addVertex(vertex1)
        }
        
        if(!this.adjecentList[vertex2]){
            this.addVertex(vertex2)
        }
        
        this.adjecentList[vertex2].add(vertex1)
        this.adjecentList[vertex1].add(vertex2)

    }
    
    removeEdge(vertex1,vertex2){
        if(this.adjecentList[vertex2]){
            this.adjecentList[vertex2].delete(vertex1)
        }
        
         if(this.adjecentList[vertex1]){
            this.adjecentList[vertex1].delete(vertex2)
        }
    }
    
    removeVertex(vertex){
         if(this.adjecentList[vertex]){
            for(let neibhour of this.adjecentList[vertex]){
                this.removeEdge(vertex,neibhour)
            }
            
            delete this.adjecentList[vertex]
        }
    }
    
    bfs(start){
        let result = []
        let visitedVertex  = new Set()
        let queue = [start]
        
        while(queue.length){
            let vertex  = queue.shift()
            if(!visitedVertex.has(vertex)){
                visitedVertex.add(vertex)
                result.push(vertex)
                
                this.adjecentList[vertex].forEach(v=>{
                    if(!visitedVertex.has(v)){
                        queue.push(v)
                    }
                })
            }
        }
         return result

    }
    
    dfs(start){
        let result = []
        let visitedVertex = new Set()
        let stack = [start]
        
        while(stack.length){
            let vertex = stack.pop()
            if(!visitedVertex.has(vertex)){
                visitedVertex.add(vertex)
                result.push(vertex)
           
            this.adjecentList[vertex].forEach(v=>{
                if(!visitedVertex.has(v)){
                    stack.push(v)
                }
            })
          }
        }
         return result
    }
    
    dfsRecursive(start,visitedVertex = new Set() , result = []){
        if(!visitedVertex.has(start)){
            visitedVertex.add(start)
            result.push(start)
            this.adjecentList[start].forEach(v=>{
                if(!visitedVertex.has(v)){
                    this.dfsRecursive(v,visitedVertex,result)
                }
            })
        }
        
        return result
    }
    
    display(){
        console.log(this.adjecentList)
        return
    }
}

let g = new Graph()
console.log('----------GRAPH---------')
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')


g.addEdge('A','B')
g.addEdge('B','C')
g.addEdge('C','D')
g.addEdge('D','A')

console.log(g.dfs('A'))
console.log(g.bfs('D'))
console.log(g.dfsRecursive('C'))



g.removeEdge('A','B')
g.removeVertex('A')
g.display()



class heap{
    constructor(){
        this.heap = []
    }
    
    
    getParent(index){
        return Math.floor((index -1)/2)
    }
    
    getLeftChild(index){
        return 2 * index + 1
    }
    
    getRightChild(index){
        return 2 * index + 2
    }
    
    
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    
    heapifyUp(){
        let index = this.heap.length-1
        while(index > 0 && this.heap[index]<this.heap[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index = this.getParent(index)
        }
    }
    
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] =[this.heap[index2],this.heap[index1]]
    }
    
    print(){
        console.log(this.heap)
        return
    }
    
    
    removes(value){
        let index = this.heap.indexOf(value)
        if(index == -1){
            console.log('this value not in heap')
            return
        }
        
        if(index == this.heap.length-1){
            this.heap.pop()
            return
        }
        
        let lastElement = this.heap.pop()
        this.heap[index] = lastElement
        this.heapifyDown(index)
    }
    
    heapifyDown(index = 0){
        while(this.getLeftChild(index)<this.heap.length){
            let largest = this.getLeftChild(index)
            
            if(this.getRightChild(index)<this.heap.length && this.heap[this.getRightChild(index)] <this.heap[largest]){
                largest = this.getRightChild(index)
            }
            
            if(this.heap[index]<=this.heap[largest]){
                break
            }
            
            this.swap(index,largest)
            index = largest
        }
    }
}

let h = new heap()
console.log('----------MAX-HEAP---------')
h.insert(10)
h.insert(40)
h.insert(80)
h.insert(50)

h.removes(80)

h.print()


class trieNode{
    constructor(){
      this.children = {}
      this.isEndWord = false
    }
}

class Trie{
    constructor(){
        this.root = new trieNode()
    }
    
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new trieNode()
            }
            
            node = node.children[char]
        }
        node.isEndWord = true
    }
    
     search(word){
         let node = this.root
         for(let char of word){
             if(!node.children[char]){
                 return false
             }
             
             node = node.children[char]
         }
         
         return node.isEndWord
     }
     
     autoCompletion(prefix){
         let node  = this.root
         
         for(let char of prefix){
             if(!node.children[char]){
                 return []
             }
             node = node.children[char]
         }
         
         
         const collections = (node,currentWord,word)=>{
             if(node.isEndWord){
                 word.push(currentWord)
             }
             
             for(let char in node.children){
                 collections(node.children[char],currentWord+char,word)
             }
         } 
         
         let suggetions = []
         collections(node,prefix,suggetions)
         return suggetions
     }

}

let t = new Trie()
console.log('---------TRIE---------')
t.insert('hello')
t.insert('hy')
t.insert('suii')

console.log(t.search('hy'))

console.log(t.autoCompletion('h'))












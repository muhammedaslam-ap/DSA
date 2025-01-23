
class graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }

       
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex2].add(vertex1)
        this.adjacencyList[vertex1].add(vertex2)

    }

    removeEdge(vertex1,vertex2){
         if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1].delete(vertex2)
         }

         if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2].delete(vertex1)
         }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let neighbor of this.adjacencyList[vertex]){
                this.removeEdge(vertex , neighbor)
            }
            delete this.adjacencyList[vertex]
        }
    }

    bfs(start){
        let visitedVertex = new Set()
        let result = [] 
        let queue = [start]

        while(queue.length > 0 ){
            let vertex = queue.shift()
            if(!visitedVertex.has(vertex)){
                visitedVertex.add(vertex)
                result.push(vertex)
               this.adjacencyList[vertex].forEach(v => {
                if(!visitedVertex.has(v)){
                    queue.push(v)
                }
               });
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

                this.adjacencyList[vertex].forEach((v)=>{
                    if(!visitedVertex.has(v)){
                        stack.push(v)
                    }
                })
            }
        }
        return result
    }


    dfsRecursive(start,  visitedVertex = new Set() , result = []){
        if(!visitedVertex.has(start)){
            visitedVertex.add(start)
            result.push(start)
        }

        this.adjacencyList[start].forEach((v)=>{
            if(!visitedVertex.has(v)){
                this.dfsRecursive(v,visitedVertex,result)
            }
        })

        return result
    }

    display(){
        console.log(this.adjacencyList)
    }
}


let G = new graph()

G.addVertex('A')
G.addVertex('B')
G.addVertex('C')
G.addVertex('D')

G.addEdge('A','B')

G.addEdge('B','C')

G.addEdge('C','D')

G.addEdge('D','A')

G.addEdge('C','A')

G.addEdge('B','D')

console.log(G.bfs('A'))

console.log(G.dfs('A'))

console.log(G.dfsRecursive('A'))

G.removeVertex('B')

G.display()
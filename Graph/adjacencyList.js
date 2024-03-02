let adjacencyList = {
    'A' : ['B'],
    'B' : ['A','C'],
    'C' : ['B']
}
console.log(adjacencyList['A'])
console.log(adjacencyList['B'])

class AdjacencyList{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for (let adjacencyVertex of this.adjacencyList[vertex]){
                this.removeEdge(vertex,adjacencyVertex)
            }
            delete this.adjacencyList[vertex]
        }
        return false
    }
    bfs(startingVertex){
        let visited ={}
        let queue = [startingVertex]

        while(queue.length > 0){
            let currenElement = queue.shift()
            if(!visited[currenElement]){
                console.log(currenElement);
                visited[currenElement] = true;
                for( let neighbour of this.adjacencyList[currenElement]){
                    if(!visited[neighbour]){
                        queue.push(neighbour)
                    }
                }
            }
        }
        return visited
    }
   

    dfs(startvertex){
       let visited = {}

       let dfsRecurssion = (vertex)=>{
        console.log(vertex)
        visited[vertex] = true
        for( let neighbour of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                dfsRecurssion(neighbour)
            }
        }
       }
       dfsRecurssion(startvertex)
    }
    
    
    print(){
        for( let vertex in this.adjacencyList){
            console.log(vertex , '=>' , [...this.adjacencyList[vertex]])
        }
        
    }
}
let adj = new AdjacencyList()
// adj.addVertex('A')
// adj.addVertex('B')
// adj.addVertex('C')
// console.log(adj.adjacencyList)
// adj.addEdges('A','B')
// // console.log(adj.adjacencyList)
// adj.print()
// adj.addEdges('C','B')
// // console.log(adj.adjacencyList)
// adj.print()
// console.log(adj.hasEdge('A','C'))
// // adj.removeEdge('A',"B")
// // adj.removeEdge('C',"B")
// adj.removeVertex("k") 
// adj.print()
adj.addVertex(0)
adj.addVertex(1)
adj.addVertex(2)
adj.addVertex(3)
adj.addVertex(4)
adj.addEdges(0,1)
adj.addEdges(0,2)
adj.addEdges(0,3)
adj.addEdges(1,2)
adj.addEdges(2,4)
adj.print()
console.log(adj.bfs(0))
console.log("res ",adj.dfs(0))

adj.print()


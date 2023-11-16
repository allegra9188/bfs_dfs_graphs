// Question 2
// You are an aspiring computer scientist tasked with creating a function that can find the shortest path between two locations in a graph. 
// The graph represents various locations and the roads connecting them, with each road having a specific distance associated with it. 
// Your goal is to create a function called bfsShortestPath (graph, source, target) that takes in the graph, 
// the source node (representing the traveler's current location), and the target node (representing the traveler's destination). 
//The function should return an array representing the shortest path from the source to the target.

// The graph is represented using an adjacency list. This means that each location in the graph is a node, 
// and the roads connecting them are represented as edges. 
// The adjacency list stores the neighboring nodes for each node, allowing you to traverse the graph efficiently. 
// Your task is to create a bfsShortestPath function, utilizing the Breadth-First Search (BFS) algorithm to find the shortest path from the source to the target. 
// The function should return an array that represents the shortest path, starting from the source and ending at the target.

// Sample Input: A: ['B', 'C'],   B: ['A', 'D', 'E'],   C: ['A', 'F'],   D: ['B'],   E: ['B', 'F'],   F: ['C', 'E'], 
// in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F

// Sample Output: Shortest path from A to F: [ 'A', 'C', 'F' ]

function bfsShortestPath(graph, source, target){
    // Queue for BFS
    const queue = [];

    // Mark nodes visited
    const visited = {};
    for (const node in graph){
        visited[node] = false;
    }
    
    // Parent obj to store the parent of each node in the path
    const parent = {};
    parent[source] = null;

    // Enqueue the source node and mark it as visited
    queue.push(source);
    visited[source] = true;

    // BFS
    while (queue.length > 0){
        const current = queue.shift();

        // check if the current node is the target
        if(current === target){
            const path = [];
            // rebuild the path from target to source
            let node = target;
            while (node !== null){
                path.unshift(node);
                node = parent[node];
            }
            return path;
        }

        //explore neighbors 
        for(const neighbor of graph[current]){
            if(!visited[neighbor]) {
                //enqueue the neighbor, mark as visited, set its parent
                queue.push(neighbor);
                visited[neighbor] = true;
                parent[neighbor] = current;
            }
        }
    }
    // if no path is found
    return null;

    //source node (representing the traveler's current location)

    //target node (representing the traveler's destination)
}


// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
  };

  const sourceNode = 'A';
  const targetNode = 'F';

  const shortestPath = bfsShortestPath(graph, sourceNode, targetNode);
  console.log(`The shortest path from ${sourceNode} to ${targetNode} is: `, shortestPath);
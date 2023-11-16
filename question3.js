// You are a cab driver in Boston, and you receive a request to pick up a passenger from a specific location. 
// Your task is to find all possible routes to reach the passenger's location using the Depth First Search (DFS) algorithm in JavaScript. 
// You need to implement the Depth First Search algorithm to find all possible routes from your current location (the starting node) to the passenger's location (the target node). 
// Your goal is to provide a list of all possible routes. 
// Implement the dfsAllRoutes(graph, source, target) function in JavaScript that takes the graph, 
// the source node (your current location), and the target node (the passenger's location) as input. 
// The function should return an array of all possible routes from the source to the target.

// Sample Input:  A: ["B", "C"],   B: ["A", "D", "E"],   C: ["A", "F"],   D: ["B"],   E: ["B", "F"],   F: ["C", "E"],  in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F.

// Sample Output: All possible routes from A to F: [ [ 'A', 'B', 'E', 'F' ], [ 'A', 'C', 'F' ] ]

/**
 * Uses DFS to find all possible routes from one node to another in a graph.
 * @param {{string:string[]}} graph - adjacency list
 * @param {string} source - label of the source node
 * @param {string} target - label of the target node
 * @returns {string[][]} - returns an array of all possible paths
 *  from `source` to `target`, where each path is an array of node labels
 */
const findAllPaths = (graph, source, target) => {
    const paths = [];
  
    // The crux of the problem is to keep track of the path-so-far while we DFS.
    // DFS can be implemented iteratively with a stack.
    // The stack starts with the source node and an empty path.
    const stack = [{ node: source, pathSoFar: [] }];
  
    // While there are still nodes to visit
    while (stack.length) {
      // Visit the current node
      const { node, pathSoFar } = stack.pop();
  
      // Add the current node to the path-so-far
      // `pathSoFar.push` isn't used because that leads to unwanted mutations
      const path = [...pathSoFar, node];
  
      // If we're at the target, we've found a possible path!
      if (node === target) paths.push(path);
  
      // Continue DFS
      for (const neighbor of graph[node]) {
        // Don't revisit a neighbor
        if (path.includes(neighbor)) continue;
  
        stack.push({ node: neighbor, pathSoFar: path });
      }
    }
  
    return paths;
  };
  
  const g = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
  
  console.log(findAllPaths(g, "A", "F"));
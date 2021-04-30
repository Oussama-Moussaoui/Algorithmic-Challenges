/**
 * Input:
 * 6 5 (nodes and edges)
 * 1 2 1
 * 1 4 1
 * 2 3 1
 * 4 6 100
 * 4 5 1
 *
 * Expected Output:
 * 2
 * 1 4 6
 */

// Representing the graph in a matrix
// input / required variables: nodes, edges, weights ==> graph(matrix)

// Get nodes and adges
let nodes = Number(prompt('Number of nodes'));
let edges = Number(prompt('Number of edges'));

// Initializing the graph
const graph = new Array(nodes);

// Filling graph woth 0's
for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(nodes);
    for (let j = 0; j < nodes; j++) {
        graph[i][j] = 0;
    }
}

// Get weights & filling the graph
for (let i = 0; i < edges; i++) {
    const from = Number(prompt('from:')) - 1;
    const to = Number(prompt('to:')) - 1;
    const weight = Number(prompt('weight:'));

    graph[from][to] = weight;
    graph[to][from] = weight;
}

// // Print Graph
// for (let i = 0; i < graph.length; i++) {
//     let matrixLine = '';
//     for (let j = 0; j < graph.length; j++) {
//         matrixLine = matrixLine + ' ' + graph[i][j];
//     }
//     console.log(matrixLine);
// }
// // End Print Graph

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

// printGraph(graph);
// console.log(getPaths(graph, 0, [0]));
// console.log(getPaths(graph, 3, [0, 3]));
// console.log(getPaths(graph, 1, [0, 1]));

// Concatination
const phase_1 = getPaths(graph, 0, [0]);
const paths = [];

for (let i = 0; i < phase_1.length; i++) {
    const phase_2 = getPaths(graph, phase_1[i][1], [0, phase_1[i][1]]);
    console.log('--', i, '- phase 2:', phase_2);

    if (phase_2) {
        for (let j = 0; j < phase_2.length; j++) {
            paths.push(phase_1[i].concat(phase_2[j]));
        }
    }
}

console.log(paths);

// Helper Functions
function printGraph(graph) {
    for (let i = 0; i < graph.length; i++) {
        let matrixLine = '';
        for (let j = 0; j < graph.length; j++) {
            matrixLine = matrixLine + ' ' + graph[i][j];
        }
        console.log(matrixLine);
    }
}

function getPaths(graph, rootNode, nodesToIgnore) {
    // Getting all paths that starts from the rootNode (the first node in our case)
    const len = graph.length;
    const paths = [];
    for (let i = 0; i < len; i++) {
        if (graph[rootNode][i] !== 0 && !nodesToIgnore.includes(i)) {
            const path = [rootNode];
            path.push(i);
            paths.push(path);
        }
    }

    if (paths.length) return paths;
    if (!paths.length) return false;
}

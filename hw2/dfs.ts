const MAX_VALUE_DFS = 999999;
const dfs : (graph: number[][]) => number[][] = (graph: number[][]) => {
    const pre = Array.from({ length: graph.length }, () => MAX_VALUE_DFS);
    const post = Array.from({ length: graph.length }, () => MAX_VALUE_DFS);
    let t = 1;

    const explore = (graph: number[][], vertex: number) => {
        pre[vertex] = t;
        t++;
        for (let i = 0; i < graph[vertex].length; i++) {
            if (pre[graph[vertex][i]-1] === MAX_VALUE_DFS) {
                explore(graph, graph[vertex][i]-1);
            }
        }
        post[vertex] = t;
        t++;
    }

    for (let i = 0; i < graph.length; i++) {
        if (pre[i] === MAX_VALUE_DFS) {
            explore(graph, i);
        }
    }
    
    return [pre, post];
}

console.log("Example");
let [pre1, post1] = dfs([[2, 4], [], [1, 2], [3], []]);
console.log(pre1, post1);

console.log("Q1");
let [pre2, post2] = dfs([[3], [1], [4], [1, 2]]);
console.log(pre2, post2);

console.log("Q2");
let g3 : number[][] = [[19, 20, 24], [3, 9, 37], [2, 9, 14], [30], [4, 16, 21, 29, 33], [9, 13, 19, 24, 29, 39], [18, 20, 32, 39], [1, 2, 11, 17, 18, 19, 23, 33, 37], [3, 26, 29, 34, 36, 38], [1, 3, 15], [12, 13, 31, 32], [7, 11, 13, 20, 21, 28, 29], [14, 27, 29], [15, 20, 33], [3, 27], [15, 20, 29, 31], [18, 37, 38], [5, 10, 20, 36, 40], [18, 21, 29], [17, 23, 28], [8, 12, 14, 15, 16, 18, 19, 25, 30, 34, 40], [24, 27, 31, 35], [17, 25, 33, 36], [1, 2, 4, 5, 25, 35, 39], [4, 10, 14, 15, 34, 39], [4, 7, 14, 16, 17, 32], [14, 39], [19, 26], [1, 27], [7, 8, 17, 32, 33], [4, 9, 22, 28, 30, 38], [10, 23, 25, 30, 36, 37], [2, 3, 9, 23, 26, 31], [], [6, 27, 37], [1, 15, 18, 31, 32, 39], [7, 10, 15, 19, 22, 27, 29, 31], [5, 11, 27, 33], [2, 8, 20, 24, 40], [9, 11, 14, 16, 36]];
let [pre3, post3] = dfs(g3);
console.log(pre3.slice(0, 10), post3.slice(0, 10));

let numBackEdges = 0;
for (let u = 0; u < g3.length; u++) {
    for (let v of g3[u]) {
        if (pre3[v-1] < pre3[u] && pre3[u] < post3[u] && post3[u] < post3[v-1]) numBackEdges++;
    }
}
console.log("Number of back edges: ", numBackEdges);
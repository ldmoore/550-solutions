const zeroOneKnapsack: (v : number[], w: number[], b: number) => number = (v : number[], w: number[], b: number) => {
    //Fill square array with 0s
    let d : number[][] = new Array(v.length).fill([]);
    for (let i = 0; i < v.length; i++) {
        d[i] = new Array(b+1).fill(0);
    }

    for (let i = 1; i <= b; i++) { //Must populate first row manually
        if (w[0] <= i) d[0][i] = v[0];
    }

    for (let i = 1; i < v.length; i++) {
        for (let j = 1; j <= b; j++) {
            if (j < w[i]) d[i][j] = d[i-1][j]; //If the budget (j) is less than the weight of the item then the previous case applies
            else d[i][j] = Math.max(d[i-1][j], v[i] + d[i-1][j-w[i]]); //Otherwise, we take the max of the previous case OR the new added value + what the algorithm would do with that remaining budget & items
        }
    }

    let max = 0;
    for (let i = 0; i < v.length; i++) {
        max = Math.max(max, ...d[i]);
    }

    return max;
};

//Q1
let v_1 = [3, 1, 2];
let w_1 = [2, 1, 4];
let b_1 = 4;

console.log("Q1", zeroOneKnapsack(v_1, w_1, b_1));

//Q2
let v_2 = [3, 17, 15, 5, 10, 9, 13, 15, 2, 1, 16, 9, 15, 1, 9, 14, 5, 18, 18, 1, 1, 11, 18, 8, 5, 9, 1, 5, 9, 10, 5, 5, 5, 9, 6, 1, 16, 11, 13, 4, 19, 17, 3, 7, 14, 14, 18, 9, 16, 13];
let w_2 = [6, 12, 17, 17, 10, 12, 1, 5, 16, 8, 4, 11, 14, 13, 8, 9, 10, 15, 10, 8, 10, 1, 1, 14, 19, 12, 8, 4, 10, 19, 15, 11, 17, 5, 10, 19, 11, 9, 6, 11, 19, 1, 15, 16, 17, 15, 16, 10, 11, 9];
let b_2 = 40;

console.log("Q2", zeroOneKnapsack(v_2, w_2, b_2));
const fractionalKnapsack: (v: number[], w: number[], b: number) => number = (v: number[], w: number[], b: number) => {
    let optValue = 0;
    let weight = 0;
    let data : number[][] = [];
    for (let i = 0; i < v.length; i++) {
        data.push([v[i], w[i], v[i] / w[i]])
    }
    data = data.sort((a, b) => b[2] - a[2]);
    for (let i = 0; i < data.length; i++) {
        let [itemValue, itemWeight] = data[i];
        if (weight + itemWeight <= b) {
            weight += itemWeight;
            optValue += itemValue;
        } else {
            let remainingBudget = b - weight;
            let pct = remainingBudget / itemWeight;
            optValue += itemValue * pct;
            weight += remainingBudget;
        }
    }

    return optValue;
};

//Q1
let v1 = [1, 4, 4];
let w1 = [2, 3, 4];
let b1 = 8;
console.log(fractionalKnapsack(v1, w1, b1));

//Q2
let v2 = [201, 95, 131, 190, 220, 105, 221, 144, 183, 240, 229, 225, 146, 217, 242, 193, 130, 124];
let w2 = [23, 10, 16, 51, 29, 18, 22, 14, 27, 13, 22, 94, 51, 12, 3, 10, 14, 5];
let b2 = 33;
console.log(fractionalKnapsack(v2, w2, b2));

//Q3
let v3 = [64, 111, 58, 168, 98, 192, 142, 129, 214, 205, 240, 243, 127, 190, 150, 216, 221, 242, 242, 123, 215, 237, 113, 93, 202, 187, 71];
let w3 = [1, 2, 2, 23, 10, 38, 16, 24, 8, 18, 31, 59, 14, 27, 46, 21, 64, 49, 35, 40, 37, 11, 3, 10, 14, 44, 5];
let b3 = 31;
console.log(fractionalKnapsack(v3, w3, b3));
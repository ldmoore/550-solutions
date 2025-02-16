const lis = (arr: number[]): number => {
    let d : number[] = new Array(arr.length).fill(1);
    let p : number[] = new Array(arr.length).fill(-1);
    d[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && d[i] < 1 + d[j]) {
                d[i] = 1 + d[j];
                p[i] = j;
            }
        }
    }

    let lisLength = Math.max(...d);
    console.log("Last 3 elements in d:", d.slice(-3));

    let maxIndex = d.indexOf(Math.max(...d));
    let i = maxIndex;
    let lis : number[] = [];
    while (i > -1 && p[i] !== i) {
        lis.push(arr[i]);
        i = p[i];
    }
    lis.reverse();

    console.log("First 3 elements in LIS", lis.slice(0, 3));
    console.log("Last 3 elements in LIS", lis.slice(-3));

    return lisLength;
};

let lisA = [6, 7, 8, 1, 2, 3];
console.log("Q1 LIS Length", lis(lisA));

let lis2 =  [14, 84, 76, 26, 50, 45, 65, 79, 10, 3, 83, 43, 76, 1, 45, 72, 23, 94, 90, 4, 3, 54, 93, 38, 22, 42, 3, 22, 44, 50, 24, 23, 22, 46, 29, 3, 83, 56, 64, 19, 99, 86, 12, 33, 72, 71, 93, 42, 83, 67, 31, 59, 88, 84, 51, 59, 4, 25, 79, 42, 18, 55, 70, 67, 38, 44, 51, 78, 52, 39, 49, 3, 5, 70, 98, 59, 39, 17, 50, 98, 77, 54, 86, 23, 51, 95, 58, 46, 27, 55, 95, 1, 78, 82, 88, 74, 81, 52, 56, 43];
console.log("Q2 LIS Length", lis(lis2));
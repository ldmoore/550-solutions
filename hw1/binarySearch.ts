const binarySearch: (A: number[], t: number) => number = (A, t) => {
    let i = 0;
    let j = A.length - 1;
    while (i <= j) {
        let m = Math.floor((i + j) / 2);
        console.log(m+1);
        if (A[m] === t) {
            return m;
        } else if (A[m] < t) {
            i = m + 1;
        } else {
            j = m - 1;
        }
    }
    return -1;
};

//Q2.1
console.log("Q2.1");
let arrA: number[] = [1, 3, 4, 5, 8, 9];
binarySearch(arrA, 2);

//Q2.2
console.log("Q2.2");
let arrB: number[] = [1, 2, 3, 4, 7, 9, 13, 14, 15, 16, 18, 19, 23, 27, 28, 29, 30, 33, 35, 36, 41, 42, 44, 49, 50, 55, 56, 57, 58, 60, 61, 62, 63, 64, 70, 71, 72, 73, 75, 76, 78, 79, 84, 86, 87, 89, 90, 93, 94, 98];
binarySearch(arrB, 33);

console.log("Q2.3");
let arrC: number[] = [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15, 16, 18, 19, 22, 23, 27, 28, 29, 30, 33, 35, 36, 41, 42, 43, 44, 47, 49, 50, 55, 56, 57, 58, 60, 61, 62, 63, 64, 68, 69, 70, 71, 72, 73, 75, 76, 78, 79, 83, 84, 86, 87, 88, 89, 90, 93, 94, 96, 98];
binarySearch(arrC, 33);
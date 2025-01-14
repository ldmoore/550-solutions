const selectionSort: (arr: number[]) => number[] = (arr) => {
    if (arr.length === 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i === 10) {
            console.log(`Step ${i}: ${arr.slice(9, 15)}`);
        }
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        //console.log(`Swapping A[${i+1}] (${arr[i]}) and A[${min+1}] (${arr[min]})`);
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
};

console.log("3.1");
let firstArr = [18, 73, 98, 9, 33];
selectionSort(firstArr);

console.log("3.2");
let ssArr = [18, 73, 9, 33, 16, 64, 58, 61, 84, 49, 27, 13, 63, 4, 50, 56, 78, 1, 93, 35, 30, 76, 14, 41, 86, 3, 75, 70, 2, 90, 28, 55, 98, 29, 57, 94, 36, 15, 23, 62, 44, 60, 72, 79, 19, 71, 89, 87, 42, 7];
selectionSort(ssArr);
const twoSum : (A: number[], target: number) => void = (A, target) => {
    let i : number = 0;
    let j : number = A.length-1;

    while (i < j) {
        let sum : number = A[i] + A[j];
        if (sum === target) {
          console.log(`${i+1}, ${j+1}`);
          break;
        } else if (sum > target) j--;
        else if (sum < target) i++;
      }
      
      console.log("Done");
}

console.log("Q1");
let C : number[] = [1, 3, 4, 5, 8, 9];
twoSum(C, 8);

console.log("Q2");
let A : number[] = [1, 4, 10, 13, 16, 19, 22, 25, 28, 34, 37, 40, 43, 46, 49, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97];
twoSum(A, 149);

console.log("Q3");
let B : number[] = [4, 13, 34, 40, 43, 46, 97, 145, 154, 157, 181, 184, 205, 286, 292, 322, 331, 337, 340, 352, 355, 358, 391, 409, 436, 445, 454, 466, 487, 511, 529, 583, 586, 598, 604, 640, 649, 664, 673, 685, 691, 706, 724, 748, 760, 766, 769, 775, 778, 811, 832, 850, 853, 874, 901, 907, 934, 967, 985, 997];
twoSum(B, 1111);
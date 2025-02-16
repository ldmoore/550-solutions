const lps = (str: string): number => {
    let d : number[][] = new Array(str.length).fill([]);
    for (let i = 0; i < str.length; i++) {
        d[i] = new Array(str.length).fill(0);
    }
    
    for (let i = str.length-1; i >= 0; i--) {
        d[i][i] = 1;
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) d[i][j] = d[i+1][j-1] + 2; //Since they match, we can add 2 to the prev palindrome count
            else d[i][j] = Math.max(d[i+1][j], d[i][j-1]); //Otherwise the max length stays the same
        }
    }

    return d[0][str.length-1];
};

let q1str = "abcdb";
console.log("Q1", lps(q1str));

let q2str = "accabbbcaacbcabcaccaabcbabaabbaaabaacbbaccaacccbcc";
console.log("Q2", lps(q2str));
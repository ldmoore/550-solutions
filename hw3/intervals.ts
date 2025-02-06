const intervalCalc: (intervals: number[][]) => number[][] = (intervals: number[][]) => {
    let sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
    let validIntervals : number[][] = [sortedIntervals[0]];
    for (let i = 1; i < sortedIntervals.length; i++) {
        let lastEventEndTime = validIntervals[validIntervals.length-1][1];
        let thisEventStartTime = sortedIntervals[i][0];
        if (thisEventStartTime > lastEventEndTime) validIntervals.push(sortedIntervals[i]);
    }
    return validIntervals;
}

//Q1
let i1 = [[3, 5], [1, 2], [2, 4]];
console.log(intervalCalc(i1));

let i2 = [[4, 36], [17, 147], [5, 18], [62, 67], [16, 32], [96, 128], [21, 117], [19, 122], [64, 168], [45, 99], [12, 55], [20, 26], [79, 126], [3, 9], [89, 101], [55, 112], [26, 157], [1, 2], [16, 116], [49, 70], [26, 60], [52, 153], [16, 28], [20, 83], [158, 166], [3, 7], [7, 8], [61, 140], [1, 4], [12, 170], [19, 57], [35, 110], [54, 155], [93, 137], [47, 58], [49, 114], [115, 174], [60, 61], [64, 90], [3, 142], [4, 145], [89, 119], [24, 76], [22, 154], [63, 108], [8, 27], [26, 49], [18, 77], [106, 175], [2, 87], [7, 148], [65, 66], [36, 135], [17, 118], [96, 130], [38, 171], [4, 40], [24, 38], [22, 132], [129, 144]];
let intervals = intervalCalc(i2);
console.log(intervals[0], intervals[4], intervals[intervals.length-1]);
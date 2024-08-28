const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

// 1st iteration:- [3,1,5,8,2,7,4,6,9]
// 2nd iteration:- [1,3,5,2,7,4,6,8,9]
// 3rd iteration:- [1,3,2,5,4,6,7,8,9]
// 4rd iteration:- [1,2,3,4,5,6,7,8,9]

for (let j = 0; j < sampleArray.length; j++) {
    let i = 0, flag = false;
    while (i < sampleArray.length) {
        if (sampleArray[i] > sampleArray[i + 1]) {
            flag = true;
            sampleArray[i] = sampleArray[i] + sampleArray[i + 1];
            sampleArray[i + 1] = sampleArray[i] - sampleArray[i + 1];
            sampleArray[i] = sampleArray[i] - sampleArray[i + 1];
        }
        i++;
    }
    if (!flag) {
        break;
    }
}

console.log('sampleArray:- ', sampleArray);
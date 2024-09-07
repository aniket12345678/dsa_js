const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

function insertionSorting(data) {
    let sortedArr = [data[0]];
    let i = 1;
    while (i < data.length) {
        if (data[i] === sortedArr[sortedArr.length - 1]) {
            sortedArr.push(data[i]);
        }
        else if (data[i] > sortedArr[sortedArr.length - 1]) {
            sortedArr.push(data[i]);
        }
        else {
            for (let y = 0; y < sampleArray.length; y++) {
                
            }
        }
        i++;
    }

    return data;
}

const output = insertionSorting(sampleArray);
console.log('output:- ', output);
const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

function quickSort(data) {
    if (data.length <= 1) {
        return data;
    }
    let pivot = data[data.length - 1];
    let left = [], right = [];
    for (let i = 0; i < data.length - 1; i++) {
        if (pivot < data[i]) {
            right.push(data[i]);
        } else {
            left.push(data[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const output = quickSort(sampleArray);
console.log('output:- ', output);
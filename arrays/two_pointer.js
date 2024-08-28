const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6].sort((a, b) => a - b), target = 15;

function checkElement(data) {
    let left = 0, right = data.length - 1;
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (target === data[middle]) {
            return true;
        }
        if (target > data[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
}

const output = checkElement(sampleArray);

console.log('output:- ', output);
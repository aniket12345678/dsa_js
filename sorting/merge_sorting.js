const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

function mergeSorting(data, low, high) {
    if (data.length<=1) {
        return;
    }
    let middle = Math.floor((low + high) / 2);
    mergeSorting(data, low, middle + 1);
    mergeSorting(data, middle + 1, high);
}

mergeSorting(sampleArray, 0, sampleArray.length);
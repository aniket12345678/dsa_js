const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

function mergeSorting(data, low, high) {
    if (low >= high) {
        return;
    }
    let middle = Math.floor((low + high) / 2);
    mergeSorting(data, low, middle);
    mergeSorting(data, middle + 1, high);
    mergeArr(data, low, middle, high)
}

function mergeArr(arr, low, middle, high) {
    let i = low, j = middle + 1, emptyArr = [];
    while (i <= middle && j <= high) {
        if (arr[i] <= arr[j]) {
            emptyArr.push(arr[i]);
            i++;
        } else {
            emptyArr.push(arr[j]);
            j++;
        }
    }
    while (i <= middle) {
        emptyArr.push(arr[i]);
        i++;
    }
    while (j <= high) {
        emptyArr.push(arr[j]);
        j++;
    }
    for (let k = 0; k < emptyArr.length; k++) {
        arr[low + k] = emptyArr[k];
    }
}

mergeSorting(sampleArray, 0, sampleArray.length - 1);
console.log('sampleArray:- ', sampleArray);
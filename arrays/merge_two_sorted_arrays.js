let arr = [1, 3, 4, 5, 7, 8, 9], store = [2, 6];
let i = 0, j = 0, emptyArr = [];
while (i < arr.length || j < store.length) {
    if (arr[i] === store[j]) {
        emptyArr.push(arr[i], store[j]);
        i++;
        j++;
    }
    else if (arr[i] < store[j]) {
        emptyArr.push(arr[i]);
        i++;
    } else if (arr[i] > store[j]) {
        emptyArr.push(store[j]);
        j++;
    }
    else {
        if (j >= store.length) {
            emptyArr.push(arr[i]);
            i++;
        } else {
            emptyArr.push(store[j]);
            j++;
        }
    }
}
console.log(emptyArr);
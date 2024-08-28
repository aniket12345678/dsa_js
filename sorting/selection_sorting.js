const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        const output = minimum(data.slice(i, data.length));
        let index = data.indexOf(output);
        let temp = data[i];
        data[i] = output;
        data[index] = temp;
    }
    return data;
}

function minimum(data) {
    let store = data[0];
    for (let i = 0; i < data.length; i++) {
        if (store > data[i]) {
            store = data[i];
        }
    }
    return store;
}

const output = selectionSort(sampleArray);
console.log('output:- ', output);
let s = "abbaca";

function checkDuplicate(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i + 1]) {
            return { status: true, index: i };
        }
    }
    return { status: false, index: 0 };
}

function removeDuplicates(data) {
    let store = checkDuplicate(data);
    if (store.status) {
        return removeDuplicates(data.slice(0, store.index) + data.slice(store.index + 2, data.length))
    } else {
        return data;
    }
}

const output = removeDuplicates(s);
console.log('output:- ', output);
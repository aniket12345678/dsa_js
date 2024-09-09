let array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
]

let fn = function (item) {
    return item.id;
}

let output = array.reduce((acc, curr) => {
    let str = fn(curr);
    if (acc[str]) {
        acc[str] = [...acc[str], curr]
    } else {
        acc[str] = [curr]
    }
    return acc;
}, {});

console.log('output:- ', output);
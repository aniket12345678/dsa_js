// let a = 2, b = [3];
let a = 2, b = [1, 2];

function superPow(x, y) {
    if (x === 1 || y === 0) {
        return 1;
    } else {
        const power = y.join('');
        let store = Math.pow(x, power);
        if (store < 1337) {
            return store;
        } else {
            return store % 1337;
        }
    }
}

const output = superPow(a, b);
console.log('output:- ', output);
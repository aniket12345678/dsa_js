function digitalRoot(n) {
    let output = Array.from(n.toString(), x => Number(x)).reduce((acc, curr) => acc + curr, 0);
    if (output.toString().length === 1) {
        return output;
    } else {
        return digitalRoot(output);
    }
}

const output = digitalRoot(69);
console.log('output:- ', output);
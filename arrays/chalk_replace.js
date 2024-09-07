let chalk = [5, 1, 5], k = 22;

function chalkReplacer(chalk, k) {
    let i = 0, status = true;
    let sum = chalk.reduce((acc, curr) => acc + curr, 0);
    while (status) {
        if (k <= 0) {
            status = false;
            break;
        }
        k = k - sum;
    }
    console.log(k);
    
}

const output = chalkReplacer(chalk, k);

console.log('output:- ', output);
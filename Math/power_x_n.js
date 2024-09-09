let x = 0.1, n = -1;
// let x = -2.00000, n = 8;
// let x = 2.00000, n = -4;

function calc_power(data, base, power) {
    if (power === 0) {
        return data / base;
    } else {
        data = data * base;
        return calc_power(data, base, --power)
    }
}

const output = calc_power(x, x, Math.abs(n));

console.log('output:- ', n < 0 ? 1 / output : output);


// function calculatePower(data, base, power, status) {
//     if (status) {
//         if (power === 0) {
//             return data / base;
//         } else {
//             data = data * base;
//             return calculatePower(data, base, --power, status)
//         }
//     } else {
//         if (power === 0) {
//             return data / base;
//         } else {
//             data = data / base;
//             return calculatePower(data, base, ++power, status)
//         }
//     }
// }

// const output = calculatePower(x, x, n, n < 0 ? false : true);

// console.log('output:- ', output);
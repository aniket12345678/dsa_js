let arr = [3, 8, 2, 5, 7, 6, 12], k = 4;

let current = 0;
for (let i = 0; i < k; i++) {
    current += arr[i];
}
let max = current;
for (let j = 1; j <= arr.length - k; j++) {
    current = current - arr[j - 1] + arr[j - 1 + k];
    if (current > max) {
        max = current;
    }
}
console.log('max:- ', max);

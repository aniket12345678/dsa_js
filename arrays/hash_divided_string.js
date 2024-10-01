let s = "abcd", k = 2;

let html = '';

for (let i = 0; i < s.length / k; i++) {
    html += calculateHash(s.slice(k * i, k * i + k));
}
console.log(html);

function calculateHash(data) {
    let store = 0;
    let left = 0, right = data.length - 1;
    while (left <= right) {
        if (left === right) {
            store += (data[left].charCodeAt() - 97);
        } else {
            store += (data[left].charCodeAt() - 97);
            store += (data[right].charCodeAt() - 97);
        }
        left++;
        right--;
    }
    return String.fromCharCode((store % 26) + 97);
}
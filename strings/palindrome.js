//--------------------- Conventional approach ---------------------//
function palindrome(data) {
    let html = ""
    for (let i = data.length - 1; i >= 0; i--) {
        html += data[i];
    }
    return html === data;
}

const output = palindrome('level');

console.log('output:- ', output);

//--------------------- Modern approach ---------------------//
let str = "level";
let joinStr = str.split('').reverse().join('');
console.log('str:- ', str === joinStr);
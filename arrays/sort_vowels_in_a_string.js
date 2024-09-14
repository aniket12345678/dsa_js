let s = "lEetcOde";
// let s = "lYmpH";

function vowelSort(data) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    if (!vowelExists(data, arr)) {
        return data;
    }
    else {
        let strArr = Array.from(data), emptyArr = [];
        for (let i = 0; i < strArr.length; i++) {
            if (arr.includes(strArr[i].toLowerCase())) {
                emptyArr.push(strArr[i]);
                delete strArr[i];
            }
        }
        let sortedVowel = emptyArr.sort(), count = 0;
        for (let j = 0; j < strArr.length; j++) {
            if (!strArr[j]) {
                strArr[j] = sortedVowel[count];
                count++;
            }
        }
        return strArr.join('');
    }
}

const output = vowelSort(s);
console.log('output:- ', output);

function vowelExists(data, arr) {
    for (let i = 0; i < data.length; i++) {
        if (arr.includes(data[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
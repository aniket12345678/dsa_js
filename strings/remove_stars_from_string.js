let s = "leet**cod*e";
// let s = "erase*****";

function removeStars(data) {
    if (!data.includes('*')) {
        return data;
    } else {
        const index = data.indexOf('*');
        return removeStars(data.slice(0, index - 1) + data.slice(index + 1, data.length))
    }
}

const output = removeStars(s);
console.log('output:- ', output);

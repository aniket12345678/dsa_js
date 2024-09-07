let s = "abbaca";

function removeDuplicates(data) {
    let stack = [];
    for (let i = 0; i < data.length; i++) {
        let char = data.charAt(i);
        if (stack.length === 0 || stack[stack.length - 1] !== char) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}

const finalAns = removeDuplicates(s);
console.log('finalAns:- ', finalAns);
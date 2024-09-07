let s = "daabcbaabcbc", part = "abc";

var removeOccurrences = function (s, part) {
    if (!s.includes(part)) {
        return s;
    }
    else {
        return removeOccurrences(s.replace(part, ""), part)
    }
};

const output = removeOccurrences(s, part);

console.log('output:- ', output);

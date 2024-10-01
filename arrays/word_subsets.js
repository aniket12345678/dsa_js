let words1 = ["amazon", "apple", "facebook", "google", "leetcode"], words2 = ["l", "e"];

let result = [];

for (let k = 0; k < words1.length; k++) {
    let store = Array.from(words1[k]);
    let left = 0, right = store.length - 1;
    while (left <= right) {
        console.log(store[left], store[right]);
        for (let j = 0; j < words2.length; j++) {
            const element = words2[j];
            if (condition) {
                
            }

        }

        left++;
        right--;
    }
}
let nums1 = [1, 3], nums2 = [2];


function sortedArr(a, b) {
    let left = 0, right = 0;
    let store = []
    while (left < a.length && right < b.length) {
        if (a[left] < b[right]) {
            store.push(a[left]);
            left++;
        }
        else {
            store.push(b[right]);
            right++;
        }
    }

    while (left < a.length) {
        store.push(a[left]);
        left++;
    }
    while (right < b.length) {
        store.push(b[right]);
        right++;
    }
    return store;
}

const output = sortedArr(nums1, nums2);
console.log(output);

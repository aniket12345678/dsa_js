let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let store = 0;

let left = 0, right = height.length - 1;

while (left < right) {
    store = Math.max(store, (Math.min(height[left], height[right]) * (right - left)))
    if (height[left] === height[right]) {
        ++left;
        --right;
    }
    else if (height[left] < height[right]) {
        ++left;
    }
    else if (height[left] > height[right]) {
        --right;
    }
}
console.log('store:- ', store);


//----------------------------------------- 1st method -----------------------------------------//
// for (let i = 0; i < height.length; i++) {
//     let backCount = 0, frontCount = 0;
//     for (let j = i - 1; j >= 0; j--) {
//         backCount++;
//         if (store < Math.min(height[i], height[j]) * backCount) {
//             store = Math.min(height[i], height[j]) * backCount;
//         }
//     }

//     for (let k = i + 1; k < height.length; k++) {
//         frontCount++;
//         if (store < Math.min(height[i], height[k]) * frontCount) {
//             store = Math.min(height[i], height[k]) * frontCount;
//         }
//     }
// }

// console.log('store:- ', store);

//----------------------------------------- 2nd method -----------------------------------------//
// for (let i = 0; i < height.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < height.length; j++) {
//         count++;
//         if (store < Math.min(height[i], height[j]) * count) {
//             store = Math.min(height[i], height[j]) * count;
//         }
//     }
// }

// console.log(store);
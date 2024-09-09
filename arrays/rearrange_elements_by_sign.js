let nums = [3, 1, -2, -5, 2, -4];

function segreGate(data) {
    for (let i = 0; i < data.length; i++) {
        if ((i ^ 1) === i + 1) {
            if (data[i] < 0) {
                let count = '';
                for (let j = i; j < nums.length; j++) {
                    if (nums[j] > -1) {
                        count = j;
                        break;
                    }
                }
                data[i] = data[count] + data[i];
                data[count] = data[count] - data[i];
                data[i] = data[count] - data[i];
            }
        } else {
            if (data[i] > -1) {
                let count = '';
                for (let k = i; k < nums.length; k++) {
                    if (nums[k] < 0) {
                        count = k;
                        break;
                    }
                }
                data[i] = data[count] + data[i];
                data[count] = data[i] - data[count];
                data[i] = data[i] - data[count];
            }
        }
    }
    return data;
}

const output = segreGate(nums);
console.log('output:- ', output);


// function segreGate(data) {
//     let negative = [], positive = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] < 0) {
//             negative.push(data[i]);
//         } else {
//             positive.push(data[i])
//         }
//     }
//     return { negative: negative, positive: positive }
// }

// const output = segreGate(nums);
// let left = 0, right = 0;
// let emptyArr = []
// while (left < output.negative.length && right < output.positive.length) {
//     emptyArr.push(output.positive[right++], output.negative[left++]);
// }
// console.log('emptyArr:- ', emptyArr);
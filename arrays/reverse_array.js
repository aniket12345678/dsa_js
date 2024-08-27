const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

//--------------------- Conventional approach ---------------------//
console.log('before reverse:- ', sampleArray);

let left = 0, right = sampleArray.length - 1;

while (left < right) {
    sampleArray[left] = sampleArray[left] + sampleArray[right];
    sampleArray[right] = sampleArray[left] - sampleArray[right];
    sampleArray[left] = sampleArray[left] - sampleArray[right];
    ++left;
    --right;
}

console.log('after reverse:- ', sampleArray);

//--------------------- Modern approach ---------------------//

console.log('Modern approach:- ', sampleArray.reverse());

const sampleArray = [3, 8, 1, 5, 9, 2, 7, 4, 6];

//--------------------- Conventional approach ---------------------//

let largest = sampleArray[0]

for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > largest) {
        largest = sampleArray[i];
    }
}
console.log('largest:- ', largest);

//--------------------- Modern approach ---------------------//
console.log('largest:- ', Math.max(...sampleArray));
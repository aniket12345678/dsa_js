const sampleArray = [3, 8, 0, 0, 9, 2, 0, 4, 6, 0];

//--------------------- Conventional approach ---------------------//
let i = 0;

while (i < sampleArray.length) {
    if (sampleArray[i] === 0) {
        let status = true, count = i;
        while (status) {
            count++;
            if (sampleArray[count] !== 0) {
                status = false;
            }
        }
        if (count < sampleArray.length) {
            sampleArray[i] = sampleArray[i] + sampleArray[count];
            sampleArray[count] = sampleArray[i] - sampleArray[count];
            sampleArray[i] = sampleArray[i] - sampleArray[count];
        }
    }
    i++;
}

console.log('sampleArray:- ', sampleArray);

//--------------------- Modern approach ---------------------//
const output = [...sampleArray.filter((x) => x !== 0), ...sampleArray.filter((x) => x === 0)];
console.log('output:- ', output);

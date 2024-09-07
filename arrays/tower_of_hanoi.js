function towerofHanoi(n, start, destination, using) {
    if (n === 1) {
        console.log(`Move ${n} rod from ${start} to ${destination}`);
        return;
    } else {
        towerofHanoi(n - 1, start, using, destination);
        console.log(`Move ${n} rod from ${start} to ${destination}`);
        towerofHanoi(n - 1, using, destination, start);
    }
}

const output = towerofHanoi(3, 'A', 'C', 'B');

console.log(output);

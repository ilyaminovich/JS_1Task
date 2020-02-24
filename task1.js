function random(min, max){
    let array = [];
    let counter = 0;
    while(counter < 10) {
        let randomNumber = (Math.round(min + Math.random() * (max - min)));
        counter++;
        array.push(randomNumber);
    }
array.sort(function sortDescending(a, b) {
    return b - a;
});
let arrayMultiply = array[0] * array[1] * array[2];
console.log(array);
console.log(arrayMultiply);
}

random(1, 10);
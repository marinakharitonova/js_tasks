// случайное дробное число от min до но не включая max
function random(min, max) {
    return min + Math.random() * (max - min);
}
// случайное целое число от min до включая max
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log( randomInteger(1, 3) );
console.log(random(3, 10));




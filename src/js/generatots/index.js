// генератор
function* createGen(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }

}

let gen = createGen(3, 9);

for (let elem of gen) {
    console.log(elem);
}

// композиция генераторов (вкладываем один в другой)
function* createSequence() {
    yield* createGen(0, 5);
    yield* createGen(20, 30);

}

let sequence = createSequence();
for (let elem of sequence) {
    console.log(elem);
}

// генератор в перебираемом объекте
const iterable = {
    from: 10,
    to: 19,

    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++){
            yield i
        }
    }
}

for (let elem of iterable){
    console.log(elem);
}

function* bilateralGen(){
    let name = yield 'What is your name?'
    console.log(name);
    yield `Nice to meet you, ${name}!`
    let age = yield 'How old are you?'
    console.log(age);
    if (age < 18){
        yield '=)'
    } else yield '<3'

}

let biGen = bilateralGen();
console.log(biGen.next().value);
console.log(biGen.next('Marina').value);
console.log(biGen.next().value);
console.log(biGen.next(27).value);

// генератор псевдослучайных чисел
function* pseudoRandom(seed) {
    while (true){
        let next = seed * 16807 % 2147483647;
        seed = next;
        yield next
    }
}
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
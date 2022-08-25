// ф-ция shuffle перемешивает массив случайным образом, для реализации исп-ся алгоритм Тасование Фишера-Йетса
// Проходим по массиву в обратном порядке и меняем местами текущий элемент и случайный элемент не правее его
// (можно поменять и с ним самим)

function shuffle(array){
    for (let i = array.length - 1; i > 0 ; i--) {
        let temp = Math.floor(Math.random() * (i + 1));
        [array[temp], array[i]] = [array[i], array[temp]]
    }
}

const arr = [1,2,3,4,5,6];
shuffle(arr);
console.log(arr);

// подсчёт вероятности для всех возможных вариантов
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
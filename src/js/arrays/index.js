let array = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 3, 4, 6, 7, 8];
console.log(`исходный массив:`, array);
// -----------------------------------------------------------------------------------------------
let temp = array.filter((value, index, arr) => arr.indexOf(value) !== index)
let doublesArr = [...new Set(temp)] //массив дубликатов
console.log(`массив дубликатов:`, doublesArr);
// -----------------------------------------------------------------------------------------------
let singlesArr = array.filter((elem, index, arr) => arr.indexOf(elem) === index) //массив без дубликатов
let singlesArr2 = [...new Set(array)] //массив без дубликатов
console.log(`массив без дубликатов:`, singlesArr);
// -----------------------------------------------------------------------------------------------
let obj = {}
let maxCount = 0;
let res;

for (let elem of array) {
    obj[elem] = (obj[elem] || 0) + 1;

    // найти наиболее повторяющийся элемент и его количество повторений
    if (obj[elem] > maxCount) {
        maxCount = obj[elem];
        res = elem;
    }
}

console.log(`количество повторений элементов в массиве:`, obj);
console.log(`Наиболее повторяющийся элемент: ${res}, количество повторений: ${maxCount}`);
// -----------------------------------------------------------------------------------------------
let arr2 = [2, 1, 3, 8, 5];
let arr3 = [0, 1, 2, 3, 4, 5];

// функция, которая опредедяет отсортирован ли массив
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

console.log(isSorted(arr2));
console.log(isSorted(arr3));
// -----------------------------------------------------------------------------------------------
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let arr5 = [2, 7, 8, 9, 12, 15, 5];

let intersection = arr4.filter(elem => arr5.includes(elem));
console.log(`Пересечение массивов:`, intersection);

let union = [...new Set(arr4.concat(arr5))];
console.log(`Объедининие массивов:`, union);

let difference = arr4.filter(elem => !arr5.includes(elem))
let difference1 = arr5.filter(elem => !arr4.includes(elem))
console.log(`Разность:`, difference, difference1);

let difference3 = [...difference1, ...difference];
console.log(`Симетричная разность:`, difference3);
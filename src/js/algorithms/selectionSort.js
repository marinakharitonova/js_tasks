// Сортировка выбором: ищем минимальный элемент и меняем с нулевым, ищем следующий минимальный и меняем с первым и.т.д.
// Сложность: O(n^2)

const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            count++;

            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }

    return arr;
}

console.log(selectionSort(arr));
console.log(count);

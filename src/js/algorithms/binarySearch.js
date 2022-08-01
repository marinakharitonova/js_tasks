// Алгоритм бинарного поиска: работает на отсортированном массиве. Делим массив пополам и откидываем левую или правую часть,
// и так дальше, пока не дойдем до искомого значения. Хорошо работает только на отсортированном массиве, сортировать массив не имеет смысла,
// т.к O(n) сортировки больше, чем у линейного поиска
// Сложность алгоритма: O(log2 n) (log2 n - показатель степени, в которую нужно возвести 2, чтобы получить n)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

const binarySearch = (arr, number) => {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    let isFound = false;
    let position = -1;

    while (!isFound && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === number) {
            position = middle;
            isFound = true;
            return position;
        }

        if (number < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position
}

console.log(binarySearch(arr, 0));
console.log(count);

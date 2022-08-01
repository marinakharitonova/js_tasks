// Алгоритм линейного поиска: есть искомый элемент, и мы последовательно сравниваем его со всеми элементами массива.
// Сложность алгоритма: O(n)

const arr = [7, 8, 5, 3, 1, 9, 0, 4, 2, 6];
let count = 0;

const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr, 9));
console.log(count);

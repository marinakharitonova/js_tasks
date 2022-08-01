// Поиск максимальной суммы в подмассиве
function getMaxSubSum(arr) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
        max = Math.max(max, sum);
        sum = sum < 0 ? 0 : sum;
    }

    return max;
}

console.log(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]));
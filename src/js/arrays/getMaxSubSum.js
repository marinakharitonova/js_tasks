// Поиск максимальной суммы в подмассиве
// Kadane's algorithm
function getMaxSubSum(arr) {
    let currSum = 0;
    let result = {
        startIndex: 0,
        endIndex: 0,
        sum: 0
    };

    for (let i = 0; i < arr.length; i++) {
        currSum = arr[i] + currSum;

        if (currSum > result.sum){
            result.sum = currSum;
            result.endIndex = i;
        }

        if (currSum < 0){
            currSum = 0;
            result.startIndex = result.endIndex + 1;
        }
    }

    return result;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //11
console.log(getMaxSubSum([-2, -1, 1, 2])); //3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //100
console.log(getMaxSubSum([1, 2, 3])); //6
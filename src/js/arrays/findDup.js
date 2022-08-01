const arr = [2, 3, 4, 5, 6, 4, 1]
const findDup = arr => {
    let dup = -1;
    for (let i = 0; i < arr.length; i++) {
        let curr = Math.abs(arr[i])

        if (arr[curr] < 0) {
            dup = curr
        }
        arr[curr] *= -1;
    }

    return dup
}

console.log(findDup(arr));

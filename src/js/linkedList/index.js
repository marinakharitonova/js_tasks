let arr = [1, 2, 3]

// сделать спписок например из массива
const makeList = function (arr) {
    let res = {};
    let temp = res;

    for (let elem of arr) {
        temp.next = {val: elem, next: null};
        temp = temp.next;
    }

    return res.next
};

let list = makeList(arr);

// перебрать список и вывести его значения, переменная temp, чтобы не менять список во время прохода
let temp = list;
while (temp){
    console.log(temp.val);
    temp = temp.next;
}


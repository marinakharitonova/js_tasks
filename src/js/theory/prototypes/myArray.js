class myArray extends Array { // наследуемся от встроенного объекта
    isEmpty() {
        return this.length === 0
    }
}

let myArr = new myArray(1,2,3,4)

console.log(myArr);

console.log(myArr.join('-')); // наследует методы родителя

console.log(myArr.isEmpty());

console.log(myArray.isArray(null)); // наследует статические методы родителя
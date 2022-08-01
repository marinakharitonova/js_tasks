function cloneObject(obj) {
    let newObject = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObject[key] = cloneObject(obj[key])
        } else {
            newObject[key] = obj[key]
        }

    }

    return newObject
}

let obj = {
    sayHi() {
        alert('Hello' + this.c)
    },
    b: {d: 4, e: {f: 5, g: 10}},
    c: 3
}
let newObj = cloneObject(obj);

console.log(newObj === obj);
console.log(obj.b === newObj.b);
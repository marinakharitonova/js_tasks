function sayHi() {
    console.log(this); //undefined в строгом режиме, в нестрогом window
}

sayHi();

//------------------------------------------------------------------------

//стрелочная функция не имеет своего this, берет его снаружи
let obj = {
    user: 'cat',
    sayHi() {
        let arrow = () => console.log(`Hello, ${this.user}`);
        arrow();
    }
}

// метод объекта имеет домтуп с объекту через this
const obj1 = {
    user: 'Marina',
    sayHi() {
        console.log(`Hello, ${this.user}`)
    }
}

obj1.sayHi();
obj.sayHi()

let obj3 = {
    go() {
        console.log(this);
    }
}

obj3.go()

//-------------------------------------------------------------------------

function makeUser() {
    return {
        name: 'User',
        ref: this
    }
}

let user = makeUser();
console.log(user.name);
console.log(user.ref); // undefined, т.к this == undefined внутри makeUser
//console.log(user.ref.name); // ошибка, т.к user.ref == undefined

function makeUser1() {
    return {
        name: 'User',
        ref() {
            return this
        }
    }
}

let user1 = makeUser1();
console.log(user1.ref().name);

//---------------------------------------------------------------------------------
// объект возвращат сам себя в каждом методе, что позволяет сделать епочку вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
    }
};

ladder.up().up().up().down().showStep();
//-------------------------------------------------------------------------------
// Нужно чтобы результаты вызова двух функции конструкторов были равны, поэтому пусть они
// возвратят один и тот же объект, определенный снаружи

let myObj = {}

function A() {
    return myObj;
}

function B() {
    return myObj;
}

let a = new A;
let b = new B;

console.log(a == b); // true

//-----------------------------------------------------------------------------------

{
    let obj = {
        name: 'Marina',
        age: 26
    }

    let obj1 = {
        name: 'Nikita',
        age: 27
    }

    console.log(obj1 + obj); //[object Object][object Object] -  оба объекта реализуют только метод toString
}

//------------------------------------------------------------------------------------
{
    let obj = {
        name: 'Marina',
        age: 26,
        [Symbol.toPrimitive]: function (hint) {
            return hint === 'string' ? this.name : this.age;
        }
    }

    let obj1 = {
        name: 'Nikita',
        age: 27,
        toString() {
            return this.name;
        },
        valueOf() {
            return this.age;
        }
    }

    console.log(obj1 + obj);
    console.log(String(obj1) + ' ' + String(obj));
}

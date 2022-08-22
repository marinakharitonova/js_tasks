class Animal {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log('Hello, I am ' + this.name)
    }

    sleep() {
        console.log(`Z-z-z... ${this.name} sleeps..`)
    }
}

class Cat extends Animal {
    [Symbol.toStringTag] = 'Cat' // определим св-во и выведем в строке (*)

    say() {
        console.log('Meeeeoooooow!')
        setTimeout(() => super.say(), 1000) // Используем здесь сьрелочную ф-цию, т.к у нее нет super, при function была бы ошибка
    }

    static [Symbol.hasInstance](obj) {
        if (obj.say) return true
    }
}

let cat = new Cat('Mao')
cat.say()

console.log(cat instanceof Animal);  // это экземпляр Animal

console.log(cat instanceof Object); // и это экземпляр Object


console.log(Object.prototype.toString.call([1, 2, 3])); // в контексте массива выведет [Object Array]

console.log(Object.prototype.toString.call(1)); // [Object Number]

console.log(Object.prototype.toString.call(cat)); // (*) [Object Cat]

// напишем свою ф-цию, которая возвращает тип
function myTypeof(obj) {
    let str = Object.prototype.toString.call(obj);
    return str.split(' ')[1].slice(0, -1)
}

console.log(myTypeof(function (){}));
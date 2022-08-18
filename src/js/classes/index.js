class Animal {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log('Hello, I am ' + this.name)
    }

    sleep(){
        console.log(`Z-z-z... ${this.name} sleeps..`)
    }
}

class Cat extends Animal {
    say() {
        console.log('Meeeeoooooow!')
        setTimeout(() => super.say(), 1000) // Используем здесь сьрелочную ф-цию, т.к у нее нет super, при function была бы ошибка
    }
}

let cat = new Cat('Mao')
cat.say()
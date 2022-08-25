// это примесь 1
let sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

// это примесь, которая наследуется от примеси 1
let sayHiMixin = {
    sayHi() {
        super.say(`Hello, my name is ${this.name}`)
    },

    sayBye() {
        super.say('Bye-bye ;)')
    }
}

Object.setPrototypeOf(sayHiMixin, sayMixin)

class User {
    constructor(name) {
        this.name = name;
    }
}

// добавляем методы примеси в прототип нашего класса
Object.assign(User.prototype, sayHiMixin)

let user = new User('John')

user.sayHi()
user.sayBye()
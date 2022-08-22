// паттерн Observer
// Идея паттерна Observer заключается в создании зависимости типа один ко многим. При изменении состояния
// одного объекта(субъекта), зависящие от него объекты(наблюдатели) об этом оповещаются и обновляются.
// Это нужно для согласования состояния взаимосвязанных объектов без их жесткой связанности.

// это класс Observable для объекта, за которым будем наблюдать
class Observable {
    constructor() {
        this.eventHandlers = {}
    }

    // подписаться
    on(eventName, handler) {
        if (!this.eventHandlers) this.eventHandlers = {}
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = []
        }
        this.eventHandlers[eventName].push(handler);
    }

    //отписаться
    off(eventName, handler) {
        if (!this.eventHandlers || !this.eventHandlers[eventName]) return;
        this.eventHandlers[eventName] =
            this.eventHandlers[eventName].filter((elem) => elem !== handler);
    }

    //уведомить подписчиков
    emit(eventName, ...args) {
        if (!this.eventHandlers || !this.eventHandlers[eventName]) {
            return;
        }
        this.eventHandlers[eventName].forEach(handler => handler(...args));
    }

}

class User extends Observable {
    constructor(name) {
        super();
        this.name = name;
    }

    post(text) {
        let message = (`User ${this.name} posts: ${text}`);
        console.log(message);
        console.log(this.eventHandlers);
        this.emit('post', this.name, text)
    }

    login(login, password) {
        console.log(`User ${this.name} logged in!`)
        this.emit('login', login)
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }

    read(from, message) {
        console.log(`Subscriber ${this.name} read message "${message}" from ${from}`)
    }

    subscribe(obj) {
        this.boundaryFn = this.read.bind(this)
        obj.on('post', this.boundaryFn)
    }

    unsubscribe(obj) {
        obj.off('post', this.boundaryFn)
        this.boundaryFn = null;
    }
}

class Calendar {
    name = '2022 calendar';
    show(login) {
        console.log(`New calendar "${this.name}" for ${login} created!`)
    }
}


let user = new User("John")
let subscr1 = new Subscriber("Matt");
let subscr2 = new Subscriber("Mary");
let calendar = new Calendar();

subscr1.subscribe(user);
subscr2.subscribe(user);

user.on('login', calendar.show.bind(calendar))

user.login('john95', 'qwerty1')
user.post("Hello everyone");

subscr1.unsubscribe(user);
user.post("Bye-bye");

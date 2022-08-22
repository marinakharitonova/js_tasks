const eventMixin = {
    on(eventName, handler) {
        if (!this.eventHandlers) this.eventHandlers = {}
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = []
        }
        this.eventHandlers[eventName].push(handler);
    },


    off(eventName, handler) {
        if (!this.eventHandlers || !this.eventHandlers[eventName]) return;
        this.eventHandlers[eventName] =
            this.eventHandlers[eventName].filter((elem) => elem !== handler);
    },

    emit(eventName, ...args) {
        if (!this.eventHandlers || !this.eventHandlers[eventName]) {
            return;
        }
        this.eventHandlers[eventName].forEach(handler => handler(args));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(`User ${this.name} logged in!`)
        this.emit('login', this.name)
    }
}

class Calendar {
    constructor() {
        this.name = "2022 calendar";
    }

    show(user) {
        console.log(`Show "${this.name}" for ${user}`)
    }
}


Object.assign(User.prototype, eventMixin)

let john = new User("John");
let calendar = new Calendar();

john.on('login', calendar.show.bind(calendar))

john.login()

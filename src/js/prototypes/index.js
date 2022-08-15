// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    let self = this;
    return function (...args) {
        setTimeout(() => self.apply(this, args), ms)
    }
}

f.defer(1000)(1, 2);
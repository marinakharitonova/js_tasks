// конструктор промиса принимает ф-цию executor c двумя агркмкнтами: resolve, reject
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('first'), 1000)
})

promise
    // then принимает 2 ф-ции, первая вызывается в случае успеха, вторая в случае ошибки
    .then((res) => {
            console.log(`This is result: ${res}`);
            return new Promise((resolve) => {
                setTimeout(() => resolve('second'), 1000)
            })
        },
        (err) => console.log(`This is error: ${err}`))
    .then((res) => console.log(`This is result: ${res}`))


// в данном случае catch на поймает ошибку, т.к он как и обычный try/catch ловит только синхронные ошибки,
// а здесь она внутри асинхронного setTimeout
new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// как вот здесь поймает
try {
    throw new Error("Whoops!");
} catch (e) {
    console.log(e)
}
// а вот здесь уже не поймает, т.к асинхронно
try {
    setTimeout(() => {
        throw new Error("Whoops!")
    }, 1000)
} catch (e) {
    console.log(e)
}

// Рассмотрим статические методы промисов
let promiseA = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error')), 1000)
})

let promiseB = new Promise((resolve, reject) => {
    setTimeout(() => resolve('value B'), 2000)
})

let promiseC = new Promise((resolve, reject) => {
    setTimeout(() => resolve('value C'), 3000)
})

Promise.all([promiseA, promiseB, promiseC])
    .then((values) => {
        let mappedValues = values.map(el => `value ${el}`);
        return mappedValues
    })
    .then((values) => console.log(values))
    .catch((err) => console.log(`Error ${err}`))

Promise.allSettled([promiseA, promiseB, promiseC])
    .then(values => {
        console.log(values);
        let successValues = values.filter(el => el.status === "fulfilled").map(el => el.value)
        console.log(successValues);
    })

let firstPromise = Promise.race([promiseA, promiseB, promiseC]);
firstPromise.then((value) => console.log(`Value: ${value}`), (err) => console.log(`Error: ${err}`))

// Промисификация: когда есть ф-ция принимающая аршументы и коллбэк, а мы хотим переделать ее на промисы
function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);
            f.call(this, ...args);
        })
    }
}
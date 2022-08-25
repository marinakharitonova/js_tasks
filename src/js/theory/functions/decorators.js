{
    // декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls

    function spy(func) {
        function wrapper(...args) {
            wrapper.calls.push(args)
            func.apply(this, args)
        }

        wrapper.calls = [];

        return wrapper
    }

    function work(a, b) {
        alert( a + b ); // произвольная функция или метод
    }

    work = spy(work);

    work(1, 2); // 3
    work(4, 5); // 9

    for (let args of work.calls) {
        alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
    }
}
{
    // декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
    function delay(original, ms) {
        return function () {
            setTimeout(original.bind(this, ...arguments), ms)
        }
    }

    function f(x) {
        console.log(x);
    }

    let obj = {
        surname: 'Mary',
        sayHi() {
            console.log('Hello ' + this.surname)
        }
    }

    // создаём обёртки
    let f1000 = delay(obj.sayHi, 1000);
    let f1500 = delay(f, 1500);

    f1000("test"); // показывает "test" после 1000 мс
    f1500("test"); // показывает "test" после 1500 мс
}

{
    // Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного
    // раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные
    // вызовы будут игнорироваться в течение ms.


    function debounce(original, ms) {

        wrapper.time = 0;

        function wrapper() {
            if (Date.now() - wrapper.time > ms) {
                original.apply(this, arguments);
                wrapper.time = Date.now();
            }
        }

        return wrapper;
    }

    let g = debounce(console.log, 1000);

    g(1); // выполняется немедленно
    g(2); // проигнорирован

    setTimeout(() => g(3), 100); // проигнорирован (прошло только 100 мс)
    setTimeout(() => g(4), 1100); // выполняется
    setTimeout(() => g(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
}

{
    // «тормозящий» декоратор throttle
    // возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают
    // в период «торможения», игнорируются.
    // Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

    function throttle(f, ms) {
        let canGo = true;
        let lastArguments;
        let lastThis;

        function wrapper(...args) {
            if (!canGo) {
                lastArguments = args;
                lastThis = this;
                return
            }
            f.apply(this, arguments);
            canGo = false;

            setTimeout(() => {
                canGo = true;
                if (lastArguments) {
                    f.apply(lastThis, lastArguments);
                }
                lastThis = null;
                lastArguments = null;
            }, ms)
        }

        return wrapper;
    }

    function f(a) {
        console.log(a)
    }

// f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(f, 1000);

    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)
    setTimeout(() => f1000(4), 2000)
}
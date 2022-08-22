// подход  - Обертывание исключений
// Оборачиваем все низкоуровневые ошибки классом ReadError
// Когда мы вызываем ReadUser, мы не хотим перебирать в catch все возможные ощибки, которые могут возникнуть,
// поэтому мы оборачиваем их в ReadError, и при вызове ReadUser проверяем только ошибку ReadError

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = 'ReadError';
        this.cause = cause;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(prop) {
        super(`No field "${prop}"`);
        this.name = 'PropertyRequiredError';
    }
}

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Синтаксическая ошибка", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Ошибка валидации", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{"name": "Qaw"}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        console.log("Исходная ошибка: " + e.cause);
    } else {
        throw e;
    }
}

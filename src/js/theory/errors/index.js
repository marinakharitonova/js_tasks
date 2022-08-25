let json = '{"name": "John", "age": "20"}'

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError'
    }
}

class PropertyRequiredError extends ValidationError{
    constructor(field) {
        super(`There is no field "${field}"`);
        this.name = 'PropertyRequiredError';
        this.field = field;
    }
}

function parseJSON(json) {
    let obj = JSON.parse(json);

    if (!obj['cat']) {
        throw new PropertyRequiredError('cat')
    }

    if (!obj['age']) {
        throw new PropertyRequiredError('age')
    }

    console.log('Cat name is ' + obj.cat); // если выше выбросится ошибка, сюда выполнение не перейдет
}

try { // это внешний try для други ошибок скрипта
    try {
        parseJSON(json);

    } catch (e) {
        if (e instanceof ValidationError) {
            console.log('Invalid data: ' + e.message);
        } else if (e instanceof SyntaxError){
            console.log('JSON syntax error: ' + e.message);
        } else throw e
    }
} catch (e) {
    console.log(e.name + ': ' + e.message)
} finally {
    console.log('Fin!')
}

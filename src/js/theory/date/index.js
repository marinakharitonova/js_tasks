// создать дату 20 февраля 2012 года, 3 часа 12 минут
let date = new Date(2012, 1, 12, 3,12);
alert(date)

// Функция, ктороя возвращает название дня недели
function getWeekDay(date){
    const vocabulary = {
        0: 'ВС',
        1: 'ПН',
        2: 'ВТ',
        3: 'СР',
        4: 'ЧТ',
        5: 'ПТ',
        6: 'СБ',
    }

    return vocabulary[date.getDay()]
}

// Функция возвращает, какое было число за days дней до даты date, и не меняет date
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

// Функция возвращает последнее число переданного месяца: передедим в дату 0, технически тако значение передать нельзя,
// но дата сама себя поправит и будет последнее число предыдущего месяца (а месяц +1)
function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// Функция считает, сколько секунд прошло с начала сегодняшнего дня
function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
}

// Сколько секунд осталось до завтра
function getSecondsToTomorrow(){
    let today = new Date();

    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    let diff = Math.round((tomorrow - today) * 1000);

    return diff
}

// как отформатировать дату в формат 31.12.2016, 20:00
// добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
let d = date;
d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
].map(component => component.slice(-2)); // взять последние 2 цифры из каждой
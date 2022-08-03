// убрать цикличные ссылки и сериализовать объект (с цикличными ссылками не получится)
// проверяем условие в ф-ции replacer, проверка key !== "" нужна потому, что при первом вызове replacer
// в него передается key: '', а value: целевой объект, в нашем случает это и есть meetup

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value === meetup) ? undefined : value;
}));
import './styles/index.scss'

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList(list) {
    let tmp = list;
    let cash = [];

    while (tmp) {
        cash.push(tmp.value)
        tmp = tmp.next;
    }

    for (let i = cash.length - 1; i > 0; i--) {
        alert(cash[i])
    }


}
//printList(list)

function printList1(list) {
    if (list.next) {
        printList1(list.next)
    }

    alert(list.value)
}

printList1(list)

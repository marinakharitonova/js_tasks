import './styles/index.scss'
import './js/modal'

function readNumber() {
    let num;
    while (true){
        num = prompt('Input a number', '0');
        if (!isFinite(num)){
            break;
        }
        if (num === '' || num === null) break
    }

    return +num
}
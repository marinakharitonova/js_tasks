function shuffle(array){
    let indexArr = [];
    let copy = array.slice();
    array.length = 0;
    while (array.length < copy.length){
        let index = Math.floor(Math.random() * copy.length);
        if (!indexArr.includes(index)){
            indexArr.push(index);
            array.push(copy[index]);
        }
    }

}

const arr = [1,2,3,4,5,6];
shuffle(arr);
console.log(arr);
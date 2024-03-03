// const first={a:2};
// const second={a:2};
// const third=second;
/*
if(third===second){
    console.log('they are same');
}
else{
    console.log('they are different');
}
*/
// do not use this method to compare object or array


const first = { a: 2, c: 3, d: 5 };
const second = { a: 2, b: 3, c: 5 };
// const third=second;
const firstString = JSON.stringify(first);
const secondSteing = JSON.stringify(second);
// console.log(firstString, secondSteing);

if (firstString === secondSteing) {
    console.log('same');
}
else {
    console.log('different');
}


function compareObject(first, second) {
    const firstkeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if (firstkeys.length === secondkeys.length) {
        for (const key of firstkeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);




let value = '';
function reverse(a){
    for (let i = a.length - 1; i >=0; i--) {
        value += a[i];
    }
    return value;
}


export default reverse;
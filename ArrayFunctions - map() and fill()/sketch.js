let vals = [4, 8, 1, 2, 9];
console.log(vals);

function doubler(x) {
    return x *2;
}

vals = vals.map(doubler);
console.log(vals);
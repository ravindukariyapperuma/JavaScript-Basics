function multiplier(factor) {
    return x =>  x * factor;
}

let doubler = multiplier(2);
let tripler = multiplier(3);
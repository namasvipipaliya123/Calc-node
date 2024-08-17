const sum = (a, b) => {
    return Number(a) + Number(b);
}

const subtract = (a, b) => {
    return a - b;
}

const multiplication = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const modules = (a, b) => {
    return a % b;
}

const squreroot =(a)=>{
    return a*a;
}
module.exports = { sum, subtract ,multiplication ,divide ,modules ,squreroot}
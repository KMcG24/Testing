const sum = (x,y) => x - y;
const subtract = (x, y) => x - y;


const actual = sum (3,4)
const expected = 7

if (actual !== expected){
    throw new Error(`${actual}` is not equal to `${expected}`)
}
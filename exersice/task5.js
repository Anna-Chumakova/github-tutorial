// Write a function, persistence, that takes in a positive parameter
// num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits
// in num until you reach a single digit.

function persistence(num) {
    let count = 0;
    
    while (num >= 10) {
        let res = 1;
        for (let digit of num.toString()) {
            res *= digit
        }
        num = res;
        count += 1
    }
    return count;
}



// const persistence = num => {
//     console.log(`${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0)
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }
persistence(39)
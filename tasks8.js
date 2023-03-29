// This time we want to write calculations
// using functions and get the results.
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


let firstArg = 0;
let secondArg = 0;
let res = 0;
// function zero(value) {
//     if (value) {
//         firstArg = 0;
//         return res;
//     }
    
//     secondArg = 0;
// }
// function one(value) {
//     if (value) {
//         firstArg = 1;
//         return res;
//     }
    
//     secondArg = 1;
// }
// function two(value) {
//     if (value) {
//         firstArg = 2;
//         return res;
//     }
    
//     secondArg = 2;
// }
// function three(value) {
//     if (value) {
//         firstArg = 3;
//         return res;
//     }
    
//     secondArg = 3;
// }
function four(...args) {
    firstArg = 4;
    
    const result = (firstArg, secondArg)
    return result;
}
// function five(value) {
//     if (value) {
//         firstArg = 5;
//         return res;
//     }
    
//     secondArg = 5;
// }
// function six(value) {
//     if (value) {
//         firstArg = 6;
//         return res;
//     }
    
//     secondArg = 6;
// }
// function seven(value) {
//     if (value) {
//         firstArg = 7;
//         return res;
//     }
    
//     secondArg = 7;
// }
// function eight(value) {
//     if (value) {
//         firstArg = 8;
//         return res;
//     }
    
//     secondArg = 8;
// }
function nine( ...args) {
    firstArg = 9;
    console.log(args)
    const result = args(firstArg, secondArg)
    return result;
}

function plus(a, b) {    
    return a + b; 
}
// function minus() {}
// function times() {}
// function dividedBy() { }

// four(plus(nine()));
 //console.log(four())
//console.log(four(plus(four())))
// console.log(four())
// console.log(plus(four()))
console.log(nine(plus(four())))

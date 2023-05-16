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




function zero(func) {
    if (func) {
        const res = eval(`0 ${func}`);
    return Math.trunc(res);
    }
    return 0
}
function one(func) {
   console.log(func);
    if (func) {
        const res = eval(`1 ${func}`);
    
    return Math.trunc(res);
    }
    return 1
}
function two(func) {
    console.log(func);
    if (func) {
        const res = eval(`2 ${func}`);
    
    return Math.trunc(res);
    }
    return 2
}
function three(func) {
   console.log(func);
    if (func) {
        const res = eval(`3 ${func}`);
    
    return Math.trunc(res);
    }
    return 3
}
function four(func) {
    console.log(func);
    if (func) {
        const res = eval(`4 ${func}`);
    
    return Math.trunc(res);
    }
    return 4
}
function five(func) {
    console.log(func);
    if (func) {
        const res = eval(`5 ${func}`);
    
    return Math.trunc(res);
    }
    return 5
}
function six(func) {
    console.log(func);
    if (func) {
        const res = eval(`6 ${func}`);
    console.log(res)
    //return Math.round(res);
        return Math.trunc(res)
    }
    return 6
}
function seven(func) {
    console.log(func);
    if (func) {
        const res = eval(`7 ${func}`);
    
    return Math.trunc(res);
    }
    return 7
}
function eight(func) {
    console.log(func);
    if (func) {
        const res = eval(`8 ${func}`);
    
    return Math.trunc(res);
    }
    return 8
}
function nine( func) {
    console.log(func);
    if (func) {
        const res = eval(`9 ${func}`);
    
    return Math.trunc(res);
    }
    return 9
}

function plus(a) { return `+ ${a}`; }
 function minus(a) {return `- ${a}`}
 function times(a) {return `* ${a}`}
 function dividedBy(a) {return `/ ${a}`}
console.log(six(dividedBy(eight())))

 

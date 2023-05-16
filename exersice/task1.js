// function isValidWalk(walk) {
//     if (walk.length === 10) {
//         console.log(true)
//         return true;
//     } else {
//         console.log(false)
//         return false;
//     }   
// }

function isValidWalk(walk) {
    let valid;
    for (let i = 0; i <= walk.length; i += 1) {
        valid = walk.length === 10 && walk[i] !== walk[i + 1]  
        const result = valid ? true : false
        console.log(result)
        return  result  
    }
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
isValidWalk(['w']);
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
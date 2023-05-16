// You are given an array(list) strarr of strings and an integer k.
//Your task is to return the first longest string consisting
//of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    let longestStr = "";
    for (let i = 0; i <= strarr.length - k; i += 1) {
        const currentStr = strarr.slice(i, i + k).join("")
        if (currentStr.length > longestStr.length) {
            longestStr = currentStr;
        }
    }
    console.log(longestStr)
    return longestStr;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) //abigailtheta
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
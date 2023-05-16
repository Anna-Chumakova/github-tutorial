// функция принимает строку и трансформирует так,
// чтоб первая буква каждого слова была заглавная, а
// все остальные строчные

// 1 способ
// function letterTransformation(str) {
//     const arrayStr = str.split(" ");
//     let words = [];
//     for (let i = 0; i < arrayStr.length; i += 1) {
//         words.push(arrayStr[i][0].toUpperCase() + arrayStr[i].slice(1).toLowerCase());
//     }
//     return words.join(" ");
// }

//2 способ
function letterTransformation(str) {
    let words = [];
    str.split(" ")
        .forEach((element, index, array) => { 
          return words.push(array[index][0].toUpperCase() + array[index].slice(1).toLowerCase());
        })
        console.log(words.join(" "))
    return words.join(" ");
}
letterTransformation('hello world girls');
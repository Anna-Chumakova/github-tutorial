//нужно найти и вывести в консоль самое
//длинное слово(оно может включать цифры и любые другие знаки).
//если длина слов одинаковая, то выводим то, которое стоит первым


function LongestWord(sen) {
sen = sen.trim();
sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
  
let longest = ""

  const arr = sen.split(" ").forEach(word => {
      if(word.length > longest.length) longest = word;
  })

  return longest;

}

LongestWord("my&&// favo./_&?,rite movies555555")

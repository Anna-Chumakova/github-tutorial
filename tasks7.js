function solution(number) {
    let result = 0;

    for (let i = 0; i < number; i += 1  ) {
        if (number[i] % 3 === 0 || number[i] % 5 === 0) {
            result += number[i];
        }
    }
    return result;
}
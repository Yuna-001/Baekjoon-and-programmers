function solution(numbers) {
    numbers.sort((a,b) => {
        const strA = String(a);
        const strB = String(b);
        
        return strA + strB >= strB + strA ? -1 : 1;
    })
    
    return numbers[0] === 0 ? "0" : numbers.join("");
}
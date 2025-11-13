function solution(numbers) {
    numbers.sort((a,b)=>{    
        const strA = String(a);
        const strB = String(b);
        
       return (strB+strA) - (strA+strB);
    });
    
    const result = numbers.join("");
    
    return Number(result) === 0 ? "0" : result;
}
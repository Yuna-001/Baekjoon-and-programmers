function solution(numbers) {
    numbers.sort((a,b)=>{
        const n1 = a.toString() + b.toString();
        const n2 = b.toString() + a.toString();
            
        return n1 > n2 ? -1 : 1;
    });
    
    const result = numbers.join("");
    
    return result[0] === "0" ? "0" : result;
}
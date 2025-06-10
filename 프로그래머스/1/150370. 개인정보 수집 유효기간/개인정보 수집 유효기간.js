function solution(today, terms, privacies) {
    const answer = [];
    
    const todayNumArr = today.split(".").map(v => +v);
    const todayTimestamp = 28*12*todayNumArr[0] + 28*todayNumArr[1] + todayNumArr[2];
    
    const termsMap = new Map();
    
    terms.forEach(term => {
        const [type, period] = term.split(" ");
        termsMap.set(type,period*28);
    })
    
   privacies.forEach((privacy,idx) => {
       const [date, type] = privacy.split(" ");
       const [y,m,d] = date.split(".");
       
       const deadlineTimestamp = 28*12*y + 28*m + 1*d + termsMap.get(type);
       if(deadlineTimestamp <= todayTimestamp) answer.push(idx+1);
   })
    
    return answer.sort((a,b)=>a-b);
}
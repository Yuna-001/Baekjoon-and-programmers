function solution(today, terms, privacies) {
    const result = [];
    const todayArr = today.split(".").map(n => +n);
    
    for(let i=0; i<privacies.length; i++){
        const date = privacies[i].split(" ")[0].split(".").map(n => +n);
        const month = date[1] + +terms.find(term => term[0]===privacies[i].at(-1)).slice(2);
        
        if(month > 12){
            date[0] += ~~((month-1)/12);
            date[1] = (month-1) % 12 + 1;
        } else {
            date[1] = month;
        }
        
        const a = new Date(...todayArr);
        const b = new Date(...date);
        
        if(a >= b) result.push(i+1);   
    }
    
    return result;
}
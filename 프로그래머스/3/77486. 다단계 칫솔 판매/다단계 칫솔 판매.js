function solution(enroll, referral, seller, amount) {
    const PRICE = 100;
    const enrollMap = {};
    const incomeMap = {}
    
    for(let i=0; i<enroll.length; i++){
        enrollMap[enroll[i]] = referral[i];
        incomeMap[enroll[i]] = 0;
    }
    
    for(let i=0; i<seller.length; i++){
        let total = amount[i]*PRICE;
        let person = seller[i];
        
        while(person && person !== "-" && total > 0){
            const giving = Math.floor(total*0.1);
            incomeMap[person] += total - giving;
            total = giving;
            person = enrollMap[person];
        }
    }
    
    return enroll.map(person => incomeMap[person]);
    
}
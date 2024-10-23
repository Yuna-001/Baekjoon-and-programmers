function solution(enroll, referral, seller, amount) {
    const tree = {};
    
    enroll.forEach((p,i)=>{
        tree[p] = {};
        tree[p].referral = referral[i];
        tree[p].earning = 0;
    })
    
    for(let i=0; i<seller.length; i++){
        let current = tree[seller[i]];
        let earning = amount[i] * 100;
        // 추천인이 "-"인 경우 소득은 주고 stop
        // 10%가 1원 미만인 경우 그냥 stop
        while(current){
            const share = Math.floor(earning * 0.1);
            
            if(share < 1){
                current.earning += earning;
                break;
            }
            
            current.earning += earning - share;
            earning = share;
            current = tree[current.referral];
        }
    }
    
    const result = [];
    
     enroll.forEach((p,i)=>{
         result.push(tree[p].earning);
     })
    
    return result;
}
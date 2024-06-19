function solution(n) {
    const nums = [1,2,4];
    const rests = [];
    
    while(n > 0){
        rests.push((n-1)%3);
        n = Math.floor((n-1)/3);
    }
    
    return rests.reduce((acc,cur)=>nums[cur]+acc,"");
}
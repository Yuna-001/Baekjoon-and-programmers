function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n * 1;
    
    while(left <= right){
        const time = Math.floor((left+right)/2);
        
        const people = times.reduce((total,t)=>total+Math.floor(time/t),0);
        
        if(people < n){
            left = time + 1;
        }else{
            right = time - 1;
        }
    }
    
    return left;
}
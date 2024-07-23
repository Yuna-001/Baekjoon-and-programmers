function solution(queue1, queue2) {
    let sum1 = queue1.reduce((total,n,i)=>total+n,0);
    let sum2 = queue2.reduce((total,n,i)=>total+n,0);
    
    if((sum1+sum2)%2) return -1;
    
    const length = queue1.length;
    let arr = [...queue1,...queue2]; 
    let [s1,s2] = [0,length];
    let count = 0;
    
    for(; count<length*3 && sum1 !== sum2 && sum1 * sum2; count++){
        if(sum1 < sum2){
            sum1 += arr[s2];
            sum2 -= arr[s2];
            s2++;
        }else{
            sum1 -= arr[s1];
            sum2 += arr[s1];
            s1++;
        }
    }

    
     return sum1 === sum2 ? count : -1;   
}
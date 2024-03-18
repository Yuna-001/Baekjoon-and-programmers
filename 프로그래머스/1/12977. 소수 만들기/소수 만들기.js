function solution(nums) {
    let count = 0;
    
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(isPrime(nums[i]+nums[j]+nums[k])) count++;
             }
        }
    }
    
    return count;
}

function isPrime(num){
    const sqrt = Math.sqrt(num);
    
    if(Number.isInteger(sqrt)) return false;
    
    for(let i=2; i<=sqrt; i++){
        if(num%i===0) return false;
    }
    
    return true;
}
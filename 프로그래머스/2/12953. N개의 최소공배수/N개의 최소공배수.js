function solution(arr) {
    function getGCD(a,b){
        return a%b===0 ? b : getGCD(b,a%b);
    }
    
    function getLCM(a,b){
        return a*b/getGCD(a,b);
    }
    
    let lcm = arr[0];
    
    for(let i=1; i<arr.length; i++){
        lcm = getLCM(lcm,arr[i]);
    }
    
    return lcm;
}
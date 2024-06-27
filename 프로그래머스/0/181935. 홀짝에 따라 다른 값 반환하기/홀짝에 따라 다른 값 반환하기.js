function solution(n) {
    let result = 0;

    if(n%2){
        for(let i=n; i >0; i-=2){
            result += i;
        }
    }else{
        for(let i=n; i >0; i-=2){
            result += i ** 2;
        }
    }
    
    return result;
}
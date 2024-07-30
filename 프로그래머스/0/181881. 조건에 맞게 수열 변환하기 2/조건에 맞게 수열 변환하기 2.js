function solution(arr) {
    let count = 0;
    let prev;
    let now = [...arr];
    
    do{
        prev = now;
        now = prev.map(n=> (n>=50 && n%2===0) ? n/2 : (n<50 && n%2===1) ? n*2+1 : n);
        count++;
    }while(!now.every((n,i) => n===prev[i]))
        
    return --count;
}
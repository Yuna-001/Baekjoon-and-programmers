function solution(n){
    let usage = 0;
    
    while(n > 1){
        usage += n%2;
        n = Math.floor(n/2);
    }
    
    usage++; // 처음에 1칸 점프한 것
    
    return usage;
}
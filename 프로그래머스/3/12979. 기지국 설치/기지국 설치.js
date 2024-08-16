function solution(n, stations, w) {
    let result = 0;
    
    let start = 1; 
    let end;
    
    for(const station of stations){
        end = station - w -1;
        if(start <= end){
            result += Math.ceil((end-start+1)/(2*w+1));
        }
        start = station + w + 1;
    }
    
    if(start <= n) result += Math.ceil((n-start+1)/(2*w+1));
    
    return result;
}
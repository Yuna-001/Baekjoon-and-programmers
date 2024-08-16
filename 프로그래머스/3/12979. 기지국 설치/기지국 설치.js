function solution(n, stations, w) {
    let result = 0;
    
    let start = 1; 
    let end;
    const buildings = []; 
    
    for(const station of stations){
        end = station - w -1;
        if(start <= end){
            buildings.push([start,end]);
        }
        start = station + w + 1;
    }
    
    if(start <= n) buildings.push([start,n]);
    
    for(let i=0; i<buildings.length; i++){
        [start,end] = buildings[i];
        result += Math.ceil((end-start+1)/(2*w+1));
    }
    
    return result;
}
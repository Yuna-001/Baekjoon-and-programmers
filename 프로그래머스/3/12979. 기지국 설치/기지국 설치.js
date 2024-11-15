function solution(n, stations, w) {
    const noWaves = [];
    
    let building = 1;
    for(const station of stations){
        if(building < station - w){
            noWaves.push([building, station-w-1]);
        }
        building = station + w + 1;
    }
    
    if(building <= n){
        noWaves.push([building,n])
    }
    
    let count = 0;
    
    for(const [start, end] of noWaves){
        count += Math.ceil((end - start + 1) / (2*w+1));
    }
    
    return count;
}
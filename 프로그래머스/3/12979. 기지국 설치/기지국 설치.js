function solution(n, stations, w) {
    let count = 0;
    const range = w * 2 + 1;
    
    let startIndex = 0;
    
    for(let i=0; i<stations.length; i++){
        const endIndex = stations[i] - w - 1;
        
        count += Math.ceil((endIndex - startIndex)/range);
        startIndex = stations[i] + w;
    }

    count += Math.ceil((n-startIndex)/range);

    return count;
}
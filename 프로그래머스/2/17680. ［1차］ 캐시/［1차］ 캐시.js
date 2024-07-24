function solution(cacheSize, cities) {
    let time = 0;
    const cache = new Map();

    for(let i=0; i<cities.length; i++){
        const city = cities[i].toLowerCase(); 
        
        if(cache.has(city)){
            time += 1;
            cache.set(city,i);
        } else {
            time += 5;
            cache.set(city,i);
            if(cache.size > cacheSize) cache.delete(findMinValueKey(cache));
        }
    }
    
    return time;
}

function findMinValueKey(map){
    let minValue = Infinity;
    let minKey;
    
    for(const [key,value] of map){
        if(value < minValue){
            minValue = value;
            minKey = key;
        }
    }
    
    return minKey;
}
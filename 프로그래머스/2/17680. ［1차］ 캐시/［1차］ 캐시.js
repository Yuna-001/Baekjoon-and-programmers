function solution(cacheSize, cities) {
    const queue = [];
    let time = 0;
    
    for(let city of cities){
        city = city.toLowerCase();
        const idx = queue.indexOf(city);
        
        if(idx === -1){
            time += 5;
            queue.push(city);
            if(queue.length > cacheSize) queue.shift();
        } else {
            time += 1;
            queue.splice(idx,1);
            queue.push(city); 
        }
    }
    
    return time;
}
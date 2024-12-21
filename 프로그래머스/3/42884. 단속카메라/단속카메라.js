function solution(routes) {
    routes.sort((a,b)=>a[0]-b[0]);
    let count = 0;
    
    for(let i=0; i<routes.length;){
        let next = i+1;
        let [start, end] = routes[i];
        count++;
        
        while(next < routes.length && routes[next][0] <= end){
            end = Math.min(end, routes[next][1])
            next++;
        }
        
        i=next;
    }
    
    return count;
}
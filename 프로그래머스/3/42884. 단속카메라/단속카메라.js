function solution(routes) {
    routes.sort((a,b)=>a[0]-b[0]);
    
    let count = 1;
    let [start, end] = routes[0];
    
    for(let i=0; i<routes.length;i++){
        if(routes[i][0] <= end){
            end = Math.min(end, routes[i][1]);
        }else{
            count++;
            end = routes[i][1];
        }
    }
    
    return count;
}
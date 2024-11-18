function solution(n, costs) {
    const roots = Array.from({length:n},(_,i)=>i);
    const childrenCount = Array.from({length:n},(_,i)=>i);
    costs.sort((a,b)=>a[2]-b[2]);
    
    let result = 0;
    
    for(let [v1,v2,cost] of costs){
        const root1 = find(roots,v1);
        const root2 = find(roots,v2);
        
        if(root1 === root2) continue;
        
        result += cost;
        roots[root2] = root1;
    }
    
    return result;
}

function find(parents,x){
    if(parents[x] === x) return x;
    
    parents[x] = find(parents,parents[x]);
    
    return parents[x];
}

function union(parents,x,y){
    
}
function find(parent,node){
    if(parent[node] === node) return node;
    parent[node] = find(parent,parent[node]);
    return parent[node];
}

function union(root1, root2, parent, rank){
    if(rank[root1] < rank[root2]){
        parent[root1] = root2;
    }else if(rank[root2] < rank[root1]){
        parent[root2] = root1;
    }else{
        parent[root1] = root2;
        rank[root2]++;
    }
}

function solution(n, costs) {
    const parent = Array.from({length: n},(_,i)=>i);
    const rank = new Array(n).fill(0);
    let minCost = 0;
    let edges = 0;
    
    costs.sort((a,b)=>a[2]-b[2]);
  
    for(const [land1, land2, cost] of costs){
        if(edges === n-1) break;
        
        const root1 = find(parent,land1);
        const root2 = find(parent,land2);
        
        if(root1 === root2) continue;
        
        union(root1,root2,parent,rank);
        minCost += cost;
        edges++;
    }
    
    return minCost;
}
function solution(n, wires) {
    const links = Array.from({length : n+1},()=> new Array());
    const differences = [];
    
    for (const [v1,v2] of wires){
        links[v1].push(v2);
        links[v2].push(v1);
    }
    
    function findFamilyNumber(num,prev){
        let count = 1;
        
        for(const v of links[num]){
            if(v !== prev){
                count += findFamilyNumber(v,num);
            }
        }
        
        differences.push(Math.abs(n-2*count));
        return count;
    }
    
    findFamilyNumber(1)
    
    return Math.min(...differences);
}
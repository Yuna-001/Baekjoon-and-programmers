function solution(n, k, cmd) {
    const up = Array.from({length:n+2},(_,i)=>i-1);
    const down = Array.from({length:n+1},(_,i)=>i+1);
    
    const deletedItems = [];
    
    k += 1;
    
    for(const str of cmd){
        if(str[0] === "C"){
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            
            deletedItems.push(k);
            
            k = down[k] > n ? up[k] : down[k];
        }else if(str === "Z"){
            const restore = deletedItems.pop();
            
            down[up[restore]] = restore;
            up[down[restore]] = restore;
        }else{
            const [op, nStr] = str.split(" ");
            const n = Number(nStr);
            
            if(op === "U"){
                for(let i=0; i<n; i++){
                    k = up[k];
                }
            }else{
                for(let i=0; i<n; i++){
                    k = down[k];
                }
            }
        }
    }
    
    const result = new Array(n).fill("O");
    
    while(deletedItems.length > 0){
        result[deletedItems.pop()-1] = "X"
    }
    
    return result.join("");
}
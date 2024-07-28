function solution(n, [a,b,c], num_list) {
    let start = 0;
    let end = num_list.length-1;
    let step = 1;
    
    switch(n){
        case 1 : end = b; break;
        case 2 : start = a; break;
        case 3 : start = a; end = b; break;
        case 4 : start = a; end = b; step = c;
    }
    
    if(step === 1) return num_list.slice(start,end+1);
    
    const result = [];
    
    for(let i=start; i<=end; i+=step){
        result.push(num_list[i]);
    }
    
    return result;
}
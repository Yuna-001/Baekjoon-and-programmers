function solution(n) {
    const count = count1(n.toString(2));
    
    for(let i=n+1; ;i++){
        if(count === count1(i.toString(2))) return i;
    }
}

function count1(str){
    let count = 0;
    
    for(const c of str){
        if(c==="1") count++;
    }
    
    return count;
}
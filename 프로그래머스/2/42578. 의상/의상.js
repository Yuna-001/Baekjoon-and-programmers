function solution(clothes) {
    const obj = {};
    let result = 1;
    
    for (const clothe of clothes){
        obj[clothe[1]] = ( obj[clothe[1]] || [] );
        obj[clothe[1]].push(clothe[0]);
    }
    
    for(const key in obj){
        // nC1 + (안 입는 경우) 1
        result *= obj[key].length + 1
    }
    
    // 아무것도 안 입는 경우는 빼야하므로 -1
    return result - 1;
}
function solution(array, n) {
    let result;
    let minGap = Infinity;
    
    array.forEach(el => {
        const gap = Math.abs(el-n);
        if(gap < minGap){
            minGap = gap;
            result = el;
        }else if(gap === minGap){
            result = Math.min(result,el);
        }
    })
    
    return result;
}
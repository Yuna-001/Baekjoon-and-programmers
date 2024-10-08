function solution(data, col, row_begin, row_end) {
    const S_i = [];
    
    data.sort((a,b)=> a[col-1] !== b[col-1] ? a[col-1] - b[col-1] : b[0] - a[0]);
    
    for(let i=row_begin-1; i<=row_end-1; i++){
        const total = data[i].reduce((acc,cur)=>acc + (cur%(i+1)),0);
        S_i.push(total);
    }
    
    return S_i.reduce((acc,cur) => acc ^ cur);
}
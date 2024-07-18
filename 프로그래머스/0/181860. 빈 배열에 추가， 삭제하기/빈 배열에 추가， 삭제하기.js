function solution(arr, flag) {
    let x = [];
    
    arr.forEach((n,i)=>{
        if(flag[i]){
            x = [...x, ...new Array(n*2).fill(n)];
        }else{
            x.splice(-n)
        }
    });
    
    return x;
    
}
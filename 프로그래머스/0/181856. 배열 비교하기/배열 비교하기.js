function solution(arr1, arr2) {
    let size1 = arr1.length;
    let size2 = arr2.length;
    
    if(size1 === size2){
        size1 = arr1.reduce((acc,cur)=>acc+cur,0);
        size2 = arr2.reduce((acc,cur)=>acc+cur,0);
    }
    
    if(size1 > size2) return 1;
    
    if(size2 > size1) return -1;
    
    return 0;
}
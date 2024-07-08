function solution(arr1, arr2) {
    let size1 = arr1.length;
    let size2 = arr2.length;
    
    if(size1 === size2){
        size1 = arr1.reduce((acc,cur)=>acc+cur,0);
        size2 = arr2.reduce((acc,cur)=>acc+cur,0);
    }
    
    return size1 > size2 ? 1 : size1 < size2 ? -1 : 0;
}
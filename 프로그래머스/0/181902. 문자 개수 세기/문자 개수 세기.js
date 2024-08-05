function solution(my_string) {
    const zeroIndex = "A".charCodeAt();
    const result = new Array("z".charCodeAt(0)-zeroIndex + 1).fill(0);
    
    for(let c of my_string){
        result[c.charCodeAt(0)-zeroIndex]++;
    }
    
    const removeStartIndex = "Z".charCodeAt(0) - zeroIndex + 1;
    const removeStopIndex = "a".charCodeAt(0) - zeroIndex ;
    
    result.splice(removeStartIndex, removeStopIndex - removeStartIndex );

    return result;
}
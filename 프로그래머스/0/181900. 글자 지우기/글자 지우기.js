function solution(my_string, indices) {
    let strArr = [...my_string]
    
    for(const index of indices){
        delete strArr[index];
    }
    
    return strArr.join("");
}
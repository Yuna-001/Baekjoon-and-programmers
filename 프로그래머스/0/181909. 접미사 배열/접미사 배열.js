function solution(my_string) {
    const result = [];
    let str = "";
    
    for(let i=my_string.length-1; i>=0; i--){
        str = my_string[i] + str;
        result.push(str);
    }
    
    return result.sort();
}
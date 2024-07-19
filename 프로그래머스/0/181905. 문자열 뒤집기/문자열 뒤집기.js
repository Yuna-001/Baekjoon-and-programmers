function solution(my_string, s, e) {
    const strArr = [...my_string]
    const reversed = strArr.slice(s,e+1).reverse();
    strArr.splice(s,e-s+1,...reversed);
    return strArr.join("");
}
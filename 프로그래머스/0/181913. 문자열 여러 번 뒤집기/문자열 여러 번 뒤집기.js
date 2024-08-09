function solution(my_string, queries) {
    const resultArr = [...my_string];
    
    queries.forEach(([s,e])=>{
        const reversed = resultArr.slice(s,e+1).reverse();
        resultArr.splice(s,e-s+1,...reversed);
    })
    
    return resultArr.join("");
}
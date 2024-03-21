function solution(X, Y) {
    const xNumsObj = {};
    let result = "";
    
    for (const n of X){
        xNumsObj[n] = (xNumsObj[n] || 0) + 1;       
    }
    
    [...Y].sort((a,b) => b-a).forEach(n => {
        if(xNumsObj[n] >= 1){
            xNumsObj[n]--;
            result += n;
        }
    })
    
    return result.length > 0 ? ( result[0] === "0" ? "0" : result ) : "-1";
}
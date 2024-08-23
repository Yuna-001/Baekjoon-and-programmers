function solution(code) {
    let ret = "";
    let mode = false;
    
    for(let idx=0; idx<code.length; idx++){
        if(code[idx] === "1"){
            mode = !mode;
        }else if((!mode && idx%2===0) || (mode && idx%2===1)){
            ret += code[idx];
        }
    }
    
    return ret ? ret : "EMPTY";
}
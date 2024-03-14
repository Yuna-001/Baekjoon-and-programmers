function solution(s, n) {
    const small = "abcdefghijklmnopqrstuvwxyz";
    const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    
    for(let c of s){
        if(c !== " "){
            if(c === c.toUpperCase()){
                result+=large[(large.indexOf(c)+n)%large.length];
            }else{
                result+=small[(small.indexOf(c)+n)%small.length];
            }
        } else{
            result += " "
        }
    }
    
    return result;
}
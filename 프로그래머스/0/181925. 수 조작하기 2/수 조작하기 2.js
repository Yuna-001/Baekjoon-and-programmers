function solution(numLog) {
    let str = "";
    
    for (let i = 1; i < numLog.length ; i++){
        switch (numLog[i] - numLog[i-1]){
            case 1 : str += "w"; break;
            case -1 : str += "s"; break;
            case 10 : str += "d"; break;
            case -10 : str += "a";
        }
    }
    
    return str;
}
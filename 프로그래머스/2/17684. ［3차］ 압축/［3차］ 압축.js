function solution(msg) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const dict = {};
    let lastIndex = alphabet.length;
    
    for(let i=0; i<alphabet.length; i++){
        dict[alphabet[i]] = i+1;
    }
    
    const result = [];
    
    for(let i=0,str=""; i<msg.length; i++,str=""){
        str = msg[i];
        
        while(i < msg.length -1 && dict[str + msg[i+1]]){
            str += msg[++i];
        }
        
        result.push(dict[str]);
        
        if(i < msg.length -1) dict[str + msg[i+1]] = ++lastIndex;
    }
    
    return result;
}
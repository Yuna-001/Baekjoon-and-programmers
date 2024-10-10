function solution(record) {
    const nicknameObj = {};
    const result = [];
    
    for(const str of record){
        const [op, id, nickname] = str.split(" ");
        
        if(op === "Enter" || op === "Change"){
            nicknameObj[id] = nickname;
        }
    }
    
    for(const str of record){
         const [op, id] = str.split(" ");
        
        if(op === "Enter"){
            result.push(`${nicknameObj[id]}님이 들어왔습니다.`);
        }else if (op === "Leave"){
            result.push(`${nicknameObj[id]}님이 나갔습니다.`);
        }
    }
    
    return result;
}
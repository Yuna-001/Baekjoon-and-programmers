function solution(record) {
    const users = {}

    for(const cmd of record){
        const [op, id, nickname] = cmd.split(" ");
        
        if(op === "Enter" || op === "Change"){
            users[id] = nickname;
        }
    }
    
    const result = [];
    
    for(const cmd of record){
        const [op, id] = cmd.split(" ");
        
        if(op === "Enter") result.push(`${users[id]}님이 들어왔습니다.`)
        else if(op === "Leave") result.push(`${users[id]}님이 나갔습니다.`)
    }
    
    return result;
}
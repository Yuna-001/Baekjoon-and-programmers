function solution(record) {
    const result = [];
    const userNickname = {};
    const action = []; 
    
    record.forEach(input => {
        const [state, id, nickname] = input.split(" ");
        
        if(state !== "Leave"){
            userNickname[id] = nickname;
        }
        
        if(state !== "Change"){
            action.push({state, id});
        }
        
    })
    
    record.forEach(({state, id}) => {
        if(state === "Enter"){
            result.push(userNickname[id]+"님이 들어왔습니다.");
        }else if (state === "Leave"){
            result.push(userNickname[id]+"님이 나갔습니다.");
        }
    })
    
    return action.map(({state, id}) => {
        if(state === "Enter"){
            return userNickname[id]+"님이 들어왔습니다.";
        }else if (state === "Leave"){
            return userNickname[id]+"님이 나갔습니다.";
        }
    });
}
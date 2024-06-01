function solution(record) {
    const result = [];
    const userNickname = {};
    const recordArr = record.map(input => {
        const [state, id, nickname] = input.split(" ");
        if(state !== "Leave") userNickname[id] = nickname;
        return {state, id, nickname};
    })
    
    recordArr.forEach(({state, id}) => {
        if(state === "Enter"){
            result.push(userNickname[id]+"님이 들어왔습니다.");
        }else if (state === "Leave"){
            result.push(userNickname[id]+"님이 나갔습니다.");
        }
    })
    
    return result;
}
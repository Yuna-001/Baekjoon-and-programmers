// function solution(new_id) {
//     let answer = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g,"").replace(/\.{2,}/g,".").replace(/^\.|\.$/g,"").padEnd(1,"a").slice(0,15).replace(/\.$/,"");
    
//     return answer.padEnd(3,answer[answer.length-1]);;
// }


function solution(s){
    const answer = s.toLowerCase().replace(/[^a-z0-9-_.]/g, "").replace(/\.{2,}/g,".").replace(/^\.|\.$/g,"").padEnd(1,"a").slice(0,15).replace(/\.$/,"");
    
    return answer.padEnd(3, answer.at(-1));
}
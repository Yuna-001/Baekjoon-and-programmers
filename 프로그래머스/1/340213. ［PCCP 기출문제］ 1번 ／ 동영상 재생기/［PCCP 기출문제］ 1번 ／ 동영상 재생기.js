function solution(video_len, pos, op_start, op_end, commands) {
    const nArr = [60,1];
    const videoTime = video_len.split(":").reduce((acc,cur,i)=>acc+Number(cur)*nArr[i],0);
    const opStartTime = op_start.split(":").reduce((acc,cur,i)=>acc+Number(cur)*nArr[i],0);
    const opEndTime = op_end.split(":").reduce((acc,cur,i)=>acc+Number(cur)*nArr[i],0);
    let now = pos.split(":").reduce((acc,cur,i)=>acc+Number(cur)*nArr[i],0);
    
    for(const command of commands){
        if(now >= opStartTime && now <= opEndTime){
                now = opEndTime;
        }
        
        if(command === "prev"){
            now -= 10;
            if(now < 0){
                now = 0;
            }
        }else{
            now += 10;
            if(now > videoTime){
                now = videoTime;
            }
        }
    }
    
    if(now >= opStartTime && now <= opEndTime){
                now = opEndTime;
    }
    
    let m = String(Math.floor(now/60));
    let s = String(now % 60);
    
    if(m.length === 1) m = "0" + m;
    if(s.length === 1) s = "0" + s;
    
    return m + ":" + s;
}
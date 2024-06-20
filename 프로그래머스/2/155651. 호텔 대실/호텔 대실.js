function solution(book_time) {
    let room = [];
    
    const revervations = book_time.map(time => {
        const start = time[0].split(":");
        const end = time[1].split(":");
        return [start[0]*60 + +start[1], end[0]*60 + +end[1] + 10];
    })
    
    revervations.sort((a,b)=>a[0]-b[0]);
    
    for(const revervation of revervations){
        const index = room.findIndex(end => end <= revervation[0]);
        if(index === -1){
            room.push(revervation[1]);
        }else{
            room[index] = revervation[1];
        }
    }   
    
    return room.length;
}
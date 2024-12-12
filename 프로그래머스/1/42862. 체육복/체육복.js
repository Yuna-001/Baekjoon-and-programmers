function solution(n, lost, reserve) {
    const lostStudents = new Set(lost);
    const give = [];
    
    for(const student of reserve){
        if(lostStudents.has(student)){
            lostStudents.delete(student);
        }else {
            give.push(student);
        }
    }
    
    give.sort((a,b)=>a-b).forEach(student => {
        if(lostStudents.has(student-1)){
            lostStudents.delete(student-1);
        }else if(lostStudents.has(student+1)){
            lostStudents.delete(student+1);  
        }
    })
    
    return n - lostStudents.size;
}
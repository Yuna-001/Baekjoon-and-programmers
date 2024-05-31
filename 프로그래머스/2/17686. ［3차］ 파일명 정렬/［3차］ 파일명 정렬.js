function solution(files) {
    return files.sort((a,b)=>{
        const headA = a.split(/\d+/)[0].toLowerCase();
        const headB = b.split(/\d+/)[0].toLowerCase();
        
        if(headA !== headB) return headA > headB ? 1 : -1;
        
        const numberA = +a.match(/\d+/)[0];
        const numberB = +b.match(/\d+/)[0];
        
        return numberA - numberB
    });
}
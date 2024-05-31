function solution(files) {
    const reg = /([^\d]+)(\d+)/
    return files.sort((a,b)=>{
        let [,headA,numberA] = a.match(reg);
        let [,headB,numberB] = b.match(reg);
        
        headA = headA.toLowerCase();
        headB = headB.toLowerCase();
        
        if(headA !== headB) return headA > headB ? 1 : -1;
        return +numberA - +numberB
    });
}
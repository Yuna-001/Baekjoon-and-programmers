function solution(files) { 
    const reg = new RegExp(/(^\D+)|(\d+)/,"g");
    
    return files.sort((a,b)=>{
        let [headA, numberA] = a.split(".")[0].match(reg);
        let [headB, numberB] = b.split(".")[0].match(reg);
        headA = headA.toLowerCase();
        headB = headB.toLowerCase();
        
        if(headA !== headB) return headA.localeCompare(headB);
        
        return Number(numberA) - Number(numberB);
    })
}
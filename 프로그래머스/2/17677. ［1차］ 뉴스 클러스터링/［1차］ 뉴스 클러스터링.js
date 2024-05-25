function solution(str1, str2) {
    const a = str1.toLowerCase();
    const b = str2.toLowerCase();
    const objA = {}, objB = {};
    let union = 0, intersection = 0;
    
    for (let i=0; i<a.length-1; i++){
        let el = a.slice(i,i+2);
        if([...el].some(x => x < "a" || x > "z")) continue;
        objA[el] = (objA[el] || 0) + 1;
    }
    
    for (let i=0; i<b.length-1; i++){
        let el = b.slice(i,i+2);
        if([...el].some(x => x < "a" || x > "z")) continue;
        objB[el] = (objB[el] || 0) + 1;
    }
    
    for (const key in objA){
        if(objB.hasOwnProperty(key)){
            union += Math.max(objA[key], objB[key]);
            intersection += Math.min(objA[key], objB[key]);
            delete objB[key];
        } else {
            union += objA[key];
        }
    }
    
    for (const key in objB){
        union += objB[key];
    }
    
    return union ? Math.trunc(intersection / union * 65536) : 65536 ;
}
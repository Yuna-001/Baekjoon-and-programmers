function solution(s) {
    const arr = JSON.parse(s.replaceAll("{","[").replaceAll("}","]"));
    
    arr.sort((a,b)=>a.length-b.length);
    
    return [...new Set(arr.flat())]
}
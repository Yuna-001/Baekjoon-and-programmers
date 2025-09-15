function solution(s) {
    const sets = s.replaceAll(/{|}}/g,"").split("},").sort((a,b)=>a.length-b.length)
    const result = new Set();
    
    for(const set of sets){
        const numbers = set.split(",").map(Number);
        for(const n of numbers){
            result.add(n);
        }
    }
    
    return [...result]
}
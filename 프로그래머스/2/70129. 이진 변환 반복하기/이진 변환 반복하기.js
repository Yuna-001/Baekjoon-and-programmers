function solution(s) {
    let zeros = 0;
    let count = 0;
    
    while(s !== "1"){
        let c = [...s].filter(v => v==="1").length;
        zeros += s.length - c;
        s = c.toString(2);
        count++;
    }
    
    return [count,zeros];
}
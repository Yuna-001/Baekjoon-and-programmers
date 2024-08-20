function solution(a, b, c, d) {
    const map = new Map();
    
    [a,b,c,d].forEach(n => {
        map.set(n, (map.get(n) || 0) + 1);
    })
   
    switch(map.size){
        case 1 : return 1111 * a;
        case 2 : const [[n1,count1], [n2,count2]] = [...map];
                 if(count1 === count2) return (n1 + n2) * Math.abs(n1 - n2);
                 if(count1 > count2) return (10 * n1 + n2)**2;
                 return (10 * n2 + n1)**2;
        case 3 : const [[q],[r]] = [...map].filter(([n,count])=>count === 1);
                 return q * r;
        case 4 : return Math.min(a,b,c,d);
    }
}
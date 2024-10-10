function solution(want, number, discount) {
    const target = {};
    let count = 0;
    
    want.forEach((item,i) => {
        target[item] = number[i];
    })
   
    for(let i=0; i<discount.length; i++){
        const copy = new Map(Object.entries(target));
        for(let j=0; j<10; j++){
            const n = copy.get(discount[i+j]);
            if(n === 1) copy.delete(discount[i+j]);
            else if (n > 1) copy.set(discount[i+j], n-1);
        }
        if(copy.size === 0) count++;
    }
    
    return count;
}
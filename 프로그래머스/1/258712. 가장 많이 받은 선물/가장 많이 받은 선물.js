function solution(friends, gifts) {
    const giving = {};
    const receiving = {};
    const result = [];
    
    for(const friend of friends){
        giving[friend] = [];
        receiving[friend] = [];
        result.push(0);
    }
    
    for(const gift of gifts){
        const [p1, p2] = gift.split(" ");
        giving[p1].push(p2);
        receiving[p2].push(p1);
    }
    
    for(let i=0; i<friends.length; i++){
        for(let j=i+1; j<friends.length; j++){
            const a = giving[friends[i]].filter(x => x===friends[j]).length;
            const b = giving[friends[j]].filter(x => x===friends[i]).length;
            if(a > b) result[i]++;
            else if (b > a) result[j]++;
            else {
                const pointA = giving[friends[i]].length - receiving[friends[i]].length;
                const pointB = giving[friends[j]].length - receiving[friends[j]].length;
                if(pointA > pointB) result[i]++;
                else if(pointB > pointA) result[j]++;
            }
        }
        
    }
    
    return Math.max(...result);
}
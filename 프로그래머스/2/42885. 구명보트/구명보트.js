function solution(people, limit) {
    let boat = 0;
    
    people.sort((a,b)=>a-b);
    
    for(let i=0,j=people.length-1; i<=j; j--){
        if(people[i]+people[j]<=limit && i !==j ) i++;
        boat++;
    }
    
    return boat;
}
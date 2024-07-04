function solution(n, works) {
    if(works.reduce((total,work)=>total+work,0) <= n) return 0;
    
    works.sort((a,b)=>b-a);
    
    for(let i=1; i<=n; i++){
        works[0]--;
        sorting(works);
    }
    
    return works.reduce((total,work)=>total+work**2,0);
}

function sorting(arr){
    let i=0;
    while(arr[i] < arr[i+1]){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        i++;
    }
}
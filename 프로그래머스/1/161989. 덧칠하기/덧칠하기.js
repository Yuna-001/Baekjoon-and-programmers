function solution(n, m, section) {
    let count = 1;
    let start = section[0];
    
    for(let i=1; i<section.length; i++){
        if(section[i]-start >= m){
            count++;
            start = section[i];
        }
    }
    
    return count;
}
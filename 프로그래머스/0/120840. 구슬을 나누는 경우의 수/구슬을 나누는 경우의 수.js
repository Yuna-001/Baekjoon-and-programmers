function solution(balls, share) {
    // balls_C_share

    let n1 = 1;
    let n2 = 1;
    const choice = Math.min(balls-share,share);
    
    for(let i=1; i<=choice; i++){
        n1 *= balls-i+1;
        n2 *= i;
    }
    
    return n1 / n2;
}
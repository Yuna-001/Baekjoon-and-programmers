function solution(A, B) {
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);

    let i=0, j=0;
    for(; i < A.length; i++,j++){
        while(B[j] <= A[i] && j < B.length) j++;
        if(j === B.length) break;
    }
    
    return i;
}
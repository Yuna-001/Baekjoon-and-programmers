function solution(arr1, arr2) {
    // 3*7 x 7*2 => 3*2
    const result = Array.from({length:arr1.length},()=> new Array(arr2[0].length));
    
    for(let i=0; i<arr1.length; i++){
        for(let j=0,sum=0; j<arr2[0].length; j++,sum=0){
            for(let k=0; k<arr1[0].length; k++){
                sum += arr1[i][k]*arr2[k][j];
            }
            result[i][j] = sum;
        }
    }
    
    return result;
}
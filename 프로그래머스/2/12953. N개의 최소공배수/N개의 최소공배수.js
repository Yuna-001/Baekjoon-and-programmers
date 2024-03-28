function solution(arr) {
    for(let i=Math.max(...arr); ;i++){
        if(arr.every(n=>i%n===0)) return i;
    }
}
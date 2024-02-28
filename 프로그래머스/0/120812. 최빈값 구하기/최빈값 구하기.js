function solution(array) {
    let n, count;
    let arr = new Array(Math.max(...array)+1).fill(0);
    array.forEach(v => arr[v]++);
    count = Math.max(...arr)
    n = arr.indexOf(count);
    if (arr.indexOf(count,n+1) === -1){
        return n;
    }else{
        return -1;
    }
}
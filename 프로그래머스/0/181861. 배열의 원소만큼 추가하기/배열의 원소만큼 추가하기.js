function solution(arr) {
    return arr.reduce((acc,cur)=>acc.concat(Array.from({length : cur},()=>cur)),[]);
}
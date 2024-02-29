function solution(numbers) {
    return numbers.reduce((total,number)=>total+=number,0)/numbers.length;
    
}
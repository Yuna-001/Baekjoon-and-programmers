function solution(my_string) {
    let array = my_string.split(" ");
    let sum = +array[0];
    for(let i=1; i<array.length; i+=2){
        sum += array[i] === "+" ? +array[i+1] : -array[i+1];
    }
    return sum;
}
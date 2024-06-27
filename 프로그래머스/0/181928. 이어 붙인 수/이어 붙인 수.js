function solution(num_list) {
    let even = "";
    let odd = "";
    
    num_list.forEach(num => {
        if(num%2) even += num;
        else odd += num
    })
    
    return +even + +odd;
}
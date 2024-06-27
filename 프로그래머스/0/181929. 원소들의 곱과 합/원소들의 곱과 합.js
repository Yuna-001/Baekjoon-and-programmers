function solution(num_list) {
    let product = 1;
    let square = 0;
    
    for(const n of num_list){
        product *= n;
        square += n;
    }
    
    square **= 2;
    
    return +(product < square);
}
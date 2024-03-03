function solution(my_string) {
    return my_string.replaceAll(" ","").match(/-*\d+/g).reduce((acc,n)=>acc+ +n,0);
}
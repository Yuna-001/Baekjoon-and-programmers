function solution(num_list) {
   return num_list.reduce((total,num) => total + ~~Math.log2(num), 0)
}
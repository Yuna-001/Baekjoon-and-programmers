function solution(babbling) {
    return babbling.filter((str)=>str.replace(/aya|ye|woo|ma/g,"")==="").length;
}
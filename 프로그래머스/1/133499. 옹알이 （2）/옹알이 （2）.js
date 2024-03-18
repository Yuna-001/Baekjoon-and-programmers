function solution(babbling) {
    return babbling.filter((word)=>{
        for(const str of ["aya", "ye", "woo", "ma"]){
            if(word.includes(str+str)) return false;
        }
        return word.replace(/aya|ye|woo|ma/g,"") === ""
    }).length;
}
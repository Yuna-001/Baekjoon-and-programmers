function solution(spell, dic) {
    for(let str of dic){
        if(str.length === spell.length && spell.every(c => str.includes(c))){
            return 1;
        }
    }
    
    return 2;
}
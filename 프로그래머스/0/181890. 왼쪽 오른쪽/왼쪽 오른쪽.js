function solution(str_list) {
    let c, index;
    
    for(let i=0; i<str_list.length; i++){
        if(str_list[i] === "l" || str_list[i] === "r"){
            c = str_list[i];
            index = i;
            break;
        }
    }
    
    if(c==="l") return str_list.slice(0,index);
    if(c==="r") return str_list.slice(index+1);
    
    return [];
}
function solution(skill, skill_trees) {
    let count = 0;
    const reg = new RegExp(`[^${[...skill].join("|")}]`,"gi")
    
    for(const skill_tree of skill_trees){
        const checkSkills = skill_tree.replace(reg,"");
        count += +[...checkSkills].every((x,i) => x === skill[i]);
    }
    
    return count;
}
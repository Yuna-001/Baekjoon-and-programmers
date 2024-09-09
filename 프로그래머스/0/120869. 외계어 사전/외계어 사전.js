function solution(spell, dic) {
    return dic.some(str => str.length === spell.length && spell.every(c => str.includes(c))) ? 1 : 2;
}
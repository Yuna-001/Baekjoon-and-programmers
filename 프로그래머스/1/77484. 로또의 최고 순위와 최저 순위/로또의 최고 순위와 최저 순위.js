function solution(lottos, win_nums) {
    const ranking = [6,6,5,4,3,2,1];
    const win_nums_set = new Set(win_nums);
    let same = 0;
    let zeros = 0;
    
    for(let lotto of lottos){
        if(win_nums_set.has(lotto)) same++;
        else if(lotto === 0) zeros++;
    }
    
    return [ ranking[same+zeros], ranking[same] ];
}
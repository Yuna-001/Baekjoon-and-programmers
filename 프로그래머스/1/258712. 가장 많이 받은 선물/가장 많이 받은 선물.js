function solution(friends, gifts) {
    const scores = {};
    const givingLog = {};
    const giftCounts = {}
    
    friends.forEach(friend => {
        scores[friend] = 0;
        giftCounts[friend] = 0;
        givingLog[friend] = {};
    })

    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        
        scores[giver]++;
        scores[receiver]--;

        givingLog[giver][receiver] =  (givingLog[giver][receiver] || 0) + 1;
    })
    
    for(let i=0; i<friends.length; i++){
        for(let j=i+1; j<friends.length; j++){
            const iCount = givingLog[friends[i]][friends[j]] || 0;
            const jCount = givingLog[friends[j]][friends[i]] || 0;
            
            if(iCount > jCount) giftCounts[friends[i]]++;
            else if(iCount < jCount) giftCounts[friends[j]]++;
            else if(scores[friends[i]] > scores[friends[j]]) giftCounts[friends[i]]++;
            else if(scores[friends[i]] < scores[friends[j]]) giftCounts[friends[j]]++;
        }
    }
    
    return Math.max(...Object.values(giftCounts));
}
function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    let hp = health;
    
    hp -= attacks[0][1];
   
    for(let i=1; i<attacks.length && hp>0; i++){
        const time = attacks[i][0] - attacks[i-1][0] - 1;
        const recovery = x * time + Math.floor(time/t) * y;
        
        hp = Math.min(health, hp+recovery);
        hp -= attacks[i][1];
    }
    
    return hp > 0 ? hp : -1;
}
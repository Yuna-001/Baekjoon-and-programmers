function solution(money) {
    const americano = Math.floor(money/5500);
    const change = money%5500;
    
    return [americano,change];
}
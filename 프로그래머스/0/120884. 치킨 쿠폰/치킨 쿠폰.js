function solution(chicken) {
    const service = Math.floor(chicken/10);
    const rest = chicken%10;
    return service===0 ? 0 : service + solution(service+rest);
}


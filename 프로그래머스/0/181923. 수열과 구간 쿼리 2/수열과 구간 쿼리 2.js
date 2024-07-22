function solution(arr, queries) {
    return queries.map(([s,e,k])=>{
        const check = arr.filter((n,i) => i>=s && i<=e && n>k);
        return check.length ? Math.min(...check) : -1;
    })
}
function solution(my_string) {
    const upperCases = my_string.toUpperCase();
    return [...my_string].map((c,idx)=>c===upperCases[idx]? c.toLowerCase() : upperCases[idx]).join("");
}
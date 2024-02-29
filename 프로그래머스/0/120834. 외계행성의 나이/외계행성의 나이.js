function solution(age) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return [...age.toString()].map(v => alphabet[v]).join("");
}
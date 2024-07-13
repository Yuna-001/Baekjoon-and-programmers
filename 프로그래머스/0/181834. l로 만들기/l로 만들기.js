function solution(myString) {
    return [...myString].map(c => c < "l" ? "l" : c).join("");
}
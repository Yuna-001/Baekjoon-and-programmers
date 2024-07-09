function solution(myString, pat) {
    return +[...myString].map(c => c==="A" ? "B" : "A").join("").includes(pat);
}
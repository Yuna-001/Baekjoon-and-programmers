function solution(s, skip, index) {
    const skipChars = new Set(skip);
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].filter(c => !skipChars.has(c));

    let result = "";
    
    for(const c of s){
        let i = alphabet.indexOf(c);
        for(let j=0;j<index;j++){
            i = (i+1)%alphabet.length;
            if(skipChars.has(alphabet[i])) j--;
        }
        result += alphabet[i];
    }
    
    return result;
}
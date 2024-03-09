function solution(babbling) {
    return babbling.filter(word => canSpeak(word)).length;
}

function canSpeak(word){
    const arr = ["aya","ye","woo","ma"];
    for (const str of arr){
        if (word.split(str).length > 2) return false;
    }
    return word.replace(/aya|ye|woo|ma/g,"")==="" ;
}